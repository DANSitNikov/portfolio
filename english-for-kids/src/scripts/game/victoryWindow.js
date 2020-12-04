import happy from '.././../assets/victory/img/happy.jpg';
import sad from '.././../assets/victory/img/sad.png';
import victorySound from '../../../src/assets/victory/audio/victory.mp3';
import loseSound from '../../../src/assets/victory/audio/lose.mp3';

export function victory() {
  const answers = JSON.parse(localStorage.getItem('oneGame'));
  const falseCount = [];

  answers.forEach(el => {
    if (el === 'false') {
      falseCount.push('0');
    }
  });

  let slot = document.querySelector('#content');
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container-victory');

  if (falseCount.length > 0) {
    const answers = JSON.parse(localStorage.getItem('oneGame'));
    let wrongAnswers = 0;

    for (let i = 0; i < answers.length; i += 1) {
      if (answers[i] === 'false') {
        wrongAnswers += 1;
      }
    }

    cardContainer.innerHTML = `
      <div style="text-align: center">
        <img width="300px" style="border-radius: 50%" src="${sad}" alt="happy end">
        <h2>You've made some mistakes! (${wrongAnswers})</h2>
        <h3>Please, don't worry, just keep going!</h3>
      </div>
    `;
    let audio = new Audio();
    audio.src = `${loseSound}`;
    audio.autoplay = true;
  } else {
    cardContainer.innerHTML = `
      <div style="text-align: center">
        <img width="300px" style="border-radius: 50%" src="${happy}" alt="happy end">
        <h2>Congratulations!</h2>
        <h3>Good Luck!</h3>
      </div>
    `;
    let audio = new Audio();
    audio.src = `${victorySound}`;
    audio.autoplay = true;
  }

  slot.innerHTML = cardContainer.outerHTML;

  return slot;
}
