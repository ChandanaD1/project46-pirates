var pirate,l1,l2,l3,l4,l5,octopus,island, forward;
var gameState = "start", GameState = "start"
var pirateimg, backgroundimg, islandimg, palmtreeimg, caveimg, pirateshipimg, volcanoimg, octopusimg, redximg, forwardimg;
var treesbg;
var coconut, coconutimg, basketimg, basket, coconutGroup = [], coconutState = [0,0,0,0,0,0,0], counter = 0;
var cavebg;
var sword, swordstate = 0, score = 0, goodbatGroup = [], badbatGroup = [], sswordimg, goodbatimg, badbatimg, bat;
var volcanobg;
var fireballimg, fireball, fireballsGroup, life = 3, lifeState = 0, seconds = 0;
var pirateshipbg;
var coins = [], coinimg, coinState = 0, hint, count = 0, hintsGroup;
var redxbg;
var shovelimg, shovel, shovelstate = 0, treasurechestimg, shovelState = [0,0,0], shovelCount = 0, treasurespot;

function preload() {
  pirateimg = loadImage("images/pirate.png") 
  palmtreeimg = loadImage("images/palmtrees.png")
  caveimg = loadImage("images/cave.png")
  treesbg = loadImage("images/treesbg.png")
  coconutimg = loadImage("images/coconut.png")
  basketimg = loadImage("images/basket.png")
  backgroundimg = loadImage("images/background.png")
  pirateshipimg = loadImage("images/pirateship.png")
  islandimg = loadImage("images/island.png")
  volcanoimg = loadImage("images/volcano.png")
  octopusimg = loadImage("images/octopus.png")
  cavebg = loadImage("images/cavebg.png")
  swordimg = loadImage("images/sword.png")
  goodbatimg = loadImage("images/goodbat.png")
  badbatimg = loadImage("images/badbat.png")
  volcanobg = loadImage("images/volcanobg.png")
  pirateshipbg = loadImage("images/pirateshipbg.png")
  redximg = loadImage("images/redx.png")
  redxbg = loadImage("images/redxbg.png")
  shovelimg = loadImage("images/shovel.png")
  treasurechestimg = loadImage("images/treasurechest.png")
  fireballimg = loadImage("images/fireball.png")
  forwardimg = loadImage("images/forward.png")
  coinimg = loadImage("images/coin.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites()

  island = createSprite(windowWidth/2, windowHeight/2, 50,50)
  island.addImage(islandimg)
  island.scale = 2

  l1=createSprite(200,150,30,30);
  l1.addImage(palmtreeimg)
  l1.scale = 0.8

  l2=createSprite(750,300, 30, 30);
  l2.addImage(volcanoimg)
  l2.scale = 0.5
  volcanobg.scale = 1.1

  fireballsGroup = new Group()

  l3=createSprite(460,550, 30, 30);
  l3.addImage(caveimg)
  l3.scale = 0.8;

  l4=createSprite(1100,500, 30, 30);
  l4.addImage(pirateshipimg)
  l4.scale = 1.4

  l5=createSprite(1100,100, 30, 30);
  l5.addImage(redximg)
  l5.scale = 0.25

  forward = createSprite(windowWidth-50, 50, 30,30)
  forward.addImage(forwardimg)
  forward.scale = 0.1
  forward.visible = false

  octopus = createSprite(windowWidth/2, 70, 30,30)
  octopus.addImage(octopusimg)
  octopus.scale = 0.9

  pirate = createSprite(130, windowHeight-120, 30, 30);
  pirate.addImage(pirateimg)
  pirate.scale = 0.28;
  pirate.setCollider("rectangle", 0,0,200,500)

  sword = createSprite(windowWidth/2 - 50, 60, 50,50)
  sword.addImage(swordimg)
  sword.scale = 0.7
  sword.setCollider("rectangle",-20,-40,50,120)
  sword.visible = false

  hintsGroup = new Group()

  shovel = createSprite(windowWidth/2 - 300, windowHeight - 100,30,30)
  shovel.addImage(shovelimg)
  shovel.scale = 0.5
  shovel.visible = false;
}



function draw() {
  background(backgroundimg); 

  /*if(keyDown("up")) {
    pirate.y = pirate.y -10
  }

  if(keyDown("down")) {
    pirate.y = pirate.y +10
  }

  if(keyDown("left")) {
    pirate.x = pirate.x -10
  }

  if(keyDown("right")) {
    pirate.x = pirate.x +10
  }

  pirate.collide(edges)*/

  if(mousePressedOver(l1) && gameState == "start") {
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    island.visible = false;
    octopus.visible = false
    coconuts()
    gameState = "trees"
    GameState = "play"
    console.log(gameState)
  }

  if(mousePressedOver(l2) && gameState == "start") {
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    island.visible = false;
    octopus.visible = false
    gameState = "volcano"
    GameState = "play"
    console.log(gameState)
  }

  if(mousePressedOver(l3) && gameState == "start") {
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    island.visible = false;
    octopus.visible = false
    gameState = "cave"
    GameState = "play"
    console.log(gameState)
  }

  if(mousePressedOver(l4) && gameState == "start") {
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    l5.visible = false;
    island.visible = false;
    octopus.visible = false
    gameState = "pirateship"
    GameState = "play"
    console.log(gameState)
  }

  if(mousePressedOver(l5) && gameState == "start") {
    l1.visible = false;
    l2.visible = false;
    l3.visible = false;
    l4.visible = false;
    island.visible = false;
    octopus.visible = false
    gameState = "redx"
    GameState = "play"
    console.log(gameState)
  }

  if(GameState == "start") {
    background(backgroundimg) 
    l1.visible = true;
    l2.visible = true;
    l3.visible = true;
    l4.visible = true;
    l5.visible = true;
    island.visible = true;
    octopus.visible = true;
    forward.visible = false;
  }

  if(mousePressedOver(forward) && gameState == "trees" && forward.visible == true) {
    GameState = "end"
    gameState = "start"
  }

  if(mousePressedOver(forward) && gameState == "volcano" && forward.visible == true) {
    GameState = "end"
    gameState = "start"
  }

  if(mousePressedOver(forward) && gameState == "cave" && forward.visible == true) {
    GameState = "end"
    gameState = "start"
  }

  if(mousePressedOver(forward) && gameState == "pirateship" && forward.visible == true) {
    GameState = "end"
    gameState = "start"
  }

  if(GameState == "end") {
    background(backgroundimg)
    l1.visible = true;
    l2.visible = true;
    l3.visible = true;
    l4.visible = true;
    l5.visible = true;
    island.visible = true;
    octopus.visible = true;
    forward.visible = false;
    pirate.x = 130
    pirate.y = windowHeight-120
    pirate.scale = 0.28
  }

  if(gameState == "trees") {
    background(treesbg)
    pirate.scale = 0.7
    pirate.x = windowWidth/2
    pirate.y = windowHeight/2
    basket.bounceOff(edges)
    for(var i = 0; i < coconutGroup.length; i++) {
      if(mousePressedOver(coconutGroup[i])) {
        coconutGroup[i].velocityY = 12
      }
    }
    for(var j = 0; j< coconutGroup.length; j++) {
      if(coconutGroup[j].collide(basket) && coconutState[j] == 0) {
        coconutGroup[j].collide(basket)
        counter++
        coconutState[j] = 1
        coconutGroup[j].velocityX = basket.velocityX
        coconutGroup[j].setCollider("circle",0,-600,900)
      }
      coconutGroup[j].bounceOff(edges[0])
      coconutGroup[j].bounceOff(edges[1])
    }

    fill("white")
    text("Coconuts Caught: " + counter, 50, 50)

    for(var j = 0; j< coconutGroup.length; j++) {
      if(counter == 5) {
        text("You Win", windowWidth/2 - 20, windowHeight/2 - 100)
        basket.destroy()
        coconutGroup[j].destroy()
        forward.visible = true;
      }
      if(frameCount % 1000 == 0 && counter <5) {
        text("You Win", windowWidth/2 - 20, windowHeight/2 - 100)
        basket.destroy()
        coconutGroup[j].destroy()
        forward.visible = true;
      }
    }
    /*if() {
      coconut.destroy()
      basket.destroy()
      text("You Won!", windowWidth/2 - 50, windowHeight/2)
    }*/

   /*for(var j = 0; j< coconutGroup.length; j++) {
      if(frameCount % 30 == 0) {
        forward.visible = true
        coconutGroup[j].destroy()
        basket.destroy()
      }
    }*/
  } 

  if(gameState == "volcano") {
    background(volcanobg)
    pirate.scale = 0.4
    pirate.y = windowHeight/2 + 200
    pirate.debug = true

    if(keyDown("left")) {
      pirate.x = pirate.x -10
    }

    if(keyDown("right")) {
      pirate.x = pirate.x +10
    }

    pirate.collide(edges)
    fireballs()

    fill ("white")
    textSize(30)

    text("lives left: " + life, windowWidth - 200, 100)

    if(fireballsGroup.isTouching(pirate) && lifeState == 0) {
      life = life - 1
      lifeState = 1
    }

    if (life ==2 || life == 1) {
      seconds = seconds + 1
    }

    if(seconds == 60) {
      lifeState = 0
      seconds = 0
    }

    if (life == 0) {
      text("You Lost", windowWidth/2 - 20, windowHeight/2)
      forward.visible = true;
    }

    if(frameCount > 1000 && life > 0) {
      text("You Win", windowWidth/2 - 20, windowHeight/2)
      forward.visible = true;
    }
  }

  if(gameState == "cave") {
    background(cavebg)
    pirate.scale = 0.7
    pirate.x = windowWidth/2
    pirate.y = windowHeight/2 + 200
    sword.visible = true
    bats()
    if(mousePressedOver(sword)) {
      swordstate = 1;
    }
    if(swordstate == 1) {
      sword.x = mouseX
      sword.y = mouseY
    }
    fill ("white")
    textSize(30)
    text("score: " + score, windowWidth/2 - 50, 30)
    for(var i = 0; i< badbatGroup.length; i++) {
      if(sword.isTouching(badbatGroup[i])) {
        badbatGroup[i].destroy()
        score = score + 2
      }
    }
    for(var j = 0; j< goodbatGroup.length; j++) {
      if(sword.isTouching(goodbatGroup[j])) {
        goodbatGroup[j].destroy()
        score = score - 2
      }
    }
    if(score == 50) {
      goodbatGroup = []
      badbatGroup = []
      sword.destroy()
      text("You Won!", windowWidth/2 - 50, windowHeight/2)
      forward.visible = true;
    }
    if(frameCount % 1000 == 0 && score < 50) {
      goodbatGroup = []
      badbatGroup = []
      sword.destroy()
      text("You Lost!", windowWidth/2 - 50, windowHeight/2)
      forward.visible = true;
    }
  }

  if(gameState == "pirateship") {
    background(pirateshipbg)
    pirate.scale = 0.7
    pirate.x = windowWidth/2 - 300
    pirate.y = windowHeight/2 + 100

    textSize(10)
    fill ("white")
    text("Find 5 coins", windowWidth/2 - 50, windowHeight/2 - 100)

    if(coinState == 0) {
      for(var i = 0; i < 10; i++) {
        var coin = createSprite(random(100,windowWidth-100), random(100,windowHeight-100),30,30)
        coin.addImage(coinimg)
        coin.scale = 0.2
        coin.visible = false
        coins.push(coin)
      }
      coinState = 1;
    }

    for(var j = 0; j < 10; j++) {
      if(mousePressedOver(coins[j])) {
        coins[j].visible = true
        count = count + 1
      }
    }

    if(frameCount % 100 == 0 && coinState <= 10) {
      hint = createSprite(coins[coinState-1].x,coins[coinState-1].y,7,7)
      hint.shapeColor = "brown"
      hintsGroup.add(hint)
      coinState = coinState +1
      console.log(coinState)
    }

    textSize(15)
    fill ("white")
    text("Coins Found: " + count, windowWidth/2 - 50, 50)

    if(count == 10) {
      text("You Won!", windowWidth/2 - 50, windowHeight/2)
      forward.visible = true;
      for(var j = 0; j < 10; j++) {
        coins[j].destroy()
      }
      hintsGroup.destroyEach()
    }

    if(frameCount % 10000 == 0 && count < 10) {
      text("You Lost!", windowWidth/2 - 50, windowHeight/2)
      forward.visible = true;
      for(var j = 0; j < 10; j++) {
        coins[j].destroy()
      }
      hintsGroup.destroyEach()
    }
  }

  if(gameState == "redx") {
    background(redxbg)
    pirate.scale = 0.7
    pirate.x = windowWidth/2 + 300
    pirate.y = windowHeight/2 + 100
    shovel.visible = true;
    l5.x = windowWidth/2
    l5.y = windowHeight/2 + 250
    if(mousePressedOver(shovel)) {
      shovelstate = 1;
    }
    if(shovelstate == 1) {
      shovel.x = mouseX
      shovel.y = mouseY
    }
    for(var i = 0; i < 3; i++) {
      if(mousePressedOver(l5) && shovelState[i] == 0) {
        shovelState[i]++
        shovelCount++
      }
    }
    if(shovelCount == 3) {
      l5.addImage(treasurechestimg)
    }
  }

  drawSprites();
}

function coconuts() {
  basket = createSprite(50,windowHeight-100,10,10)
  basket.addImage(basketimg)
  basket.scale = 0.5
  basket.setCollider("rectangle",0,0,300,60)
  basket.velocityX = 5
  for(var i = 1; i<=7; i++) {
      coconut = createSprite(random(windowWidth/2,windowWidth-40), random(20,100), 10,10)
      coconut.addImage(coconutimg)
      coconut.scale = 0.1
      coconutGroup.push(coconut)
  }
}

function fireballs() {
  if(frameCount % 30 == 0) {
    var rand = Math.round(random(-10,10))
    var rand1 = Math.round(random(-10,10))
    fireball = createSprite(windowWidth/2, windowHeight/2 - 50, 30,30)
    fireball.addImage(fireballimg)
    fireball.scale = 0.2
    fireball.setCollider("rectangle", -50,0,500,100)
    fireball.debug = true;
    fireball.velocityX = rand
    fireball.velocityY = rand1
    if(fireball.velocityX >= 0 && fireball.velocityY <= 0) {
      fireball.rotation = 145
    }
    if(fireball.velocityX >= 0 && fireball.velocityY >= 0) {
      fireball.rotation = 145+90
    }
    if(fireball.velocityX <= 0 && fireball.velocityY <= 0) {
      fireball.rotation = 145 - 90
    }
    if(fireball.velocityX <= 0 && fireball.velocityY >= 0) {
      fireball.rotation = 145 + 180
    }
    fireballsGroup.add(fireball)
    fireball.lifetime = 200
  }
}

function bats() {
  if(frameCount % 20 == 0) {
    var rand = Math.round(random(1,2))
    var rand1 = Math.round(random(1,2))
    console.log(rand)
    if(rand == 1) {
      bat = createSprite(-50, random(100,windowHeight-100), 30,30)
      bat.velocityX = 5
    } else if(rand == 2) {
      bat = createSprite(windowWidth + 50, random(100,windowHeight-100), 30,30)
      bat.velocityX = -5
    }
    if(rand1 == 1) {
      bat.addImage(goodbatimg)
      bat.scale = 0.5
      goodbatGroup.push(bat)
    } else if(rand1 == 2) {
      bat.addImage(badbatimg)
      bat.scale = 0.5
      badbatGroup.push(bat)
    }
  }
}