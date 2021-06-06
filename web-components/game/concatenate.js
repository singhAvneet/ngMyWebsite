const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        // './dist/game/runtime-es5.js',
        // './dist/game/polyfills-es5.js',    
        // './dist/game/scripts.js',
        // './dist/game/main-es5.js',

        './dist/game/runtime-es2015.js',
        './dist/game/polyfills-es2015.js',  
        './dist/game/main-es2015.js'
      ];

      await fs.ensureDir('output/game');
      await concat(files, 'output/game/game-wc.js');
}
concatenate();