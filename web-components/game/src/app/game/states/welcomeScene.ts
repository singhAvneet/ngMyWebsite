
import * as Assest from '../variables';

export class WelcomeScene extends Phaser.Scene {
  title: Phaser.GameObjects.Text;
  start: Phaser.GameObjects.Text;


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



    this.start = this.add.text(370, 300, 'Start',
      { fontFamily: ' Arial ,   sans-serif', fontSize: '3em' });
   this.add.text(380, 385, 'Jump',
      { fontFamily: ' Arial ,   sans-serif', fontSize: '12px' });
      this.add.text(460,450, 'Right',
      { fontFamily: ' Arial ,   sans-serif', fontSize: '12px' });
      this.add.text(310,450, 'Left',
      { fontFamily: ' Arial ,   sans-serif', fontSize: '12px' });

    this.start.setInteractive();
    this.start.on('pointerdown', function () {
      Assest.default.music.play();
      Assest.default.assets.brand.destroy();
      Assest.default.assets.keys.destroy();
      Assest.default.music.loop = true;

      this.scene.start("Preload");
    }, this);

  }
};
