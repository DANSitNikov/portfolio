import { renderPage } from '../pages/renderPage';
import { item } from '../route/route';
import { startGame } from '../events/startGame';

export function playMode() {
  console.log(item);
  localStorage.setItem('mode', 'play');
  if (localStorage.getItem('repeatWords')) {
    document.querySelector('#content').innerHTML = renderPage(JSON.parse(localStorage.getItem('activeSlide')) * 2 + 1, JSON.parse(localStorage.getItem('activeSlide')) * 2 + 2, JSON.parse(localStorage.getItem('wordForRepeat'))).outerHTML;
  } else {
    document.querySelector('#content').innerHTML = renderPage(+item).outerHTML;
  }
  if (+item !== 0) {
    setTimeout(() => {
      startGame();
    }, 500);
  }
}

export function playModeActive(learn, play) {
  learn.style.transform = 'scale(1.5)';
  learn.style.color = 'black';
  play.style.color = 'red';
  play.style.transform = 'scale(2.3)';
  document.querySelectorAll('.card-body').forEach(el => {
    el.style.background = 'red';
  });
}
