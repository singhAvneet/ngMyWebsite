
import * as Assest from '../variables';
import { GameObjects, Scene } from 'phaser';
import Helper from '../sprites/helper';

export class WelcomeScene extends Scene {
  title: GameObjects.Text;
  // start: GameObjects.Text;
  // exit: GameObjects.Text;

  constructor() {
    super({
      key: "WelcomeScene"
    });
  }

  init() {
    Assest.default.assets = new Assest.initAssest2();
  }


  preload() {

    this.load.setBaseURL(Assest.default.root);
    this.load.setPath(Assest.default.path);
    this.load.image('keys', 'image/keys.png');
    this.load.image('brand', 'image/brand.png');

    this.load.audio('music', 'sounds/game.wav');

  }

  create(): void {
    Assest.default.assets.keys = this.add.sprite(400, 470, 'keys').setScale(4);
    Assest.default.assets.brand = this.add.sprite(400, 200, 'brand').setScale(4);
    Assest.default.music = this.sound.add('music');

    Assest.default.assets.start = this.add.text(370, 300, 'Start', { fontFamily: ' Tahoma ,   sans-serif', fontSize: '3em',color:'#CCEFD9'});
    Assest.default.assets.quit = this.add.text(745, 570, 'Exit', { fontFamily: ' Tahoma ,   sans-serif', fontSize: '2em',color:'#CCEFD9' });

    new Helper().addButtonListerners(Assest.default,this,'welcome')

    this.add.text(380, 385, 'Jump',  { fontFamily: ' Tahoma ,   sans-serif', fontSize: '12px' });
    this.add.text(460, 450, 'Right',  { fontFamily: ' Tahoma ,   sans-serif', fontSize: '12px' });
    this.add.text(310, 450, 'Left',   { fontFamily: ' Tahoma ,   sans-serif', fontSize: '12px' }); 

  }
};
