@echo off
cd /d "C:\Users\Youness\Claude\Projects\Site internet"

echo === PUSH CABINET CAEMC ===
echo.

REM Supprimer verrous git
if exist ".git\index.lock" del /f ".git\index.lock"
if exist ".git\HEAD.lock" del /f ".git\HEAD.lock"

REM Creer branche orpheline propre (historique sans secrets)
git checkout --orphan clean_main

REM Ajouter tous les fichiers (PUSH_GITHUB.bat exclu via .gitignore)
git add -A

REM Commit propre
git config user.email "chorfi.younes@gmail.com"
git config user.name "Younes Chorfi"
git commit -m "Cabinet CAEMC - site complet v2026"

REM Supprimer ancienne branche et renommer
git branch -D main
git branch -m main

REM Push
echo.
echo Push en cours...
git push --force origin main

if %errorlevel% equ 0 (
    echo.
    echo === PUSH REUSSI ! ===
) else (
    echo.
    echo === PUSH ECHOUE ===
)

echo.
pause
