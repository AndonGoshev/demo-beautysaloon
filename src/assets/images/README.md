# Images Directory

This directory contains all image assets for your project.

## Current Images (Replace These)

The following images are from the original car detailing project and should be replaced with your own:

### Logo Images
- `logo.png` - Main logo (64KB)
- `logo.jpg` - Logo alternative
- `logo.1.jpg`, `logo.2.jpg` - Logo variations

### Hero Images
- `hero-image.png` - Main hero image (2.7MB)
- `hero-image.jpg` - Hero image alternative
- `hero-image.1.jpg` - Hero image variation

### Service Images
- `usluga-*.jpg` - Service-related images
- `usluga-polirane.jpg`
- `usluga-vunshno1.jpg`, `usluga-vunshno2.jpg`, `usluga-vunshno3.jpg`
- `usluga-kojen-salon.jpg`
- `usluga-pastirane.jpg`
- `usluga-klimatik.jpg`

### Project/Portfolio Images
- `mercedes*.jpg` - Mercedes car images
- `bmw.jpg` - BMW car image
- `audi.jpg` - Audi car image
- `porche.jpg` - Porsche car image
- `bentley.jpg` - Bentley car image
- `coffee-house.jpg` - Coffee house image
- `washed-car.jpg` - Washed car image

### Background Images
- `background.jpg` - Background image
- `background2.jpg` - Alternative background

### Other Images
- `male-profile.jpg` - Profile image
- `socials-image.jpg` - Social media image
- `cta-home.jpg` - Call-to-action image
- `about-home.jpg` - About section image

## Recommended Image Structure

Replace the above images with your own, following this structure:

```
images/
├── logo.png              # Your main logo
├── hero-image.jpg        # Main hero/banner image
├── service-1.jpg         # Service images (6 total)
├── service-2.jpg
├── service-3.jpg
├── service-4.jpg
├── service-5.jpg
├── service-6.jpg
├── project-1.jpg         # Project/portfolio images
├── project-2.jpg
├── project-3.jpg
├── project-4.jpg
├── project-5.jpg
├── background.jpg        # Background image
└── socials-image.jpg     # Social media preview image
```

## Image Guidelines

- **Logo**: PNG format, transparent background, 200x200px minimum
- **Hero Images**: JPG format, 1920x1080px recommended
- **Service Images**: JPG format, 800x600px recommended
- **Project Images**: JPG format, 1200x800px recommended
- **Background**: JPG format, 1920x1080px minimum

## Optimization

Before adding your images:
1. Compress them using tools like TinyPNG or ImageOptim
2. Use appropriate formats (JPG for photos, PNG for logos/graphics)
3. Consider using WebP format for better performance
4. Keep file sizes under 500KB for most images

## Usage in Templates

Images are referenced in templates using:
```html
<img src="{{ 'assets/images/your-image.jpg' | url }}" alt="Description">
```

Or in data files:
```json
{
  "image": "/assets/images/your-image.jpg"
}
``` 