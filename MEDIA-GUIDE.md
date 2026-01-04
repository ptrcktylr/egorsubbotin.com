# Media Setup Guide

There are two ways to add media to the portfolio:

## Option 1: Embed Vimeo Videos (Recommended - Free & Easy)

If Egor has videos on Vimeo, embedding is the best option:

### Step 1: Get Vimeo Video IDs
1. Go to the video on Vimeo (e.g., `https://vimeo.com/123456789`)
2. Copy the number at the end (e.g., `123456789`)

### Step 2: Replace placeholder in HTML
Find this in your HTML:
```html
<div class="project-media">
    <img src="https://via.placeholder.com/..." alt="Project Name">
</div>
```

Replace with:
```html
<div class="project-media" style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/123456789?badge=0&autopause=0&player_id=0&app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            title="Project Name">
    </iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
```

---

## Option 2: Download Images from Tilda Site

### Method A: Browser Console (Easiest)

1. Open https://egorsubbotin.tilda.ws/camerawork in Chrome/Firefox
2. Right-click on an image → "Save Image As..."
3. Save to the `media/` folder in this repo
4. Repeat for each image you want

### Method B: Browser DevTools (Bulk Download)

1. Open https://egorsubbotin.tilda.ws/camerawork
2. Press F12 (or Cmd+Option+I on Mac)
3. Go to Console tab
4. Paste the contents of `scrape-media.js` and press Enter
5. It will output curl commands to download all images
6. Copy those commands and run them in Terminal

### Method C: Manual URLs

If you see specific images you want, right-click → "Copy Image Address" and download with:

```bash
# Create media folder
mkdir -p media

# Download individual images
curl -o "media/starting-from-scratch.jpg" "PASTE_IMAGE_URL_HERE"
```

---

## Option 3: Use Static Thumbnails + Vimeo

Best of both worlds:

1. Download one thumbnail image per project
2. Save to `media/` folder
3. Make the image clickable to open Vimeo:

```html
<div class="project-media">
    <a href="https://vimeo.com/123456789" target="_blank">
        <img src="media/starting-from-scratch.jpg" alt="Starting From Scratch">
    </a>
</div>
```

---

## After Adding Media

Once you have images in the `media/` folder or Vimeo IDs, update the HTML files:

1. Open `camerawork.html`, `directing.html`, etc.
2. Find each `<div class="project-media">` section
3. Replace the placeholder src with your actual image path or Vimeo embed
4. Commit and push:
   ```bash
   git add .
   git commit -m "Add portfolio media"
   git push
   ```

---

## Vimeo Account (Free Tier)

If Egor doesn't have a Vimeo account:
- Free tier: Up to 500MB/week upload, unlimited hosting
- Videos are embeddable and look professional
- Sign up at https://vimeo.com

This is perfect for portfolio sites and completely free.
