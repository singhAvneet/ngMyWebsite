import * as Assest from '../variables';
import Helper from '../sprites/helper';
import Actor from '../sprites/actor';
export class GameScene extends Phaser.Scene {

  helper: Helper;
  isItReadyToDrive:boolean;



  constructor() {
    super({
      key: "GameScene"
    });
  
  }



  init(): void {
    this.helper = new Helper();
    Assest.default.assets.cursors = this.input.keyboard.createCursorKeys();
    Assest.default.assets.platforms = this.physics.add.staticGroup();

    Assest.default.assets.scoreText = this.add.text(16, 16, 'SCORE: 0', { fontSize: '3em' });
    Assest.default.assets.quit = this.add.text(750, 570, 'Exit', {fontFamily:' Arial ,   sans-serif',fontSize:'2em'});
  
  }

  preload() {
  }

  create(): void {
    this.scene.stop('Preload')

    Assest.default.assets.coin = this.sound.add('coin');
    Assest.default.assets.over = this.sound.add('over');
    Assest.default.assets.won = this.sound.add('won');
    Assest.default.assets.jump = this.sound.add('jump');
    Assest.default.assets.happy = this.sound.add('happy');//you won 

    this.sound.resumeAll();

    Assest.default.airplatform[0]=this.helper.createPlatform(45, 170, 3,'ground');
    Assest.default.airplatform[1]=this.helper.createPlatform(145, 320, 3,'ground');
    Assest.default.airplatform[2]=this.helper.createPlatform(364, 160, 3,'ground');
    Assest.default.airplatform[3]=this.helper.createPlatform(464, 360, 3,'ground');   
    Assest.default.airplatform[4]=this.helper.createPlatform(564, 260, 3,'ground');
    Assest.default.airplatform[5]=this.helper.createPlatform(700, 160, 3,'ground');


    for (var n = 6, x = 45, y = 0; n < 30; n++, x += 64) {
      Assest.default.airplatform[n]=this.helper.createPlatform(x, 464 + y, 4,'ground');
      if (n == 17) {
        y += 64;
        x = -20
      }
    }


    

    Assest.default.assets.quit.setInteractive();
 

    Assest.default.assets.player = new Actor({ scene: this, x: 0, y: 50, asset: 'dude', scale: 3, bounce: 0.2 });
    Assest.default.assets.enemy = new Actor({ scene: this, x: 20, y: 400, asset: 'enemy', scale: 3, bounce: 0 })
    Assest.default.assets.dooor = new Actor({ scene: this, x: 750, y: 310, asset: 'door', scale: 3, bounce: 0 });




    Assest.default.assets.player.smoother = false;
    this.physics.add.overlap(Assest.default.assets.player, Assest.default.assets.dooor, this.openDoor, null, this);
    this.physics.add.collider(Assest.default.assets.player, Assest.default.assets.platforms);
    this.physics.add.collider(Assest.default.assets.player, Assest.default.airplatform);
    this.physics.add.collider(Assest.default.stars, Assest.default.assets.platforms);
    this.physics.add.collider(Assest.default.assets.dooor, Assest.default.assets.platforms);
    this.physics.add.collider(Assest.default.assets.player, Assest.default.assets.dooor);
    this.physics.add.collider(Assest.default.assets.enemy, Assest.default.assets.platforms);

    this.helper.addButtonListerners(Assest.default.assets);
    this.helper.addAnimation(this);

    Assest.default.assets.dooor.anims.play('doorClose');
    for (var i = 1, ry = 120, rx = 100; i < 12; i++, ry =16+ Math.floor(Math.random() * 300), rx =16+ Math.floor(Math.random() * 780)) {

      console.log("avneet", rx, ry);
      Assest.default.stars[i] = new Actor({ scene: this, x: rx, y: ry, asset: 'star', scale: 3, bounce: 0.2 });
      Assest.default.stars[i].body.allowGravity = false;
      this.physics.add.overlap(Assest.default.assets.player, Assest.default.stars[i], this.collectStar, null, this);
      this.physics.add.overlap(Assest.default.airplatform, Assest.default.stars[i], this.overlapStars, null, this);
      this.physics.add.overlap(Assest.default.assets.player, Assest.default.assets.enemy, this.killPlayer, null, this);

      Assest.default.stars[i].anims.play('rotatecCoins');

    }

  }


  update(time: number): void {
    if (Assest.default.assets.win ) {
      if (Assest.default.assets.hasKey && this.isItReadyToDrive) {
        Assest.default.assets.car.flipX = true;
        Assest.default.assets.car.setVelocityX(-80);
      }
    }


    if (Assest.default.assets.enemy.x >= 700) {
      Assest.default.assets.enemy.flipX = true;
      Assest.default.assets.enemy.setVelocityX(-80);
      Assest.default.assets.enemy.anims.play('enemyRun');
    }
    if (Assest.default.assets.enemy.x <= 20) {
      Assest.default.assets.enemy.flipX = false;
      Assest.default.assets.enemy.setVelocityX(80);
      Assest.default.assets.enemy.anims.play('enemyRun');
    }


    if (!Assest.default.assets.win) {
      if (Assest.default.assets.cursors.left.isDown || Assest.default.assets.move == "left") {
        Assest.default.assets.player.setVelocityX(-170);
        Assest.default.assets.player.flipX = true;
        Assest.default.assets.player.anims.play('run', true);
      }
      else if (Assest.default.assets.cursors.right.isDown || Assest.default.assets.move == "right") {
        Assest.default.assets.player.setVelocityX(170);
        Assest.default.assets.player.flipX = false;
        Assest.default.assets.player.anims.play('run', true);

      }
      else {
        Assest.default.assets.player.setVelocityX(0);
        Assest.default.assets.player.anims.play('turn');
      }

      if (Assest.default.assets.cursors.up.isDown && Assest.default.assets.player.body.touching.down) {
        Assest.default.assets.jump.play();
        Assest.default.assets.player.setVelocityY(-300);
      }

    }

    if (!Assest.default.music.loop) {
      Assest.default.assets = null;
      Assest.default.music.stop();
      this.scene.stop('GameScene');
      this.scene.start('WelcomeScene');
    }

  }

  private killPlayer(player, star) {
    player.disableBody(true, true);
    this.add.text(250, 150, 'GAME OVER', {fontFamily:' Arial ,   sans-serif', fontSize: '5em',backgroundColor:'#000'})
    
    Assest.default.assets.over.play();
    Assest.default.music.stop();
    player.destroy();
    Assest.default.assets.win = true;
    //  game.destroy();
    //  parent.classList.remove("mystyle");
    //  document.body.style.backgroundColor="transparent";

  }
  private overlapStars(player, star) {
    star.x = Math.floor(Math.random() * 736) + 64;
    star.y = Math.floor(Math.random() * 236) + 64;

  }

  private collectStar(player, star) {
    Assest.default.assets.coin.play();
    star.destroy();
    Assest.default.assets.score += 1;
    Assest.default.assets.scoreText.setText('Score: ' + Assest.default.assets.score);
    if (Assest.default.assets.score == 11) {
      Assest.default.key = this.physics.add.sprite(100, 180, 'key').setScale(2);
      Assest.default.key.setCollideWorldBounds(true);
      this.physics.add.collider(player, Assest.default.key);
      this.physics.add.collider(Assest.default.airplatform, Assest.default.key);
      this.physics.add.collider(Assest.default.key, Assest.default.assets.platforms);
      this.physics.add.overlap(player, Assest.default.key, this.collectKey, null, this);
    }


  }

  private collectKey(player, varkey) {
    Assest.default.assets.happy.play();
    varkey.destroy();
    Assest.default.assets.hasKey = true;
  }

  private  openDoor(player: any, dooor: any) {
    if (Assest.default.assets.hasKey) {
      Assest.default.assets.win = true;
      dooor.anims.play('doorOpen');
      player.destroy();
      this.add.text(300, 150, 'You Win', {fontFamily:' Arial ,   sans-serif', fontSize: '5em',backgroundColor:'#000'})
    
      // Assest.default.airplatform.forEach(function (element) { element.destroy(); });
      Assest.default.music.stop();
      Assest.default.assets.won.play();
       this.driveCar(3000);
 
    }
  }

  private driveCar(ms: number) {
     new Promise( resolve => setTimeout(() => {
      Assest.default.assets.car = new Actor({ scene: this, x: 670, y: 300, asset: 'car', scale: 2, bounce: 0 });
      this.physics.add.overlap(Assest.default.assets.car, Assest.default.assets.enemy, function () { 
        Assest.default.assets.enemy.destroy() }, null, this);
      this.physics.add.collider(Assest.default.assets.car, Assest.default.assets.platforms);
      this.isItReadyToDrive=true;
      Assest.default.assets.car.anims.play('carmove');
    }, ms) ).then(function(){  
    
    });
}

}
