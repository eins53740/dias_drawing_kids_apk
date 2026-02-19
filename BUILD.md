# Desenha os Dias - Build Instructions

## Prerequisites

### For all platforms
- Node.js 18+ (https://nodejs.org)
- npm (comes with Node.js)

### For Android APK
- Android Studio (https://developer.android.com/studio)
- Android SDK 34 (install via Android Studio SDK Manager)
- Java 17+ (bundled with Android Studio)

### For Electron (desktop)
- No extra tools needed (npm handles everything)

### For generating new scene layers (optional)
- Python 3.11+
- OpenCV: `pip install opencv-python numpy`

## Quick Start

```bash
# 1. Clone and install
git clone <repo-url>
cd dias_drawing_kids_apk
npm install

# 2. Run dev server (test in browser)
npx serve www -l 3333
# Open http://localhost:3333
```

## Android APK Build

### Option A: Command line
```bash
# Sync web assets to Android project
npx cap sync android

# Build debug APK
cd android
./gradlew assembleDebug
# APK: android/app/build/outputs/apk/debug/app-debug.apk

# Build release APK (unsigned)
./gradlew assembleRelease
# APK: android/app/build/outputs/apk/release/app-release-unsigned.apk
```

### Option B: Android Studio
```bash
# Sync web assets first
npx cap sync android

# Open in Android Studio
npx cap open android
# Then: Build > Build Bundle(s) / APK(s) > Build APK(s)
```

### After editing web files (www/)
Always re-sync before building:
```bash
npx cap sync android
```

## Electron Desktop Build

### Windows (portable exe)
```bash
npm run build:electron:win
# Output: dist/DesenhaOsDias-win32-x64/DesenhaOsDias.exe
# The entire folder is portable - copy it anywhere and run
```

### macOS (must run on a Mac)
```bash
npm run build:electron:mac
# Output: dist/DesenhaOsDias-darwin-universal/DesenhaOsDias.app
```

### Run Electron in dev mode
```bash
npx electron .
```

## Project Structure

```
dias_drawing_kids_apk/
  www/                  # Web app (HTML/CSS/JS) - the source of truth
    index.html
    js/app.js           # Scene definitions, menu, navigation
    js/drawings.js      # SVG/PNG layer arrays + render engine
    css/style.css
    img/                # Photos + PNG layer directories
  android/              # Capacitor Android project (auto-generated)
  electron/             # Electron wrapper (main.js)
  tools/                # Python tools for generating scene layers
  dist/                 # Build outputs
```

## Generating Scene Layers (optional)

```bash
# Single scene with specific style
python tools/make_scene_layers.py <scene_id> --style cartoon|adaptive|posterize

# All 4-star scenes with assigned styles
python tools/make_scene_layers.py --4star

# After generating, splice into JS files
python tools/splice_scene.py --batch scene1,scene2,scene3

# Then sync to Android
npx cap sync android
```
