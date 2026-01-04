# Egor Subbotin Portfolio

A minimal, modern portfolio website for filmmaker Egor Subbotin.

## Features

- **Minimal Black Design**: Clean, focused aesthetic that puts the work first
- **Responsive**: Works beautifully on all devices
- **Optimized Media**: Grid-based layouts that don't overwhelm the page
- **Free Hosting**: Deployed on GitHub Pages at no cost
- **Fast**: Pure HTML/CSS with no frameworks or dependencies

## Structure

```
├── index.html           # Home page with hero and category links
├── camerawork.html      # Camera work portfolio
├── directing.html       # Directing portfolio
├── postproduction.html  # Post production portfolio
├── organic.html         # Organic project showcase
├── styles.css           # Global styles
└── README.md           # This file
```

## Deploying to GitHub Pages (Free)

1. **Push to GitHub**:
   ```bash
   cd egorsubbotin.com
   git add .
   git commit -m "Initial portfolio site"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: https://github.com/ptrcktylr/egorsubbotin.com
   - Click "Settings" → "Pages" (in left sidebar)
   - Under "Source", select "Deploy from a branch"
   - Under "Branch", select "main" and "/ (root)"
   - Click "Save"

3. **Your site will be live at**: `https://ptrcktylr.github.io/egorsubbotin.com/`

   You can also set up a custom domain later (like egorsubbotin.com) for free by:
   - Purchasing a domain (usually $10-15/year)
   - Adding a CNAME file to the repo
   - Updating DNS settings

## Adding Real Media

Replace the placeholder images in each HTML file:

1. Upload images/videos to the repo in a `/media` folder
2. Or use video embeds from Vimeo (free account)
3. Replace placeholder `src` attributes with actual paths

Example for Vimeo embed:
```html
<div class="project-media" style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen>
    </iframe>
</div>
```

## Customization

### Update Contact Info

Edit [index.html](index.html) footer section:
```html
<a href="mailto:egor@example.com">Email</a>
```

### Adjust Colors

Edit [styles.css](styles.css) CSS variables:
```css
:root {
    --bg-black: #000000;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
}
```

### Add Projects

Copy a `project-card` block and update the title, description, and media.

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

## License

Personal portfolio for Egor Subbotin.
