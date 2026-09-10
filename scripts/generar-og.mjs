// Genera public/og.png (1200x630) para Open Graph / Twitter cards.
// Uso: node scripts/generar-og.mjs
import sharp from "sharp"

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <!-- Fuente del sistema: el rasterizador de sharp no carga @font-face embebidas -->
    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120 80) scale(520)">
      <stop offset="0" stop-color="#a78bfa" stop-opacity="0.35"/><stop offset="1" stop-color="#a78bfa" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1100 560) scale(480)">
      <stop offset="0" stop-color="#a3e635" stop-opacity="0.28"/><stop offset="1" stop-color="#a3e635" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0e0a14"/>
  <rect width="1200" height="630" fill="url(#a)"/>
  <rect width="1200" height="630" fill="url(#b)"/>
  <rect x="80" y="88" width="6" height="40" fill="#a3e635"/>
  <text x="104" y="120" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="22" letter-spacing="4" fill="#9a93ac">INGENIERO INFORMÁTICO</text>
  <text x="80" y="300" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="112" letter-spacing="-3" fill="#e9e6f2">Alfredo</text>
  <text x="80" y="415" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="112" letter-spacing="-3" fill="#e9e6f2">Galdames</text>
  <text x="80" y="500" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="40" fill="#a78bfa">Full-stack · React, NestJS, IA</text>
  <text x="80" y="562" font-family="Segoe UI, Arial, sans-serif" font-weight="500" font-size="24" fill="#9a93ac">Santiago de Chile · agaldames.dev@gmail.com</text>
  <rect x="1040" y="80" width="80" height="80" fill="none" stroke="#a3e635" stroke-width="2"/>
  <rect x="1060" y="100" width="40" height="40" fill="#a3e635"/>
</svg>`

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og.png")
console.log("public/og.png generado")
