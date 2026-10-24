@echo off
title Dr. J. Arawindhan - Convert Single Book to 3D Flipbook
echo =====================================================================
echo    DR. J. ARAWINDHAN PLATFORM - SINGLE BOOK 3D FLIPBOOK CONVERTER
echo =====================================================================
echo.

:: 1. Verify Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed or not in PATH. Please install Python 3.
    pause
    exit /b 1
)

:: 2. Ensure dependencies are installed
python -m pip install --quiet pypdfium2 Pillow

:: 3. Run Python single book engine (handles ampersands, spaces, unicode safely)
python scripts\convert_single_book.py %*

echo.
pause
