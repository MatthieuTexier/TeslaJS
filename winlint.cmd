@echo off

echo================================= Lint ==========================================
cmd /c ".\node_modules\.bin\jshint" TeslaJS.js Examples
echo=================================================================================