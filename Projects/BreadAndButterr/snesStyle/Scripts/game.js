//BREADMAN JUMPING GAME
const breadMan = document.getElementById('breadMan');
const obstacle = document.getElementById('obstacle');
const lifeCounter = document.getElementById('lifeCounter');
const scoreCounter = document.getElementById('scoreCounter');
const gameOver = document.getElementById('gameOver');
var lifeCounterNumber = document.getElementById('lifeCounter').style.backgroundImage;
var actualScore = 0;
var collisionBool = false; //I haven't been hit yet
var scoreBool = false;     //I'm unable to score though
var sWidth = screen.width + 50;
obstacle.style.left = sWidth + 'px';

//BreadMan Jumping Animation
function jump() {
  if (breadMan.classList != 'jump') {
    breadMan.classList.add('jump');

    setTimeout(function () {
      breadMan.classList.remove('jump');
    }, 700);
  }
}

//Pressing Enter makes BreadMan Jump
document.addEventListener('keyup', event => {
  if (event.code ==='Enter') {
    jump();
  }
});

document.addEventListener("touchstart",jump);

//If there's no collision and enemy mmakes it to the end, add score
function scoring() {
  if (collisionBool == false && scoreBool == true) {
    actualScore += 100;
    scoreCounter.innerHTML = '<span>'+actualScore+'</span>';
    scoreBool = false;
  }
}

function increaseSpeed() {
  let max = 3;
  let min = 1;
  let varSpeed = Math.random() * (max - min) + min;
  let speedIncrease = 2;
  if (actualScore < 500) {
    obstacle.style.animation = 'obstacleMovement 2.5s infinite linear';
  }	else if (actualScore >= 500 && actualScore < 1000) {
    obstacle.style.animation = 'obstacleMovement 2s infinite linear';
  } else if (actualScore >= 1000 && actualScore < 2000) {
    speedIncrease -= 0.1;
    console.log(speedIncrease);
    obstacle.style.animation = 'obstacleMovement ' + speedIncrease + 's infinite linear';
  } else if (actualScore >= 3000 && actualScore < 4000) {
    obstacle.style.animation = 'obstacleMovement 1s infinite linear';
  } else {
    obstacle.style.animation = 'obstacleMovement ' + varSpeed + 's infinite linear';
  }
}

function changeEnemyResetData() {
  let max = 4;
  let min = 1;
  var varEnemy = Math.random() * (max - min) + min;
  varEnemy = Math.round(varEnemy);
  obstacle.style.backgroundImage = 'url("Pics/Enemy' + varEnemy + '.png")';
  obstacle.style.display = '';
  collisionBool = false;
  scoreBool = false;
}

//When Collision happens - lose a life
//When all 3 lives are gone, pause game, ask to restart
function lifeCounterDecrease() {
  if (lifeCounterNumber == 'url("Pics/Hearts3.png")') {
    lifeCounter.style.backgroundImage = 'url("Pics/Hearts2.png")';
    lifeCounterNumber = 'url("Pics/Hearts2.png")';
  } else if (lifeCounterNumber == 'url("Pics/Hearts2.png")') {
    lifeCounter.style.backgroundImage = 'url("Pics/Hearts1.png")';
    lifeCounterNumber = 'url("Pics/Hearts1.png")';
  } else if (lifeCounterNumber == 'url("Pics/Hearts1.png")') {
    lifeCounter.style.backgroundImage = 'url("Pics/Hearts0.png")';
    lifeCounterNumber = 'url("Pics/Hearts0.png")';
    breadMan.style.bottom = '98px';
    obstacle.style.display = 'none';
    obstacle.style.webkitAnimationPlayState = "paused";
    breadMan.style.webkitAnimationPlayState = "paused";
    scoreCounter.innerHTML = '<span>GAME OVER</span>';
    gameOver.innerHTML= '<div><button onclick="playAgain()">Play Again?</button></div>';
    if (actualScore >=10000) {
      scoreCounter.innerHTML = '<span>CONGRATS - Secret Merch Code</span>';
    }
  }
  collisionBool = true; //I've been hit
  scoreBool = false;    //I cannot score
}

//Restart game after game over
function playAgain() {
  lifeCounter.style.backgroundImage = 'url("Pics/Hearts3.png")';
  lifeCounterNumber = 'url("Pics/Hearts3.png")';
  actualScore = 0;
  obstacle.style.display = 'block';
  obstacle.style.animation = 'obstacleMovement 2.5s infinite linear';
  obstacle.style.webkitAnimationPlayState = "running";
  breadMan.style.webkitAnimationPlayState = "running";
  scoreCounter.innerHTML = '<span>0</span>';
  gameOver.innerHTML= '';
  breadMan.style.bottom = '98px';
  obstacle.style.left = sWidth +'px';
  collisionBool = false;
  scoreBool = false;
}

//checking every 10 milliseconds for collisions
let playingTheGame = setInterval(function() {
  let breadManBottom = parseInt(window.getComputedStyle(breadMan).getPropertyValue("bottom"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  //collision
  if (obstacleLeft < 65 && obstacleLeft > 15 && breadManBottom <= 125) {
    obstacle.style.display = 'none';
    lifeCounterDecrease();
  }

  //if collision didn't happen and obstacle made it past us, scoring is true
  if (collisionBool == false && obstacleLeft < -40 && obstacleLeft > -50) {
    scoreBool = true;
    obstacle.style.display = 'none';
    scoring();
    increaseSpeed();
  }

  //obstacle restarts at the beginning - reset booleans
  if (obstacleLeft <= sWidth && obstacleLeft >= sWidth-10) {
    //if we've lost, hide the enemies - sloppy workaround imo
    if (lifeCounterNumber == 'url("Pics/Hearts0.png")') {
      obstacle.style.display = 'none';
    } else {
      changeEnemyResetData();
    }
  }
}, 10);
