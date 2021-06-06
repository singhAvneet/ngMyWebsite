/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {
    // Cameras: require('cameras'),
    Cameras: { 
        Camera: require('cameras/2d/Camera'),
        BaseCamera: require('cameras/2d/BaseCamera'), 
        CameraManager: require('cameras/2d/CameraManager'), 
        // Effects: require('cameras/2d/effects'), 
        // Events: require('cameras/2d/events'), 

        },
    // Core: require('core'),
    // Class: require('utils/Class'),
    // Create: require('create'),
    // Input: require('input'),   
    Input:  {
        // CreateInteractiveObject: require('input/CreateInteractiveObject'),
        // Events: require('input/events'),
        // Gamepad: require('input/gamepad'),
        // InputManager: require('input/InputManager'),
        InputPlugin: require('input/InputPlugin'),
        InputPluginCache: require('input/InputPluginCache'),
        Keyboard: require('input/keyboard'),
        // Keyboard: { 
        //     Events: require('input/Keyboard/events'),

        //     KeyboardManager: require('input/Keyboard/KeyboardManager'),
        //     KeyboardPlugin: require('input/Keyboard/KeyboardPlugin'),  

        //     KeyCombo: require('input/Keyboard/combo/KeyCombo'),

        //     Key: require('input/Keyboard/keys/Key'),
        //     KeyCodes: require('input/Keyboard/keys/KeyCodes'),
        //     JustDown: require('input/Keyboard/keys/JustDown'),
        //     JustUp: require('input/Keyboard/keys/JustUp'),
        //     DownDuration: require('input/Keyboard/keys/DownDuration'),
        //     UpDuration: require('input/Keyboard/keys/UpDuration')
        // },
        Mouse: require('input/mouse'),
    
        
    },
    // Animations: require('animations'),
    Events: require('events/EventEmitter'),
    Game: require('core/Game'),
    // Physics: require('physics'),

    
    Physics:  {
        Arcade: {
            ArcadePhysics: require('physics/arcade/ArcadePhysics'),
            // Body: require('physics/arcade/Body'),
            // Collider: require('physics/arcade/Collider'),
    
            // Components: require('physics/arcade/components'),
            // Events: require('physics/arcade/events'),
            // Typedefs: require('physics/arcade/typedefs'),
            
            // Factory: require('physics/arcade/Factory'),
            // Group: require('physics/arcade/PhysicsGroup'),
            // Image: require('physics/arcade/ArcadeImage'),
            Sprite: require('physics/arcade/ArcadeSprite'),
            // StaticBody: require('physics/arcade/StaticBody'),
            // StaticGroup: require('physics/arcade/StaticPhysicsGroup'),
            // World: require('physics/arcade/World')

        }, 

        // Arcade: require('physics/arcade'),
        // Matter: require('physics/matter-js'),
    },
    // Plugins: require('plugins'),
    Scene: require('scene/Scene'),
    // Scenes: require('scene'),
    Scenes:  {
        ScenePlugin: require('scene/ScenePlugin'),
        // Settings: require('scene/Settings'),
        // Systems: require('scene/Systems'),
        // SceneManager: require('scene/SceneManager'),

        Start: require('scene/events/START_EVENT'),
    },

    // Sound: require('sound'),
    // Actions: require('actions'),
    
    // Cache: require('cache'),
 
    // Curves: require('curves'),
    // Data: require('data'),
    // Display: require('display'),
    // DOM: require('dom'),
   
  
    // Geom: require('geom'),

    // Math: require('math'),

    // Renderer: require('renderer'),
    // Scale: require('scale'),
 
    // Structs: require('structs'),
    // Textures: require('textures'),
    // Tilemaps: require('tilemaps'),
    // Time: require('time'),
    // Tweens: require('tweens'),
    // Utils: require('utils'),
    // GameObjects: require('gameobjects'),
    GameObjects:  {
        DisplayList: require('gameobjects/DisplayList'),
        UpdateList: require('gameobjects/UpdateList'),
    //    Image: require('gameobjects/image/Image'),
    //    Sprite: require('gameobjects/sprite/Sprite'),
    //    Text: require('gameobjects/text/static/Text'),
       Factories: {
                    // Image: require('gameobjects/image/ImageFactory'),
                    Sprite: require('gameobjects/sprite/SpriteFactory'),
                    Text: require('gameobjects/text/static/TextFactory')
                    },
    //    Creators: {
    //                 Image: require('gameobjects/image/ImageCreator'),
    //                 Sprite: require('gameobjects/sprite/SpriteCreator'),
    //                 Text: require('gameobjects/text/static/TextCreator')
    //                 }
       },
       Loader: {
                    FileTypes: {
                                ImageFile: require('loader/filetypes/ImageFile'),
                                AudioFile: require('loader/filetypes/AudioFile'),
                                SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
                                // ScriptFile: require('loader/filetypes/ScriptFile')
                                },
        LoaderPlugin: require('loader/LoaderPlugin')
    }

};

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
