


class Enemy extends Img {
    constructor(game, name) {
        super(game, name)
        this.setup()
        this.update()
    }
    setup(){
        this.x = randomBetween(0, 400)
        this.y = randomBetween(-300, 0)
        this.speed = randomBetween(2,6)
        this.life = randomBetween(1,3)
    }

    update(){
        this.y += this.speed
        if (this.y > canvas.height) {
            this.y = randomBetween(-200, 0)
        }
    }

}
