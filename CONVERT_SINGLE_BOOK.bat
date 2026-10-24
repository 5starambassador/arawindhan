@echo off
title Dr. J. Arawindhan - Convert Single Book to 3D Flipbook
echo =====================================================================
echo    DR. J. ARAWINDHAN PLATFORM - SINGLE BOOK 3D FLIPBOOK CONVERTER
echo =====================================================================
echo.

:: 1. Check Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed or not in PATH. Please install Python 3.
    pause
    exit /b 1
)

:: 2. Check Dependencies
python -m pip install --quiet pypdfium2 Pillow

:: 3. Check if PDF was dragged and dropped onto this .bat file
if "%~1" neq "" (
    set "PDF_PATH=%~1"
    goto PROCESS
)

:: 4. If not dragged, prompt user to enter/drag PDF path
echo Drag and drop your PDF file into this window, or type its path:
set /p "PDF_PATH=> "

:: Remove any surrounding quotes
set PDF_PATH=%PDF_PATH:"=%

:PROCESS
if not exist "%PDF_PATH%" (
    echo.
    echo [ERROR] File not found: "%PDF_PATH%"
    echo Please make sure the path is correct.
    echo.
    pause
    exit /b 1
)

echo.
echo Optional: Enter the target slug name (e.g. shambala-book, wow-parenting-book).
echo (Leave blank to auto-detect from the filename):
set /p "BOOK_SLUG=> "

echo.
echo =====================================================================
echo Converting: "%PDF_PATH%"
if "%BOOK_SLUG%" neq "" echo Target Slug: %BOOK_SLUG%
echo =====================================================================
echo.

if "%BOOK_SLUG%" neq "" (
    python scripts\batch_convert_all_books.py "%PDF_PATH%" "%BOOK_SLUG%"
) else (
    python scripts\batch_convert_all_books.py "%PDF_PATH%"
)

echo.
echo =====================================================================
echo    CONVERSION COMPLETED!
echo    - Retina WebP pages generated in public/books/<slug>/pages/
echo    - Book Cover saved to public/images/books/<slug>.jpg
echo    - Config updated in src/data/books.ts
echo =====================================================================
echo.
pause
