#!/bin/bash
# Build script for Desenha os Dias - cross-platform Electron portable builds
# Run on each target platform (Windows builds on Windows, macOS builds on macOS)

set -e

echo "=== Desenha os Dias - Build Script ==="
echo ""

PLATFORM=$(uname -s)
ARCH=$(uname -m)

case "$PLATFORM" in
  MINGW*|MSYS*|CYGWIN*|Windows*)
    echo "Building for Windows..."
    npx @electron/packager . DesenhaOsDias --platform=win32 --arch=x64 --overwrite --out=dist
    echo ""
    echo "Windows build: dist/DesenhaOsDias-win32-x64/DesenhaOsDias.exe"
    ;;
  Darwin)
    echo "Building for macOS..."
    if [ "$ARCH" = "arm64" ]; then
      npx @electron/packager . DesenhaOsDias --platform=darwin --arch=arm64 --overwrite --out=dist
      echo "macOS ARM build: dist/DesenhaOsDias-darwin-arm64/DesenhaOsDias.app"
    else
      npx @electron/packager . DesenhaOsDias --platform=darwin --arch=x64 --overwrite --out=dist
      echo "macOS x64 build: dist/DesenhaOsDias-darwin-x64/DesenhaOsDias.app"
    fi
    # Also build universal binary
    npx @electron/packager . DesenhaOsDias --platform=darwin --arch=universal --overwrite --out=dist
    echo "macOS Universal build: dist/DesenhaOsDias-darwin-universal/DesenhaOsDias.app"
    ;;
  Linux)
    echo "Building for Linux..."
    npx @electron/packager . DesenhaOsDias --platform=linux --arch=x64 --overwrite --out=dist
    echo "Linux build: dist/DesenhaOsDias-linux-x64/DesenhaOsDias"
    ;;
esac

echo ""
echo "Build complete!"
