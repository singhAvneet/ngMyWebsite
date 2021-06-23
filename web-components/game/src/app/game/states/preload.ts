import * as Assest  from '../variables';
import {  Scene } from 'phaser';


export  class Preload extends Scene {


    constructor(){
        super({
            key: "Preload"
          });
    }
  
    preload() {
        this.load.setBaseURL(Assest.default.root); 
        this.load.setPath(Assest.default.path)    
        this.load.image('ground', 'image/platform.png') 
        .spritesheet('door','image/door.png', { frameWidth: 20, frameHeight: 20 } )
        .spritesheet('dude','image/dude.png', { frameWidth: 13, frameHeight: 15 } )
        .spritesheet('star','image/coins.png', { frameWidth: 10, frameHeight: 10 } )
        .spritesheet('enemy','image/enemy.png', { frameWidth: 13, frameHeight: 14 } )
        .spritesheet('car','image/car.png', { frameWidth: 73, frameHeight: 24 } )
        .spritesheet('key','image/key.png', { frameWidth: 20, frameHeight: 20 } )

        .audio('coin','/sounds/coin.wav')
        .audio('over','/sounds/over.wav')
        .audio('won','/sounds/won.wav')        
        .audio('jump','/sounds/jump.wav')
        .audio('happy','/sounds/happy.wav')
    }

    create() {
        this.scene.stop('WelcomeScene');        
        this.scene.start('GameScene');  
    }
   

}
