# Desenhos do Miguel D. D.

A progressive step-by-step drawing guide app for kids, featuring tutorials based on real family photos from the Dias family. 25 scenes across 4 categories, with multiple artistic styles.

(c) BD 2026

## How to Run

### Quick Launch (Windows)

Double-click **`run.bat`** in the root folder. It launches the desktop app if available, otherwise starts a web server.

### Option 1: Portable Desktop App (Windows)

No installation needed. Just run:

```
dist\DesenhaOsDias-win32-x64\DesenhaOsDias.exe
```

Or extract `dist/DesenhaOsDias-portable.zip` anywhere and run `DesenhaOsDias.exe`.

### Option 2: Web Browser (Python — no Node.js needed)

```bash
cd www
python -m http.server 3333
```

Open **http://localhost:3333** in your browser.

### Option 3: Web Browser (Node.js)

```bash
npm install
npx serve www -l 3333
```

Open **http://localhost:3333** in your browser.

### Option 4: Electron Dev Mode

```bash
npm install
npx electron .
```

### Option 5: Android APK (future)

The project includes a Capacitor Android project ready for Android Studio. See **[ANDROID_STUDIO_DEPLOY.md](ANDROID_STUDIO_DEPLOY.md)** for the full step-by-step guide.

```bash
npm install
npx cap sync android
npx cap open android
# Then: Build > Build APK in Android Studio
```

Install the APK on any Android 5.1+ device.

## Features

- **25 drawing scenes** organized in 4 family categories
- **Landscape & portrait** orientations matched to each photo
- **5 artistic styles**: Canny edge detection, cartoon, adaptive threshold, posterize, hand-drawn SVG
- **Progressive layers** — from composition guides to final signature
- **Color-coded arrows** in the menu showing each scene's style
- **Category quick-jump** navigation bar
- **Overall progress bar** tracking completed drawings
- **Reference photos** shown alongside each step
- Step-by-step instructions in Portuguese with tips for young artists
- Offline-capable (no network needed)

## Scenes (25)

| Category | Scenes | Styles |
|----------|--------|--------|
| **O Miguel** | Miguel Bebe, Batizado, Miguel, Matilde, MDD, MDD e Amigos, MDD Sprunkies | Canny, Cartoon, Posterize |
| **Os Pais** | Pais Estudio, Casamento, Pais, Sandra | SVG, Cartoon, Posterize |
| **A Familia** | Pai & Tio, Bruno & Miguel, Padrinhos, 2a Familia, Dias Family, Dias 66, Espedrada, Primos Espedrada | Cartoon, Adaptive, Posterize, SVG |
| **Os Avos** | Avos Duarte, Avos Dias, Bisavo, Tio-Avo, Avos MDD, Espedrada Primos | Posterize, Adaptive, Cartoon, SVG |

## Project Structure

```
dias_drawing_kids_apk/
  run.bat                       # Quick launcher (Windows)
  www/                          # Web app (source of truth)
    index.html                  # Single-page app
    js/app.js                   # 25 scene definitions, menu, navigation
    js/drawings.js              # SVG/PNG layer arrays + render engine
    css/style.css               # Full styling
    img/                        # Photos + PNG layer directories
  android/                      # Capacitor Android project
  electron/main.js              # Electron desktop wrapper
  dist/                         # Build outputs
    DesenhaOsDias-win32-x64/    # Windows portable exe
    DesenhaOsDias-portable.zip  # Windows portable zip
  tools/                        # Python tools for generating scene layers
    make_scene_layers.py        # PNG generator (5 artistic styles)
    splice_scene.py             # Injects layers into JS files
  img/                          # Original source photos (hi-res)
  ANDROID_STUDIO_DEPLOY.md      # Android build guide
  BUILD.md                      # Full build instructions
```

## Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **SVG/PNG:** Programmatic SVG with PNG traced layers (OpenCV edge detection)
- **Desktop:** Electron (portable, no install)
- **Mobile:** Capacitor 6 for Android
- **Tools:** Python 3 + OpenCV for image processing

## Rebuilding

```bash
# Rebuild Electron exe (Windows)
npm run build:electron:win

# Regenerate all PNG layers
python tools/make_scene_layers.py --4star
python tools/make_scene_layers.py miguelbebe batizado miguel matilde
python tools/splice_scene.py --batch <scene_list>

# Sync to Android
npx cap sync android
```

See **[BUILD.md](BUILD.md)** for full build instructions.

## License

Private family project. All photos are personal family images.
