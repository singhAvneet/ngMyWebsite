import { Component, OnInit } from '@angular/core';
import  'phaser';
import { WelcomeScene } from "./states/welcomeScene";
import { GameScene } from "./states/gameScene";
import { Preload } from "./states/preload";

@Component({
  selector: 'game-app',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.css']
})

export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ WelcomeScene, GameScene,Preload],
      parent:'game-area',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 }
        }
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        zoom: 2
      }
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}

















