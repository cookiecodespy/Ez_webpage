const sharp = require('sharp');

const createProperFavicon = async () => {
  try {
    // Crear favicons desde la imagen original del favicon
    // Usar 'cover' en vez de 'contain' para evitar el estiramiento
    await sharp('Latest_Logo EZLog_favicon.png')
      .resize(64, 64, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile('public/favicon.png');
    
    await sharp('Latest_Logo EZLog_favicon.png')
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile('public/favicon-32x32.png');
    
    await sharp('Latest_Logo EZLog_favicon.png')
      .resize(16, 16, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile('public/favicon-16x16.png');
    
    console.log('✅ Favicons corregidos (sin estiramiento)!');
    
  } catch (error) {
    console.error('Error:', error);
  }
};

createProperFavicon();
