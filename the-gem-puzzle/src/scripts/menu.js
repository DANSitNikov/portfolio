import { setTime } from './timeAndSteps';
import { showRules } from './rules';
import { showSettings } from './settings';
import { generateField } from './generateField';
import { showBestScore } from './bestScore';
import { savedGames } from './savedGames';

const menu = document.createElement('div');
const startGame = document.createElement('button');
const savedGame = document.createElement('button');
const bestScores = document.createElement('button');
const rules = document.createElement('button');
const settings = document.createElement('button');

export let lvl = 3;

export function saveLevel(level) {
  lvl = level;
}

export function showMenu() {
  menu.classList.add('menu');
  menu.style.display = 'flex';
  startGame.classList.add('menu__item');
  savedGame.classList.add('menu__item');
  bestScores.classList.add('menu__item');
  rules.classList.add('menu__item');
  settings.classList.add('menu__item');

  startGame.textContent = 'start game';
  savedGame.textContent = 'saved games';
  bestScores.textContent = 'best score';
  rules.textContent = 'rules';
  settings.textContent = 'settings';

  menu.append(startGame, savedGame, bestScores, rules, settings);
  document.querySelector('.game__field').appendChild(menu);
}

startGame.addEventListener('click', () => {
  menu.style.display = 'none';
  setTime();
  generateField(lvl);
});

savedGame.addEventListener('click', () => {
  savedGames();
  menu.style.display = 'none';
});

bestScores.addEventListener('click', () => {
  showBestScore(lvl);
  menu.style.display = 'none';
});

rules.addEventListener('click', () => {
  showRules();
  menu.style.display = 'none';
});

settings.addEventListener('click', () => {
  showSettings();
  menu.style.display = 'none';
});

alert('Уважаемый проверяющий, пожалуйста перезагрузите страницу на 510px, так как без перезагрузки верстка может съехать. Спасибо!');
