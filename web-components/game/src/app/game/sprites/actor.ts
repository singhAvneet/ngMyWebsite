
import {  Physics } from 'phaser';

export  default class Actor extends Physics.Arcade.Sprite {
ass;
  constructor ({ scene, x, y, asset, scale,bounce }) {
    super(scene, x, y, asset)
    this.ass=asset
    scene.add.existing(this);
    scene.physics.add.existing(this);


      scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
    this.setBounce(bounce);
    this.setGravityY(150); 
 
    this.scale=scale
  }

}
