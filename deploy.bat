@echo off
chcp 65001 >nul
echo ====================================
echo Git Auto Commit and Push
echo ====================================
echo.

REM Add all changes
echo [1/3] Adding all changes...
git add .
if errorlevel 1 (
    echo Error: Failed to add files
    pause
    exit /b 1
)
echo ✓ Files added successfully
echo.

REM Commit with timestamp
echo [2/3] Committing changes...
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c/%%b/%%a)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a:%%b)
set commit_message=Update: %mydate% %mytime%

git commit -m "%commit_message%"
if errorlevel 1 (
    echo No changes to commit or commit failed
    pause
    exit /b 1
)
echo ✓ Changes committed successfully
echo.

REM Push to remote
echo [3/3] Pushing to remote...
git push
if errorlevel 1 (
    echo Error: Failed to push to remote
    echo Make sure you have set the remote origin URL
    pause
    exit /b 1
)
echo ✓ Pushed to remote successfully
echo.

echo ====================================
echo All done! ✓
echo ====================================
pause
