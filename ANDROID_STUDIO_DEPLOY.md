# Android Studio Deployment Guide — Desenhos do Miguel D. D.

## Overview

This is a Capacitor 6 web app (HTML/CSS/JS in `www/`) wrapped as a native Android project.
The Android project lives in `android/` and is ready to open in Android Studio.

**App ID:** `com.dias.desenha`
**Min SDK:** 22 (Android 5.1+)
**Target SDK:** 34 (Android 14)

---

## Step-by-Step: Build APK on a New PC

### 1. Prerequisites

| Tool | Version | Download |
|------|---------|----------|
| **Android Studio** | 2024.1+ (Ladybug) | https://developer.android.com/studio |
| **Node.js** | 18+ | https://nodejs.org |
| **Java** | 17+ | Bundled with Android Studio |

### 2. Clone and Install Dependencies

```bash
git clone <repo-url>
cd dias_drawing_kids_apk
npm install
```

### 3. Sync Web Assets to Android

```bash
npx cap sync android
```

This copies `www/` into `android/app/src/main/assets/public/` and updates Capacitor plugins.

**Run this every time you change files in `www/`.**

### 4. Open in Android Studio

```bash
npx cap open android
```

Or manually: Android Studio > Open > select the `android/` folder.

### 5. Wait for Gradle Sync

Android Studio will automatically download dependencies and sync. This may take several minutes on first run.

If prompted:
- Accept any SDK license agreements
- Install any missing SDK components (SDK 34, Build Tools)

### 6. Build Debug APK

**Menu:** Build > Build Bundle(s) / APK(s) > Build APK(s)

**Output:** `android/app/build/outputs/apk/debug/app-debug.apk`

### 7. Install on Device

Connect Android phone via USB (enable USB Debugging in Developer Options):

```bash
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
```

Or drag the APK file to the phone, then open it to install.

---

## Build Signed Release APK

### 1. Generate Keystore (once)

```bash
keytool -genkey -v -keystore desenha-release.keystore -alias desenha -keyalg RSA -keysize 2048 -validity 10000
```

Store `desenha-release.keystore` securely. **Never commit it to git.**

### 2. Configure Signing in Android Studio

1. Build > Generate Signed Bundle/APK
2. Select APK
3. Choose keystore file, enter passwords
4. Select `release` build variant
5. Build

**Output:** `android/app/build/outputs/apk/release/app-release.apk`

### 3. Alternative: Command Line

Create `android/keystore.properties`:
```properties
storeFile=../desenha-release.keystore
storePassword=YOUR_PASSWORD
keyAlias=desenha
keyPassword=YOUR_PASSWORD
```

Then build:
```bash
cd android
./gradlew assembleRelease
```

---

## Command Line Quick Reference

```bash
# Sync web assets (REQUIRED before every build after www/ changes)
npx cap sync android

# Build debug APK (no signing needed)
cd android && ./gradlew assembleDebug

# Build release APK (requires signing config)
cd android && ./gradlew assembleRelease

# Install on connected device
adb install -r android/app/build/outputs/apk/debug/app-debug.apk

# Open in Android Studio
npx cap open android

# Run on device directly from Android Studio
# Click the green Run button (Shift+F10)
```

---

## Project Structure

```
android/
  app/
    src/main/
      assets/public/     # <- www/ files copied here by `cap sync`
      java/.../           # Capacitor MainActivity
      res/
        values/strings.xml  # App name: "Desenhos do Miguel D. D."
        drawable/           # App icon
      AndroidManifest.xml
    build.gradle          # App-level build config
  build.gradle            # Project-level build config
  gradle.properties
  settings.gradle
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Gradle sync fails | File > Invalidate Caches > Restart |
| SDK not found | Android Studio > Settings > SDK Manager > Install SDK 34 |
| Web changes not showing | Run `npx cap sync android` and rebuild |
| App crashes on launch | Check Logcat in Android Studio for errors |
| Build tools missing | Install via SDK Manager > SDK Tools tab |
| `JAVA_HOME` not set | Android Studio bundles JDK; set in Settings > Build > Gradle > JDK |

---

## Capacitor Configuration

File: `capacitor.config.json`
```json
{
  "appId": "com.dias.desenha",
  "appName": "Desenhos do Miguel D. D.",
  "webDir": "www",
  "android": {
    "backgroundColor": "#FFF8E1"
  }
}
```

---

*Generated 2026-02-19 | Capacitor 6 + Android SDK 34*
