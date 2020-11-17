import { pauseWinsow } from './pause';
import { addBestScore } from './bestScore';
import { showMenu } from './menu';

const pause = document.createElement('button');
const showTime = document.createElement('p');
const showSteps = document.createElement('p');

let time = 0;
let minutes = 0;
let changeTime;

pause.classList.add('pause');
showTime.classList.add('time');
showSteps.classList.add('steps');
pause.setAttribute('disabled', 'disabled');

export function defaultText() {
  const body = document.querySelector('.game__field');

  pause.textContent = 'pause';
  showTime.textContent = 'Time: 00:00';
  showSteps.textContent = 'Steps: 0';
  body.prepend(pause);
  body.prepend(showTime);
  body.prepend(showSteps);
}

export function setNewTime(newTime) {
  time = newTime;
}

export function endTime() {
  setTime();
  clearInterval(changeTime);
  pauseWinsow();
}

export function finallyEndTime() {
  const gameData = JSON.parse(localStorage.getItem('gameData'));
  gameData.push(time);
  localStorage.setItem('gameData', JSON.stringify(gameData));
  setTime();
  clearInterval(changeTime);
}

pause.addEventListener('click', () => {
  endTime();
});

export function setSteps(step) {
  showSteps.textContent = `Steps: ${step}`;
}

export function victoryGame(step, number) {
  addBestScore(0, step, number, time);
  time = 0;
  clearInterval(changeTime);
  showTime.textContent = 'Time: 0';
  showSteps.textContent = 'Steps: 0';
}

export function endGame() {
  time = 0;
  minutes = 0;
  clearInterval(changeTime);
  showTime.textContent = 'Time: 00:00';
  showSteps.textContent = 'Steps: 0';
}

export function finalTime() {
  return time;
}

export function setTime() {
  if (changeTime) {
    pause.setAttribute('disabled', 'disabled');
    clearInterval(changeTime);
  }
  changeTime = setInterval(() => {
    if (time === 3540) {
      alert('you lost the game!');
      time = 0;
      minutes = 0;
      finallyEndTime();
      endGame();
      showMenu();
    } else {
      time += 1;
      if (time % 60 === 0) {
        minutes += 1;
      }

      let realTime = time % 60;

      if (realTime < 10) {
        if (minutes < 10) {
          showTime.textContent = `Time: 0${minutes}:0${realTime}`;
        } else {
          showTime.textContent = `Time: ${minutes}:0${realTime}`;
        }
      } else if (realTime >= 10) {
        if (minutes < 10) {
          showTime.textContent = `Time: 0${minutes}:${realTime}`;
        } else {
          showTime.textContent = `Time: ${minutes}:${realTime}`;
        }
      }
    }

    pause.removeAttribute('disabled');
  }, 1000);
}
