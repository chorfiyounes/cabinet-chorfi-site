param($Token)
Set-Location "C:\Users\Youness\Claude\Projects\Site internet"
Remove-Item -Recurse -Force ".git" -ErrorAction SilentlyContinue
Remove-Item -Force "go.ps1" -ErrorAction SilentlyContinue
Remove-Item -Force "push-to-github.ps1" -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1
git init -b main
git config user.email "chorfi.younes@gmail.com"
git config user.name "chorfiyounes"
git add -A
git commit -m "Initial commit - cabinet-chorfi.com"
git remote add origin "https://$Token@github.com/chorfiyounes/cabinet-chorfi-site.git"
git push -u origin main
Write-Host "FINI !" -ForegroundColor Green
