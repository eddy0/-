var guaGame = function (images, runCallback) {
    var g = {
        keydowns:{},
        actions:{},
        scene: null,
    }
    g.images = images


    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })

    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })

    g.registerActions = function (key, callback) {
            g.actions[key] = callback
    }

    g.drawImage = function (img) {
        context.drawImage(img.image, img.x, img.y)
    }

    g.runWithScene = function (scene) {
        g.scene = scene
        setTimeout(function () {
            g.runloop()
        }, 1000/30)
    }

    g.draw = function () {
        g.scene.draw()
    }

    g.update = function () {
        g.scene.update()
    }

    g.runloop = function () {
        var action = Object.keys(g.actions)
        for (let i = 0; i < action.length; i++) {
            var key = action[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        context.clearRect(0,0, canvas.width, canvas.height)
        g.draw()
        setTimeout(function () {
            g.runloop()
        }
        ,1000/30)
    }


    g.imageByName = function (name) {
        var o = {
        }
        o.image = g.images[name]
        o.w = o.image.width
        o.h = o.image.height
        return o
    }

//第一次启动就先载入images
    g.init = function () {
        var loads = []
        var names = Object.keys(g.images)
        for (let i = 0; i < names.length; i++) {
            let image = new Image
            let name = names[i]
            image.src = g.images[name]
            image.onload = function () {
                g.images[name] = image
                loads.push(1)
                if (loads.length == names.length) {
                    log('loaded all images')
                    runCallback(g)
                }
            }
        }
    }

    g.init()

    return g
}
