// Convierte los originales de imagenes-originales/ a WebP en public/. Uso: node scripts/optimizar-imagenes.mjs
import sharp from "sharp"
import { stat } from "node:fs/promises"

const tareas = [
  { entrada: "imagenes-originales/inicio.png", salida: "public/suf/inicio.webp", ancho: 1600 },
  { entrada: "imagenes-originales/video.jpg", salida: "public/suf/video.webp", ancho: 1280 },
  { entrada: "imagenes-originales/yo.jpeg", salida: "public/yo.webp", ancho: 800 },
]

for (const t of tareas) {
  await sharp(t.entrada)
    .resize({ width: t.ancho, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(t.salida)
  const antes = (await stat(t.entrada)).size
  const despues = (await stat(t.salida)).size
  console.log(`${t.salida}: ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`)
}
