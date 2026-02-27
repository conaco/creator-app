@echo off
set PATH=C:\Program Files\nodejs;%PATH%
mkdir "c:\Users\rodri\Downloads\Antigravity\creator-app"
cd /d "c:\Users\rodri\Downloads\Antigravity\creator-app"
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm
