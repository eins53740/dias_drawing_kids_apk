# Repository Guidelines

## Project Structure & Module Organization
- `www/` is the source of truth for the app UI and content.
- `www/js/app.js` holds scene metadata/navigation; `www/js/drawings.js` contains layer rendering logic; `www/js/scenes/` stores scene-specific modules.
- `www/css/style.css` defines app styling.
- `www/img/` contains runtime images and generated step layers (`step1.png`, `step1_hl.png`, etc.).
- `tools/` contains Python utilities for generating/splicing drawing layers.
- `android/` is the Capacitor Android wrapper project; `electron/main.js` is the desktop wrapper.
- `img/` stores original high-resolution source photos.

## Build, Test, and Development Commands
- `npm install`: install Node dependencies.
- `npm start`: serve `www/` locally (default dev web run).
- `npm run electron`: run desktop app in Electron dev mode.
- `npm run cap:sync`: sync web assets into native Capacitor projects.
- `npm run build:android`: sync + build Android debug APK via Gradle.
- `npm run build:electron:win`: package a Windows portable desktop build.
- `cd android; ./gradlew assembleDebug`: direct Android debug APK build.
- `python tools/make_scene_layers.py --4star`: regenerate predefined scene layers.

## Coding Style & Naming Conventions
- JavaScript/CSS: 2-space indentation, semicolons, camelCase for variables/functions, lowercase IDs for scene keys (for example, `miguelbebe`, `paitio`).
- Python tools: follow existing PEP 8-like style with 4-space indentation and snake_case.
- Keep scene assets and IDs aligned across `www/js/*` and `www/img/<scene_id>/`.
- Prefer small, targeted edits; do not reformat unrelated files.

## Testing Guidelines
- No full automated JS test suite is configured yet.
- Android test stubs exist under `android/app/src/test/` and `android/app/src/androidTest/`.
- Minimum validation for changes:
  - Run `npm start` and verify scene navigation, step rendering, and image loads.
  - For Android-impacting changes, run `npm run cap:sync` then `./gradlew assembleDebug`.

## Commit & Pull Request Guidelines
- Follow concise, imperative commit subjects (for example, `Add run.bat launcher, move phase2 images to img/`).
- Group related changes in one commit; keep generated artifacts intentional.
- PRs should include:
  - What changed and why.
  - Affected scenes/modules (paths).
  - Screenshots/GIFs for UI changes.
  - Build/test commands executed and results.

## Security & Configuration Tips
- This is a private family-photo project. Do not add new personal photos or identifiers without explicit approval.
- Avoid committing local build outputs unless the change explicitly updates distributables.
