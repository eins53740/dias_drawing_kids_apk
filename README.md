# Desenha os Dias

A progressive step-by-step drawing guide app for kids, featuring SVG tutorials based on real family photos from the Dias family.

Built as a web app (HTML/CSS/JS) wrapped with [Capacitor](https://capacitorjs.com/) for Android APK distribution.

## Features

- **16 drawing scenes** organized in 4 family categories
- **10 progressive layers** per scene — from composition guides to final polish
- **Reference photos** shown alongside each drawing step
- Step-by-step instructions in Portuguese with tips for young artists
- Completion screen with stars and the finished drawing
- Mobile-first responsive design
- Offline-capable (no network needed after loading)

## Scenes

| Category | Scenes |
|----------|--------|
| **O Miguel** | Miguel Beb&eacute;, Batizado, Miguel, Matilde, MDD |
| **Os Pais** | Pais Est&uacute;dio, Casamento, Pais, Sandra |
| **A Fam&iacute;lia** | Pai &amp; Tio, Bruno &amp; Miguel, Padrinhos |
| **Os Av&oacute;s** | Av&oacute;s Duarte, Av&oacute;s Dias, Bisav&ocirc;, Tio-Av&ocirc; |

## Drawing System

Each scene has 10 SVG layers rendered progressively:

| Layers | Role | Render Order |
|--------|------|--------------|
| 0–6 | Outlines (guides, body, face, hair, clothing, hands, background) | Rendered **on top** |
| 7–9 | Color fills (figures, scene, polish/highlights) | Rendered **behind** outlines |

Layer functions use shared SVG helpers: `ce()`, `sk()`, `lt()`, `pp()`, `fl()`, `fe()`

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)

### Run the Dev Server

```bash
# Clone the repository
git clone https://github.com/BD-dias/drawing-kids-apk.git
cd drawing-kids-apk

# Install dependencies
npm install

# Start the server (default port)
npm start

# Or specify a port
npx serve www -l 3333
```

Then open **http://localhost:3333** in your browser (or **http://localhost:3000** with `npm start`).

### Manual Server (no npm)

If you don't have Node.js, you can use any static file server pointing to the `www/` directory:

```bash
# Python 3
cd www
python -m http.server 3333

# PHP
cd www
php -S localhost:3333

# Or simply open www/index.html directly in a browser
# (some features may not work with file:// protocol)
```

## Build Android APK

```bash
# Initialize Capacitor (first time only)
npm run cap:init
npm run cap:add:android

# Sync web files to Android project
npm run cap:sync

# Open in Android Studio
npm run cap:open:android
```

Then build the APK from Android Studio (`Build > Build Bundle(s) / APK(s) > Build APK`).

## Project Structure

```
.
├── www/                      # Web app root (served as-is)
│   ├── index.html            # Single-page app entry point
│   ├── manifest.json         # PWA manifest
│   ├── css/
│   │   └── style.css         # Full styling (categories, cards, canvas)
│   ├── js/
│   │   ├── app.js            # Scene data, menu builder, navigation (~410 lines)
│   │   └── drawings.js       # 16 SVG scene layer arrays + render engine (~11,000 lines)
│   └── img/                  # Family reference photos (23 images)
├── capacitor.config.json     # Capacitor Android config
├── package.json              # Node dependencies (Capacitor + serve)
└── README.md
```

## Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **SVG:** Programmatic SVG generation via DOM API (no libraries)
- **Mobile:** Capacitor 6 for Android wrapper
- **Dev Server:** [serve](https://www.npmjs.com/package/serve) (static file server)

## How It Works

1. `app.js` defines the 16 scenes with metadata (name, photo, category, step descriptions)
2. `drawings.js` contains 16 layer arrays (10 functions each) that build SVG drawings progressively
3. The render engine draws color layers (7–9) first, then outline layers (0–6) on top
4. Each step reveals one more layer, with the active layer highlighted in orange
5. A notebook-paper background with faint lines gives the "sketchbook" feel

## License

Private family project. All photos are personal family images.
