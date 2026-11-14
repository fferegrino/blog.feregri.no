# Photo Gallery System

This gallery system allows you to showcase your photography with a beautiful masonry layout and lightbox functionality.

## Features

- **Main Gallery Page**: Shows thumbnails of all your photo collections
- **Detail Pages**: Full masonry layout for each collection with lightbox viewing
- **Responsive Design**: Works on all device sizes
- **Lightbox**: Click any image to view it in full size with navigation
- **Keyboard Navigation**: Use arrow keys and Escape in lightbox
- **External Image Hosting**: Works with any external image URLs

## How to Add Your Photos

### 1. Create a Gallery Collection

Create a new `.mdx` file in `src/content/collection/` with the following structure:

```mdx
---
title: "Your Gallery Title"
description: "A description of your photo collection"
thumbnail: "https://your-cdn.com/thumbnail.jpg"
category: "Nature" # Optional
date: "2024-01-15" # Optional
priority: 1 # Higher numbers appear first
images:
  - url: "https://your-cdn.com/image1.jpg"
    caption: "Optional caption for the image"
    alt: "Alt text for accessibility"
  - url: "https://your-cdn.com/image2.jpg"
    caption: "Another image caption"
    alt: "Another alt text"
---
```

### 2. Image Requirements

- **Thumbnail**: Should be around 800x600px for the main gallery page
- **Gallery Images**: Can be any size - the masonry layout will handle different orientations
- **External Hosting**: Use any image hosting service (AWS S3, Cloudinary, etc.)
- **Formats**: JPG, PNG, WebP all supported

### 3. Gallery Properties

- **title**: The name of your collection
- **description**: Brief description shown on the main gallery page
- **thumbnail**: URL to the thumbnail image for the main gallery
- **category**: Optional category tag (e.g., "Nature", "Urban", "Portraits")
- **date**: Optional date for the collection
- **priority**: Number for sorting (higher = appears first)
- **images**: Array of image objects with:
  - `url`: Full URL to the image
  - `caption`: Optional caption shown in lightbox
  - `alt`: Alt text for accessibility

## Navigation

The gallery is in site navigation as Collections. You can access it at `/collection`.

## Styling

The gallery uses Tailwind CSS classes and follows your site's design system:
- Dark/light mode support
- Responsive grid layouts
- Hover effects and transitions
- Mobile-optimized masonry layout

## Example Collections

Collections live in `src/content/collection/` (for example football shirts). Host images on ImageKit so gallery pages can append `tr=` transforms.

## Technical Details

- Built with Astro and TypeScript
- Uses CSS columns for masonry layout
- Vanilla JavaScript for lightbox functionality
- SEO-friendly with proper meta tags
- Accessible with proper alt text and keyboard navigation
