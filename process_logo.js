const Jimp = require('jimp');

async function makeTransparent() {
  try {
    const image = await Jimp.read('public/images/logo-rpd.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // If color is very close to white, make it transparent
      if (r > 235 && g > 235 && b > 235) {
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.writeAsync('public/images/logo-rpd.png'); // overwrite original
    console.log('Image processed successfully.');
  } catch (err) {
    console.error(err);
  }
}

makeTransparent();
