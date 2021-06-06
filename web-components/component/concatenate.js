const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        // './dist/explore/runtime-es5.js',
        // './dist/explore/polyfills-es5.js',    
        // './dist/explore/scripts.js',
        // './dist/explore/main-es5.js',

        './dist/component/runtime.js',
        './dist/component/polyfills.js',  
        './dist/component/main.js',
        './dist/component/styles.js',
      ];

      await fs.ensureDir('output/component');
      await concat(files, 'output/component/explore-app.js');
}
concatenate();