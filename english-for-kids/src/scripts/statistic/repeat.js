import { repeatWords } from './renderRepeat';
import { learnMode } from "../modes/learn";
import { playMode, playModeActive } from "../modes/play";

export function repeatDifficultWords() {
  const repeatBtn = document.querySelector('.repeat-statistic');

  repeatBtn.addEventListener('click', () => {
    const statistic = JSON.parse(localStorage.getItem('statistic'));
    const activeSlide = JSON.parse(localStorage.getItem('activeSlide'));
    const wordsForRepeat = [];

    for (let i = 0; i < statistic[activeSlide].length; i += 1) {
      if (statistic[activeSlide][i].incorrect !== 0 && statistic[activeSlide][i]['%'] < 26) {
        wordsForRepeat.push(statistic[activeSlide][i].word);
      }
    }

    if (wordsForRepeat.length > 0) {
      repeatWords(wordsForRepeat);
      const learn = document.querySelector('.mode-learn');
      const play = document.querySelector('.mode-play');
      if (localStorage.getItem('mode') === 'learn') {
        learnMode(learn, play);
      } else {
        playMode();
        playModeActive(learn, play);
      }
    } else {
      alert('you have no words to repeat');
    }
  });
}
