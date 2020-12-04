import { renderPage } from '../pages/renderPage';
import { item } from '../route/route';
import { addEvent } from '../events/addEvent';

export function learnMode(learn, play) {
  learn.style.transform = 'scale(2.3)';
  learn.style.color = 'yellow';
  play.style.color = 'black';
  play.style.transform = 'scale(1.5)';
  document.querySelectorAll('.card-body').forEach(el => {
    el.style.background = 'yellow';
  });
  console.log(document.querySelector('.switch-slider'));
  localStorage.setItem('mode', 'learn');

  if (localStorage.getItem('repeatWords')) {
    document.querySelector('#content').innerHTML = renderPage(JSON.parse(localStorage.getItem('activeSlide')) * 2 + 1, JSON.parse(localStorage.getItem('activeSlide')) * 2 + 2, JSON.parse(localStorage.getItem('wordForRepeat'))).outerHTML;
  } else {
    document.querySelector('#content').innerHTML = renderPage(+item).outerHTML;
  }

  if (+item !== 0) {
    if (localStorage.getItem('repeatWords')) {
      addEvent(JSON.parse(localStorage.getItem('activeSlide')) * 2 + 1);
    } else {
      addEvent(+item);
    }
  }
}
