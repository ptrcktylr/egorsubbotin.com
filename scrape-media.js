// Run this in the browser console on each Tilda page to extract media URLs
// Instructions:
// 1. Open https://egorsubbotin.tilda.ws/camerawork in your browser
// 2. Open Developer Tools (F12 or Cmd+Option+I)
// 3. Go to Console tab
// 4. Paste this entire script and press Enter
// 5. Copy the output and save it

(function() {
    const images = [];
    const videos = [];

    // Get all images
    document.querySelectorAll('img').forEach(img => {
        const src = img.src || img.dataset.src || img.getAttribute('data-original');
        if (src && !src.includes('tildacopy') && !src.includes('placeholder')) {
            images.push(src);
        }
    });

    // Get all videos
    document.querySelectorAll('video source, video').forEach(video => {
        const src = video.src || video.querySelector('source')?.src;
        if (src) {
            videos.push(src);
        }
    });

    // Get background images from divs
    document.querySelectorAll('[style*="background-image"]').forEach(el => {
        const bg = el.style.backgroundImage;
        const match = bg.match(/url\(['"]?(.*?)['"]?\)/);
        if (match && match[1] && !match[1].includes('tildacopy')) {
            images.push(match[1]);
        }
    });

    console.log('=== IMAGES ===');
    [...new Set(images)].forEach(url => console.log(url));

    console.log('\n=== VIDEOS ===');
    [...new Set(videos)].forEach(url => console.log(url));

    console.log('\n=== DOWNLOAD SCRIPT ===');
    console.log('Copy and run these commands in your terminal:\n');
    console.log('mkdir -p media');
    [...new Set(images)].forEach((url, i) => {
        const ext = url.split('.').pop().split('?')[0] || 'jpg';
        console.log(`curl -o "media/img-${i}.${ext}" "${url}"`);
    });
    [...new Set(videos)].forEach((url, i) => {
        const ext = url.split('.').pop().split('?')[0] || 'mp4';
        console.log(`curl -o "media/video-${i}.${ext}" "${url}"`);
    });
})();
