
const __main = function () {
    const images = {
        hero: 'img/hero1.png',
        enemy1: 'img/enemy1.png',
        bullet: "img/bullet1.png",
        bg: "img/bg.png",
    }

    


    var game = guaGame(images, function (g) {
        var s = new sceneMain(g)
        g.runWithScene(s)
    })



}


// img.onload = () => context.drawImage(img, 200, 500)
// context.clearRect(0,0, canvas.width, canvas.height)
// context.drawImage(hero1.image, hero1.x, hero1.y)


__main()
