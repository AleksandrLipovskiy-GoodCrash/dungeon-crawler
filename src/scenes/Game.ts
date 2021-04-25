import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  constructor() {
    super('game')
  }

  create() {
    const map: Phaser.Tilemaps.Tilemap = this.make.tilemap({ key: 'tile_dungeon_crawler' })
    const tileset = map.addTilesetImage('tile_dungeon_crawler', 'tiles')

    map.createLayer('Ground', tileset)

    const wallsLayer = map.createLayer('Walls', tileset)
    wallsLayer.setCollisionByProperty({ collides: true })

    const debugGraphics = this.add.graphics().setAlpha(0.7)
    wallsLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    })
  }
}
