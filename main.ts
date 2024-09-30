controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (wallCooldown <= 0) {
        projectile = sprites.createProjectileFromSprite(assets.image`fireball0`, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(assets.image`fireball0`, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(assets.image`fireball0`, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(assets.image`fireball0`, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(assets.image`fireball0`, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(assets.image`fireball0`, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(assets.image`fireball0`, ship, 0, -140)
        projectile = sprites.createProjectileFromSprite(assets.image`fireball0`, ship, 0, -140)
        wallCooldown = 300
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`fireball`, ship, 0, -140)
    projectile.startEffect(effects.ashes, 100)
})
info.onScore(50, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(5, 500)
    otherSprite.destroy(effects.ashes)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let ship: Sprite = null
let wallCooldown = 0
wallCooldown = 300
game.splash("space dragon pidguck war fighter 2")
music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.LoopingInBackground)
let asteroids = [
assets.image`duck 1`,
assets.image`duck 3`,
assets.image`duck 8`,
assets.image`duck 5`,
assets.image`duck 9`,
assets.image`duck 13`,
assets.image`dragon0`
]
ship = sprites.create(assets.image`dragon1`, SpriteKind.Player)
ship.setStayInScreen(true)
ship.bottom = 120
controller.moveSprite(ship, 100, 100)
info.setLife(5)
effects.starField.startScreenEffect()
game.onUpdateInterval(1, function () {
    wallCooldown += -1
    ship.sayText(wallCooldown)
})
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
    projectile.follow(ship, 80)
})
