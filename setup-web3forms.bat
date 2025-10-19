@echo off
echo ============================================
echo   WEB3FORMS ACCESS KEY SETUP
echo ============================================
echo.
echo Step 1: Opening Web3Forms website...
start https://web3forms.com
echo.
echo Step 2: Follow these instructions:
echo   1. Enter your email: manishbraje@gmail.com
echo   2. Click "Create Access Key"
echo   3. Check your email for the access key
echo   4. Copy the access key
echo.
echo Step 3: Paste your access key below and press Enter:
echo.
set /p ACCESS_KEY="Your Web3Forms Access Key: "
echo.
echo Step 4: Updating .env.local file...
echo # IMPORTANT: Do not commit this file to Git! > .env.local
echo # Add your Web3Forms access key here after signing up at https://web3forms.com >> .env.local
echo. >> .env.local
echo REACT_APP_WEB3FORMS_ACCESS_KEY=%ACCESS_KEY% >> .env.local
echo.
echo ============================================
echo   SUCCESS! Access key has been added.
echo ============================================
echo.
echo Next steps:
echo   1. Stop your dev server (Ctrl+C in the terminal)
echo   2. Run: npm start
echo   3. Test your contact form
echo.
pause
