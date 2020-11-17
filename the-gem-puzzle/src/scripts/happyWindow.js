import { showMenu } from './menu';
import { finalTime } from './timeAndSteps';
import { arrayOfImages } from './generateField';

const victoryWindow = document.createElement('div');
const congrats = document.createElement('h2');
const preGift = document.createElement('p');
const gift = document.createElement('p');
const stepsContent = document.createElement('p');
const timeContnent = document.createElement('p');
const continueBtn = document.createElement('button');

continueBtn.addEventListener('click', () => {
  showMenu();
  victoryWindow.style.display = 'none';
});

function setGift(data) {
  let randomQuote = Math.floor(Math.random() * 1000);
  gift.textContent = data[randomQuote].text;
}

export function youWin(img, steps) {
  gift.textContent = '';

  victoryWindow.style.display = 'block';
  victoryWindow.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("${arrayOfImages[img].default}")`;

  victoryWindow.classList.add('victory__window');
  congrats.classList.add('congrats');
  preGift.classList.add('pregift');
  gift.classList.add('gift');
  continueBtn.classList.add('continue');

  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => setGift(data));

  congrats.textContent = 'CONGRATULATIONS';
  preGift.textContent = 'Your small motivation: ';
  continueBtn.textContent = 'continue';
  stepsContent.textContent = `Steps: ${steps}`;

  let seconds = finalTime() % 60;
  let minutes = (finalTime() - seconds) / 60;

  if (minutes < 0) {
    minutes = 0;
  }

  if (seconds < 10) {
    if (minutes < 10) {
      timeContnent.textContent = `Time: 0${minutes}:0${seconds}`;
    } else {
      timeContnent.textContent = `Time: ${minutes}:0${seconds}`;
    }
  } else if (seconds >= 10) {
    if (minutes < 10) {
      timeContnent.textContent = `Time: 0${minutes}:${seconds}`;
    } else {
      timeContnent.textContent = `Time: ${minutes}:${seconds}`;
    }
  }

  victoryWindow.appendChild(congrats);
  victoryWindow.appendChild(stepsContent);
  victoryWindow.appendChild(timeContnent);
  victoryWindow.appendChild(preGift);
  victoryWindow.appendChild(gift);
  victoryWindow.appendChild(continueBtn);

  document.querySelector('.game__field').appendChild(victoryWindow);
}
