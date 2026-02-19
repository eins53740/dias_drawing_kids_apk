@echo off
title Desenhos do Miguel D. D.
echo ========================================
echo   Desenhos do Miguel D. D.
echo ========================================
echo.

if exist "dist\DesenhaOsDias-win32-x64\DesenhaOsDias.exe" (
    echo Launching desktop app...
    start "" "dist\DesenhaOsDias-win32-x64\DesenhaOsDias.exe"
) else (
    echo Desktop exe not found. Starting web server...
    echo Open http://localhost:3333 in your browser.
    echo Press Ctrl+C to stop.
    npx serve www -l 3333
)
