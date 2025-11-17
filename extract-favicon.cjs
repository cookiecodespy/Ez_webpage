const sharp = require('sharp');

const extractFavicon = async () => {
  try {
    // Leer el logo original
    const image = sharp('Latest_Logo EZLog.png');
    const metadata = await image.metadata();
    
    console.log('Dimensiones del logo original:', metadata.width, 'x', metadata.height);
    
    // El cuadrado rojo suele estar en la parte izquierda del logo
    // Vamos a extraer aproximadamente el 30% izquierdo que contiene el cuadrado rojo con "EZ"
    const cropWidth = Math.floor(metadata.width * 0.35);
    const cropHeight = metadata.height;
    
    // Extraer la parte roja (cuadrado izquierdo)
    await sharp('Latest_Logo EZLog.png')
      .extract({ 
        left: 0, 
        top: 0, 
        width: cropWidth, 
        height: cropHeight 
      })
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile('public/favicon-original-temp.png');
    
    console.log('✅ Parte roja extraída!');
    
    // Crear diferentes tamaños para el favicon
    await sharp('public/favicon-original-temp.png')
      .resize(64, 64)
      .png()
      .toFile('public/favicon.png');
    
    await sharp('public/favicon-original-temp.png')
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
    
    await sharp('public/favicon-original-temp.png')
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
    
    console.log('✅ Favicons creados en múltiples tamaños!');
    
  } catch (error) {
    console.error('Error:', error);
  }
};

extractFavicon();
