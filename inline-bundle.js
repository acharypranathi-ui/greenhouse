import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distAssetsDir = path.join(__dirname, 'dist', 'assets');
const files = fs.readdirSync(distAssetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

const cssContent = fs.readFileSync(path.join(distAssetsDir, cssFile), 'utf8');
const jsContent = fs.readFileSync(path.join(distAssetsDir, jsFile), 'utf8');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="https://greenhomedevelopers.co.in/wp-content/uploads/2026/06/cropped-WhatsApp-Image-2026-06-10-at-09.03.05-1-32x32.jpeg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Green Home Developers - Real Estate Company in Tirupati</title>
    <meta name="description" content="Discover premium TUDA and DTCP approved residential plots, villa plots, and farmhouse lands in Tirupati with Green Home Developers. Building better homes, creating better lives." />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
${cssContent}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
${jsContent}
    </script>
  </body>
</html>`;

// Write directly to index.html at root C:\Users\SOMU\OneDrive\Desktop\greenhouse\index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('Successfully written index.html at root! Byte size:', html.length);
