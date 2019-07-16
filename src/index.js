import TilemapPlus from './tilemap-plus/TilemapPlus';
import TilemapLayerPlus from './tilemap-plus/TilemapLayerPlus';
import TilesetPlus from './tilemap-plus/TilesetPlus';
import SpritePlus from "./tilemap-plus/SpritePlus";

var TilemapPlusPlugin = function( scene, pluginManager ) {
  this.scene = scene;
  this.systems = scene.sys;

  if ( !scene.sys.settings.isBooted ) {
    scene.sys.events.once( 'boot', this.boot, this );
  }

  // Tilemap Loader (JSON)
  const origTilemapLoader = this.scene.load.tilemapTiledJSON;
  this.scene.load.tilemapTiledJSON = function( key, url, xhrSettings ) {
    const loader = origTilemapLoader.call( this, key, url, xhrSettings );
    this.json( jsonKey( key ), url );
    return loader;
  };

  // Tilemap Creator
  const origTilemapCreator = this.scene.make.tilemap;
  this.scene.make.tilemap = function( config ) {
    const tilemap = origTilemapCreator.call( this, config );
    const tilemapJson = this.scene.cache.json.get( jsonKey( config.key ) );
    tilemap.plus = new TilemapPlus( tilemapJson, this.scene, tilemap );
    return tilemap;
  };

  // Tilemap Static Layer
  const origTilemapLayer = Phaser.Tilemaps.Tilemap.prototype.createStaticLayer;
  Phaser.Tilemaps.Tilemap.prototype.createStaticLayer = function( layerID, tileset, x, y ) {
    const layer = origTilemapLayer.call( this, layerID, tileset, x, y );
    layer.plus = new TilemapLayerPlus( layer );
    return layer;
  };

  // Tilemap Tileset Image
  const origTilesetImage = Phaser.Tilemaps.Tilemap.prototype.addTilesetImage;
  Phaser.Tilemaps.Tilemap.prototype.addTilesetImage = function( tilesetName, key, tileWidth, tileHeight, tileMargin, tileSpacing, gid ) {
    const image = origTilesetImage.call( this, tilesetName, key, tileWidth, tileHeight, tileMargin, tileSpacing, gid );
    image.plus = new TilesetPlus( image );
    return image;
  };

  const originalSpriteFactory = this.scene.physics.add.sprite;
  this.scene.physics.add.sprite = function(x, y, key, frame, group) {
      const sprite = originalSpriteFactory.call(this, x, y, key, frame, group);
      sprite.plus = new SpritePlus(sprite);
      return sprite;
  };

  function jsonKey( key ) {
    return key + "-TilemapPlus";
  }
};

TilemapPlusPlugin.prototype = {

  init: function( data ) {},

  boot: function() {
    var eventEmitter = this.systems.events;

    eventEmitter.on( 'start', this.start, this );

    eventEmitter.on( 'preupdate', this.preUpdate, this );
    eventEmitter.on( 'update', this.update, this );
    eventEmitter.on( 'postupdate', this.postUpdate, this );

    eventEmitter.on( 'pause', this.pause, this );
    eventEmitter.on( 'resume', this.resume, this );

    eventEmitter.on( 'sleep', this.sleep, this );
    eventEmitter.on( 'wake', this.wake, this );

    eventEmitter.on( 'shutdown', this.shutdown, this );
    eventEmitter.on( 'destroy', this.destroy, this );
  },

  // A test method.
  test: function( name ) {
    console.log( 'TilemapPlusPlugin says hello ' + name + '!' );
  },

  // Called when a Scene is started by the SceneManager. The Scene is now
	// active, visible and running.
  start: function() {},

  // Called every Scene step - phase 1
  preUpdate: function( time, delta ) {},

  // Called every Scene step - phase 2
  update: function( time, delta ) {

  },

  // Called every Scene step - phase 3
  postUpdate: function( time, delta ) {},

  // Called when a Scene is paused. A paused scene doesn't have its Step
	// run, but still renders.
  pause: function() {},

  // Called when a Scene is resumed from a paused state.
  resume: function() {},

  // Called when a Scene is put to sleep. A sleeping scene doesn't update
	// or render, but isn't destroyed or shutdown. preUpdate events still
	// fire.
  sleep: function() {},

  // Called when a Scene is woken from a sleeping state.
  wake: function() {},

  // Called when a Scene shuts down, it may then come back again later
	// (which will invoke the 'start' event) but should be considered
	// dormant.
  shutdown: function() {},

  // Called when a Scene is destroyed by the Scene Manager. There is no
	// coming back from a destroyed Scene, so clear up all resources here.
  destroy: function() {
    this.shutdown();

    this.scene = undefined;
  }

};

TilemapPlusPlugin.prototype.constructor = TilemapPlusPlugin;
Phaser.Plugins.TilemapPlus = TilemapPlusPlugin;
