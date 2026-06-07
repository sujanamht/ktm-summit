# Kathmandu Summit Adventure

A travel/adventure website for Kathmandu Summit Adventure.

## Stack

- **Frontend:** HTML + Tailwind CSS (CDN only — no build tools, no npm)
- **Backend:** Django (to be integrated in a later phase)

## Color Palette

| Name      | Hex       | Usage            |
|-----------|-----------|------------------|
| Primary   | `#1A3C5E` | Navy — nav, footer, headings |
| Primary Light | `#2A5F8F` | Hover states, accents |
| Primary Dark  | `#0F2340`  | Footer background |
| Secondary | `#D97706` | Amber/gold — CTAs, highlights |
| Secondary Light | `#F59E0B` | Hover states |
| Secondary Dark  | `#B45309`  | Active states |

## Fonts

- **Inter** via Google Fonts (400, 500, 600, 700)

## Project Structure

```
kathmandu-summit-adventure/
├── index.html          # Main entry point
├── assets/
│   ├── css/
│   │   └── styles.css  # CSS reset + custom styles beyond Tailwind
│   └── images/         # Static image assets
└── README.md
```

## Development

No build step required. Open `index.html` directly in a browser or serve with any static file server.
