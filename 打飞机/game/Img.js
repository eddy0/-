class Img {
    constructor(game, name) {
        this.game = game
        this.image = this.game.imageByName(name).image
        this.w = this.image.width
        this.h = this.image.height
        this.x = 100
        this.y = 100
        // this.speed = 5
    }
}
