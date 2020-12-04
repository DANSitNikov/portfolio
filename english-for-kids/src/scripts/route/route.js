import { renderPage } from '../pages/renderPage';
import { addEvent } from '../events/addEvent';
import { playMode } from '../modes/play';
import { activePage } from '../header/active-page';
import { createHeaderStatistic } from '../statistic/statistic';
import { createSlider } from '../statistic/slider';
import { reset } from '../events/resetEvent';
import { repeatDifficultWords } from '../statistic/repeat';

export let item = 0;

export function indexView() {
  let slot = document.querySelector('#content');
  window.location.hash = '#page0';

  slot.innerHTML = renderPage(0).outerHTML;

  function updateSlot(data) {
    slot.innerHTML = data;
  }

  function loadContent(uri) {
    const contentUri = `${uri}.html`;
    let index = contentUri[contentUri.length - 6];

    if (contentUri.length === 11) {
      index = contentUri[contentUri.length - 7] + contentUri[contentUri.length - 6];
    }

    if (index === '13') {
      document.querySelector('.switch-btn').style.pointerEvents = 'none';
    } else {
      document.querySelector('.switch-btn').style.pointerEvents = 'auto';
    }

    switch (index || `1${index}`) {
      case '0':
        activePage(0);
        updateSlot(renderPage(0).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        break;
      case '1':
        activePage(1);
        updateSlot(renderPage(1).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(1);
        }
        break;
      case '2':
        activePage(2);
        updateSlot(renderPage(2).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(2);
        }
        break;
      case '3':
        activePage(3);
        updateSlot(renderPage(3).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(3);
        }
        break;
      case '4':
        activePage(4);
        updateSlot(renderPage(4).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(4);
        }
        break;
      case '5':
        activePage(5);
        updateSlot(renderPage(5).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(5);
        }
        break;
      case '6':
        activePage(6);
        updateSlot(renderPage(6).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(6);
        }
        break;
      case '7':
        activePage(7);
        updateSlot(renderPage(7).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(7);
        }
        break;
      case '8':
        activePage(8);
        updateSlot(renderPage(8).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(8);
        }
        break;
      case '9':
        activePage(9);
        updateSlot(renderPage(9).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(9);
        }
        break;
      case '10':
        activePage(10);
        updateSlot(renderPage(10).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(10);
        }
        break;
      case '11':
        activePage(11);
        updateSlot(renderPage(11).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(11);
        }
        break;
      case '12':
        activePage(12);
        updateSlot(renderPage(12).outerHTML);
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        if (localStorage.getItem('mode') === 'play') {
          playMode();
        } else {
          addEvent(12);
        }
        break;
      case '13':
        localStorage.removeItem('active-sort');
        localStorage.setItem('repeatWords', 'true');
        activePage(13);
        updateSlot(createHeaderStatistic().outerHTML);
        createSlider();
        reset();
        repeatDifficultWords();
        localStorage.removeItem('oneGame');
        window.scrollTo(0, 0);
        break;
      default:
        activePage(-1);
        break;
    }
  }

  function routeChange() {
    const hash = window.location.hash.substring(1);
    if (hash === 'difficultWords') {
      localStorage.setItem('repeatWords', 'true');
    } else {
      localStorage.removeItem('repeatWords');
    }
    item = hash[hash.length - 1];
    if (hash.length === 6) {
      item = hash[hash.length - 2] + hash[hash.length - 1];
    }
    loadContent(hash);
  }

  activePage(0);

  window.addEventListener('hashchange', e => routeChange(e));
}
