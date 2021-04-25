import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader')
  }

  preload() {
    this.load.image('tiles', 'tiles/tile_dungeon_crawler.png')
    this.load.tilemapTiledJSON('tile_dungeon_crawler', 'tiles/tile_dungeon_crawler.json')
  }

  create() {
    this.scene.start('game')
  }
}
