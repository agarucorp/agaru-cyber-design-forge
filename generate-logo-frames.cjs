const fs = require('fs');
const path = require('path');

// Crear un HTML simple que genere las imágenes
const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <title>Logo Frame Generator</title>
    <style>
        body { background: #1a1a1a; color: white; font-family: Arial; padding: 20px; }
        .container { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .logo-frame {
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%);
            box-shadow: 0 0 8px 1px #4DE3FF22;
        }
        .logo-frame img { object-fit: contain; }
        .logo-frame-sm { width: 48px; height: 48px; }
        .logo-frame-md { width: 64px; height: 64px; }
        .logo-frame-lg { width: 80px; height: 80px; }
        .logo-frame-xl { width: 96px; height: 96px; }
        .logo-frame-sm img { width: 32px; height: 32px; }
        .logo-frame-md img { width: 40px; height: 40px; }
        .logo-frame-lg img { width: 48px; height: 48px; }
        .logo-frame-xl img { width: 56px; height: 56px; }
        .size-label { text-align: center; margin-top: 10px; font-size: 12px; color: #888; }
    </style>
</head>
<body>
    <h1 style="text-align: center;">Logo Frame Generator</h1>
    <div class="container">
        <div>
            <div class="logo-frame logo-frame-sm">
                <img src="LogoNav-Original.png" alt="Logo" id="logo-sm">
            </div>
            <div class="size-label">Small (48x48px)</div>
        </div>
        <div>
            <div class="logo-frame logo-frame-md">
                <img src="LogoNav-Original.png" alt="Logo" id="logo-md">
            </div>
            <div class="size-label">Medium (64x64px)</div>
        </div>
        <div>
            <div class="logo-frame logo-frame-lg">
                <img src="LogoNav-Original.png" alt="Logo" id="logo-lg">
            </div>
            <div class="size-label">Large (80x80px)</div>
        </div>
        <div>
            <div class="logo-frame logo-frame-xl">
                <img src="LogoNav-Original.png" alt="Logo" id="logo-xl">
            </div>
            <div class="size-label">Extra Large (96x96px)</div>
        </div>
    </div>
    <div style="text-align: center; margin-top: 30px;">
        <h3>Instrucciones:</h3>
        <p>1. Haz clic derecho en cada logo</p>
        <p>2. Selecciona "Guardar imagen como..."</p>
        <p>3. Guarda con el nombre que prefieras</p>
    </div>
</body>
</html>`;

// Escribir el archivo HTML
fs.writeFileSync('C:/Users/agaru/Desktop/generate-logo-frame.html', htmlContent);

console.log('Archivo HTML generado en: C:/Users/agaru/Desktop/generate-logo-frame.html');
console.log('Abre el archivo en tu navegador para ver los logos con frame gradient');
console.log('Luego haz clic derecho en cada logo para descargarlo como PNG'); 