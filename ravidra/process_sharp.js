const sharp = require('sharp');

async function processImage() {
  try {
    const { data, info } = await sharp('public/images/logo-rpd.png')
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
      
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Target white backgrounds, allowing some tolerance
      if (r > 230 && g > 230 && b > 230) {
        data[i + 3] = 0; // Set alpha to 0
      }
    }
    
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    }).png().toFile('public/images/logo-rpd-transparent.png');
    
    console.log("Success");
  } catch(e) {
    console.error(e);
  }
}
processImage();
