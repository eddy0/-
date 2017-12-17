
const config = {
    hero_speed: 10,
    fire_cooldown: 5,
    bullet_speed: 10,
    bg_speed: 1,
}



class Bullet extends Img {
    constructor(game, name) {
        super(game, name)
        this.setup()
        this.update()
    }

    setup(){
        this.speed = config.bullet_speed
    }
    update(){
        this.y -= this.speed
    }
}


class Hero extends Img {
    constructor(game, name) {
        super(game, name)
        this.setup()
        this.update()
    }
    setup(){
        this.cooldown = 5
        this.speed = config.hero_speed
        this.moveLeft = () => {
            this.x -= this.speed
        }
        this.moveRight = () => {
            this.x += this.speed
        }
        this.moveUp = () => {
            this.y -= this.speed
        }
        this.moveDown = () => {
            this.y += this.speed
        }
    }
    update(){
        this.speed = config.hero_speed
        if (this.cooldown > 0) {
            this.cooldown --
        }
    }

    fire(){
        if (this.cooldown == 0 ) {
            this.cooldown = config.fire_cooldown

            var x = this.x + this.w / 2
            var y = this.y
            var bullet = new Bullet(this.game, 'bullet')
            bullet.x = x
            bullet.y = y
            //这里是难点
            // log(this.scene)
            this.scene.addElements(bullet)
        }


    }

}
