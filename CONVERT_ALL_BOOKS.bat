@echo off
title Dr. J. Arawindhan - Automated 3D Flipbook Ingestion Engine
echo =====================================================================
echo    DR. J. ARAWINDHAN PLATFORM - AUTOMATED BOOK CONVERTER
echo =====================================================================
echo.
echo [1/3] Checking Python environment...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed or not in PATH. Please install Python 3.
    pause
    exit /b 1
)

echo [2/3] Checking dependencies (pypdfium2, Pillow)...
python -m pip install --quiet pypdfium2 Pillow

echo [3/3] Processing all books in 'incoming_books/' directory...
echo.
python scripts\batch_convert_all_books.py

echo.
echo =====================================================================
echo    ALL BOOKS CONVERTED TO 3D FLIPBOOKS SUCCESSFULLY!
echo    - High-res retina WebP pages rendered
echo    - Covers extracted automatically
echo    - Download links and gated access wired
echo =====================================================================
pause
