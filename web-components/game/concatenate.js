const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './dist/game/runtime.js',
        './dist/game/polyfills.js',  
        './dist/game/main.js',
        './dist/game/styles.js'
      ];

      await fs.ensureDir('output/game');
      await concat(files, 'output/game/game-wc.js');
}
concatenate();