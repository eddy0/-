

    paused = true

class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
        // this.addElements()
        // this.update()

        window.addEventListener('keydown', (event) => {
            if (event.key == 'p') {
                paused = !paused

            }
        })
    }

    addElements(img){
        img.scene = this
        this.elements.push(img)
    }

    draw(){
        for (var i = 0; i < this.elements.length; i++) {
            this.game.drawImage(this.elements[i])
        }
    }

    update(){
        if (!paused) {
            return
        }

        this.bg.y += config.bg_speed
        // log(this.bg)
        if (this.bg.y >0 ) {
         this.bg.y = -466
        }

        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].update()
            this.draw()
            if (this.elements[i].y < -1000) {
                this.elements.splice(i, 1)
            }
    }
}


}


class sceneMain extends GuaScene{
    constructor(game) {
        super(game)


        this.setup()
        this.movements()
        this.update()



    }

    setup(){
        let s = this
        s.bg = new BG(s.game, 'bg')
        s.hero1 = new Hero(s.game, 'hero')
        s.hero1.x = 200
        s.hero1.y = 500

        this.NumberofEnemies = 10

        s.addElements(s.bg)
        s.addElements(s.hero1)
        s.addEnemies()
    }

    addEnemies(){
        var es = []
        for (let i = 0; i < this.NumberofEnemies; i++) {
            var ey = new Enemy(this.game, 'enemy1')
            es.push(ey)
            this.addElements(ey)
        }
        this.enemies = es
    }

    movements(){
        let s = this
        s.game.registerActions('a', () => {
            s.hero1.moveLeft()
        })
        s.game.registerActions('d', () => {
            s.hero1.moveRight()
        })
        s.game.registerActions('w', () => {
            s.hero1.moveUp()
        })
        s.game.registerActions('s', () => {
            s.hero1.moveDown()
        })
        s.game.registerActions('f', () => {
            log('fire')
            s.hero1.fire()
        })
    }


    update(){
        super.update()
        // this.hero1.fire()

    }







}
