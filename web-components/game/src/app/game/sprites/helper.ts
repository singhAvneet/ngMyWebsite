


import * as Assest from '../variables';

export default class Helper {
    // scene:Scene=new Scene('WelcomeScene');


    createPlatform(x: number, y: number, size: number, assets: string): any {
        return Assest.default.assets.platforms.create(x, y, assets).setScale(size).refreshBody();
    }


    addButtonListerners(This, game, scene) {
        // This.btnL.on('pointerup', function (pointer) {
        //     This.move = "stop";
        //     this.anims.play('buttonUp', true);
        // });
        // This.btnJ.on('pointerdown', function (pointer) {
        //     This.jump.play();
        //     this.anims.play('buttonJDown', true);
        //     This.player.setVelocityY(-330);
        // });       

        // This.restart.on('pointerdown', function (pointer) {
        //     Assest.default.music.loop = false;
        // });
        // new SwitchScene().addButtonListerners(This)

        if (scene == 'welcome') {
            This.assets.start.setInteractive()
            This.assets.start.on('pointerdown', function () {
                This.music.play();
                This.assets.brand.destroy();
                This.assets.keys.destroy();
                This.music.loop = true;

                game.scene.start("Preload");
            }, this);
        }
        if (scene == 'game') {
            This.assets.restart.setInteractive()
            This.assets.restart.on('pointerdown', function () {
                This.music.stop();
                game.scene.start("WelcomeScene");
            }, this);

        }


        This.assets.quit.setInteractive()
        This.assets.quit.on('pointerdown', function () {
            location.reload();
        }, this);






    }


    addAnimation(This) {

        // This.anims.create({
        //     key: 'buttonUp',
        //     frames: [{ key: 'btn', frame: 1 }]
        // });

        This.anims.create({
            key: 'doorClose',
            frames: [{ key: 'door', frame: 0 }]
        });
        This.anims.create({
            key: 'doorOpen',
            frames: This.anims.generateFrameNumbers('door', { start: 0, end: 4 }),
            frameRate: 3,

        });
        This.anims.create({
            key: 'rotatecCoins',
            frames: This.anims.generateFrameNumbers('star', { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
        This.anims.create({
            key: 'run',
            frames: This.anims.generateFrameNumbers('dude', { start: 1, end: 2 }),
            frameRate: 3,
            repeat: -1
        });
        This.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 0 }],
            frameRate: 20
        });
        This.anims.create({
            key: 'jump',
            frames: [{ key: 'dude', frame: 1 }],
        });
        This.anims.create({
            key: 'enemyRun',
            frames: This.anims.generateFrameNumbers('enemy', { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1,

        });

        This.anims.create({
            key: 'carmove',
            frames: This.anims.generateFrameNumbers('car', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1,

        });




    }







}


