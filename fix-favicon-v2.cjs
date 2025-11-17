const sharp = require('sharp');

const analyzeFavicon = async () => {
  try {
    const metadata = await sharp('Latest_Logo EZLog_favicon.png').metadata();
    console.log('Dimensiones del favicon original:', metadata.width, 'x', metadata.height);
    
    // Crear un cuadrado perfecto sin estiramiento
    // Primero, obtener las dimensiones y crear un cuadrado
    const size = Math.min(metadata.width, metadata.height);
    
    // Extraer el centro del cuadrado rojo
    const left = Math.floor((metadata.width - size) / 2);
    const top = Math.floor((metadata.height - size) / 2);
    
    await sharp('Latest_Logo EZLog_favicon.png')
      .extract({ left, top, width: size, height: size })
      .resize(64, 64)
      .png()
      .toFile('public/favicon.png');
    
    await sharp('Latest_Logo EZLog_favicon.png')
      .extract({ left, top, width: size, height: size })
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
    
    await sharp('Latest_Logo EZLog_favicon.png')
      .extract({ left, top, width: size, height: size })
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
    
    console.log('✅ Favicons creados como cuadrado perfecto (sin estiramiento)!');
    
  } catch (error) {
    console.error('Error:', error);
  }
};

analyzeFavicon();
