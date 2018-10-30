import Animation from "./Animation";
import Physics from "./Physics";
import Events from "./events/Events";

export default class TilemapPlus {

    constructor(tilemapJson, scene, tilemap) {
        this.tilemapJson = tilemapJson;
        this.time = scene.time;
        this.tilemap = tilemap;
        this.timer = null;
        this.tileAnimations = [];
        this.game = scene.game;
        this.animation = new Animation(tilemapJson, scene, tilemap);
        this.events = new Events(tilemapJson);
        this.physics = new Physics(tilemapJson, this.events);
        this.properties = tilemapJson.properties || {};
    }    
}
