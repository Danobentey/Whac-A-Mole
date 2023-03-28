const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const levelDisplay = document.querySelector('#level');

let level = 1;
  let currentTime = 30;
  let timerId;
  let result = 0;

alert(`
Whac-A-Mole
Try to hit the mole and increase your score,
If you are able to score 10 points or more,
you can go to the next level
`)

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  })
  
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole');
  hitPosition = randomSquare.id;
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null
    }
  })
})

function moveMole(speed) {
  timerId = setInterval(randomSquare, speed);
}
moveMole(1000)

function stopGame() {
    clearInterval(timerCountDown);
    clearInterval(timerId)
    alert('GAME OVER, Your final Score is ' + result)

    if (result >= 10) nextLevel()
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) setTimeout(stopGame, 300)
}
let timerCountDown = setInterval(countDown, 1000);


function nextLevel() {
  level++
  result = 0 
  alert(`
  Congratulations Welcome to level ${level} 
  The mole's speed has be increased, 
  Hope you are ready for the challenge! Let's Go!!!!!!
  `)
  levelDisplay.textContent = level
  score.textContent = result

  //Level 2
  if (level == 2) {
    currentTime = 30;
    moveMole(900)
    setInterval(countDown, 1000)
  }
  

  if (level == 3) {
    currentTime = 30; 
    moveMole(800)
    setInterval(countDown, 1000)
  }

  if (level == 4) {
    currentTime = 30;
    moveMole(750)
    setInterval(countDown, 1000)
  }

  if (level == 5) {
    currentTime = 30;
    moveMole(700)
    setInterval(countDown, 1000)
  }

  if (level == 6) {
    currentTime = 25;
    moveMole(600)
    setInterval(countDown, 1000)
  }

  else {
    setInterval(countDown, 1000)
  }
  
}
