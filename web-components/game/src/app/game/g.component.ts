import {   Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { WelcomeScene } from "./states/welcomeScene";
import { GameScene } from "./states/gameScene";
import { Preload } from "./states/preload";
import { Game, Scale, Types, WEBGL } from 'phaser';

@Component({
  selector: 'game-app',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class GameComponent implements OnInit ,OnDestroy {
  phaserGame: Game;
  config: Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: WEBGL,
      parent:'game-area',    
      height: 600,
      width: 800,
      scene: [ WelcomeScene, GameScene,Preload],
  
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 }
        }
      },
      scale: {
        parent:'game-area',
        mode: Scale.ScaleModes.FIT,
        autoCenter: Scale.CENTER_BOTH,

      },
      render: {
        antialiasGL: false,
        pixelArt: true,
      },
      autoFocus: true,
      canvasStyle: `display: block; width: 100%; height:auto;max-width: 800px; max-height: 600px;`,
    };
  }



  
  ngOnDestroy(): void {
    this.phaserGame.destroy(true, false);
    var element = document.getElementsByTagName("canvas"), index;
    element[0].parentNode.removeChild(element[0]);
  }
  ngOnInit() {

  document.body.setAttribute('style',' background-color: rgba(0,0,0,0.4);pointer-events :none;')

    this.phaserGame = new Phaser.Game(this.config);  
  
  }







}

















