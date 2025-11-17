const sharp = require('sharp');
const fs = require('fs');

// Crear un favicon simple con fondo rojo y texto "EZ" blanco
const createFavicon = async () => {
  try {
    // Crear un SVG simple con el cuadrado rojo y "EZ"
    const svg = `
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" fill="#E41B13" rx="8"/>
        <text x="32" y="46" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">EZ</text>
      </svg>
    `;

    // Convertir SVG a PNG
    await sharp(Buffer.from(svg))
      .resize(64, 64)
      .png()
      .toFile('public/favicon.png');

    // Crear también versiones más pequeñas
    await sharp(Buffer.from(svg))
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');

    await sharp(Buffer.from(svg))
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');

    console.log('✅ Favicons creados exitosamente!');
  } catch (error) {
    console.error('Error al crear favicon:', error);
  }
};

createFavicon();
