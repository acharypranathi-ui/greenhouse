import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In dist/index.html, Vite already inlined index.css directly into <style> tags
const distIndexHtml = path.join(__dirname, 'dist', 'index.html');
let html = fs.readFileSync(distIndexHtml, 'utf8');

// Find built JS file in dist/assets
const distAssetsDir = path.join(__dirname, 'dist', 'assets');
const files = fs.readdirSync(distAssetsDir);
const jsFile = files.find(f => f.endsWith('.js'));
const jsContent = fs.readFileSync(path.join(distAssetsDir, jsFile), 'utf8');

// Replace external script tag with inline module script tag
const scriptTagRegex = /<script type="module" crossorigin src="\.\/assets\/[^"]+"><\/script>/;
const inlineScript = `<script type="module">\n${jsContent}\n</script>`;

if (scriptTagRegex.test(html)) {
  html = html.replace(scriptTagRegex, inlineScript);
} else {
  html = html.replace('</body>', `${inlineScript}\n</body>`);
}

// Write to root index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('Successfully updated standalone root index.html! Byte size:', html.length);
