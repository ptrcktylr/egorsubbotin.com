# Resume/CV Integration Plan

## Overview
Based on the PDFs in `/sources`, here's a comprehensive plan for integrating Egor's resume information into the site.

## Strategy

### Option 1: Single Dedicated Resume Page (Recommended)
**Pros:**
- Clean, professional presentation
- Easy to maintain and update
- Can be linked from all portfolio pages
- Better for SEO (single authoritative resume page)

**Implementation:**
1. Create `resume.html` page
2. Add "Resume" link to navigation on all pages
3. Include sections:
   - **Experience** (chronological, most recent first)
   - **Skills & Certifications** (IATSE Local 700, Part 107 UAV, Software)
   - **Education** (SUNY Purchase BFA)
   - **Awards & Festivals** (15+ film festival selections)
   - **Download PDF** button (link to PDF resume)

### Option 2: Resume Sections on Each Portfolio Page
**Pros:**
- Context-specific information
- Shows depth of experience per category

**Cons:**
- Repetitive information across pages
- Harder to maintain
- Could clutter the minimal aesthetic

**Implementation:**
- Add "Experience" section to each page (camerawork, directing, postproduction)
- List only relevant projects for that discipline

### Option 3: Hybrid Approach (Best Balance)
Combine both:
1. **Full resume page** for comprehensive CV
2. **Highlights section** on each portfolio page showing 3-5 most notable projects
3. Link from highlights to full resume page

## Resume Content to Include

### From General CV & Resume PDFs:

**Currently In Production:**
- "Organic II: Florida" (Pre-Production) - Nature Documentary
- "Ashes to Ashes" (Pre-Production) - Drama about grief
- "Ambidextrous" (Post-Production) - Thriller about creativity

**Notable Credentials:**
- **IATSE Local 700 Member** (Editors Guild of America) - Since 2023
- **Part 107 UAV License** (Certified drone pilot)
- **Software:** AVID, Premiere Pro, After Effects, Photoshop
- **Languages:** Fluent in Russian, English

**Recent High-Profile Work:**
- "109 Billion Followers" (2025) - Feature with J K Simmons (DIT/AE)
- "American Rust: Season 2" (2023) - Amazon Prime (Apprentice Editor)
- "The Gilded Age" (2023) - HBO (Location Assistant)

**Film Festival Awards (15+):**
- Cannes Shorts
- Golden Sparrow International Film Festival
- London Shorts Special Selection Nominee
- Austin International Art Festival
- Vancouver Movie Awards
- Florence Indie Film Festival
- And 9+ more international festivals

## Vimeo Embed Framework

### Videos with N/A Passwords (PUBLIC):
✅ Already added:
1. **Organic Mini-Series Trailer** - https://vimeo.com/915796876
2. **Isotonic** - https://vimeo.com/621816073

### Videos with Passwords (PASSWORD PROTECTED - Don't add yet):
These should NOT be embedded publicly until password protection is removed:
- Organic (password: Organic)
- Rock For Sale (password: RFS2025)
- Coffee (password: Coffee2025)
- Heartworms (password: Heartworms2025)
- Undergrads (password: UG2020)
- Untold Stories (password: UntSto2025)

### How to Add More Public Videos Later:
```html
<div class="vimeo-embed-container">
    <h3 class="vimeo-title">Film Title Here</h3>
    <div class="vimeo-wrapper" style="padding:56.25% 0 0 0;position:relative;">
        <iframe src="https://player.vimeo.com/video/VIDEO_ID_HERE?badge=0&autopause=0&player_id=0&app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                title="Film Title Here">
        </iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
    <p class="vimeo-description">Brief description of the film.</p>
</div>
```

## Next Steps

1. **Decide on resume approach** (Option 1, 2, or 3)
2. **Create resume page** if going with Option 1 or 3
3. **Add password-protected Vimeo embeds** once passwords are removed or you want to gate them
4. **Populate other portfolio pages** (directing, postproduction) with their specific content

## Files to Reference:
- `/sources/1. Egor Subbotin General CV.pdf` - Full filmography
- `/sources/Resume 1 Egor Subbotin General Film Production Resume 2025.pdf` - Professional resume format
- `/sources/Resume 2 Egor Subbotin Directing Resume 2025.pdf` - Directing-specific
- `/sources/Resume 3 Egor Subbotin Post Production Resume 2025.pdf` - Post-production-specific
- `/sources/Resume 4 Egor Subbotin Cinematography Resume 2025.pdf` - Cinematography-specific
- `/sources/3. Links to Egor's movies.pdf` - Vimeo links with passwords

## Current Site Status

✅ Completed:
- Under construction banner on all pages
- Social links (Email, Vimeo, Instagram, IMDB) in hero section
- Last Minute Movies page with YouTube & Instagram embeds
- Last Minute Movies in navigation on all pages
- Vimeo embeds for public videos on Organic page
- .gitignore for /sources directory

⏳ To Do:
- Resume/CV page integration
- More Vimeo embeds (when passwords are removed)
- Populate directing.html with actual projects
- Populate postproduction.html with actual projects
- Consider adding film festival laurels/badges
