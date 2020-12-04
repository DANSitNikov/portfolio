import { startListening } from './startListening';
import trueA from '.././../assets/mineAudio/true.mp3';
import falseA from '.././../assets/mineAudio/false.mp3';
import { game } from '../game/game';
import { item } from '../route/route';

function checkResultLength(block, number) {
  function deleteAnswer() {
    if (number > 16 && document.documentElement.clientWidth > 1199 && block.children.length > 16) {
      while (block.children.length > 16) {
        block.removeChild(block.firstChild);
      }
    } else if (number > 14 && document.documentElement.clientWidth > 999
      && document.documentElement.clientWidth < 1200 && block.children.length > 14) {
      while (block.children.length > 14) {
        block.removeChild(block.firstChild);
      }
    } else if (number > 9 && document.documentElement.clientWidth > 499
      && document.documentElement.clientWidth < 1000 && block.children.length > 9) {
      while (block.children.length > 9) {
        block.removeChild(block.firstChild);
      }
    } else if (number > 8 && document.documentElement.clientWidth > 250
      && document.documentElement.clientWidth < 500 && block.children.length > 8) {
      while (block.children.length > 8) {
        block.removeChild(block.firstChild);
      }
    }
  }

  window.addEventListener('resize', () => {
    deleteAnswer();
  });

  deleteAnswer();
}

export function clickCards() {
  const cardsTarget = document.querySelectorAll('.card-change');
  const checkTrue = document.querySelectorAll('.check');
  const result = document.querySelector('.click-result');
  let deleteImg = 0;

  cardsTarget.forEach(el => {
    el.addEventListener('click', () => {
      let a = el.id[el.id.length - 1];
      if (el.id.length > 5) {
        a = el.id.slice(-2);
      }
      checkResultLength(result, deleteImg);
      deleteImg += 1;

      if (+a === JSON.parse(localStorage.getItem('prevAudio'))) {
        const realPage = item / 2;
        let pageStatistic = Math.round(item / 2) - 1;

        if (localStorage.getItem('activeSlide') && item === 's') {
          pageStatistic = Number(JSON.parse(localStorage.getItem('activeSlide')));
        }

        let j = JSON.parse(localStorage.getItem('prevAudio'));
        if (Number.isInteger(realPage)) {
          j += 8;
        }
        const getStatistic = JSON.parse(localStorage.getItem('statistic'));

        if (localStorage.getItem('activeSlide') && item === 's') {
          for (let i = 0; i < getStatistic[pageStatistic].length; i += 1) {
            let reg = new RegExp(getStatistic[pageStatistic][i].word);
            if (el.children[0].children[0].src.match(reg)) {
              getStatistic[pageStatistic][i].correct += 1;
              getStatistic[pageStatistic][i]['%'] = Math.round((getStatistic[pageStatistic][i].correct * 100) / (getStatistic[pageStatistic][i].correct + getStatistic[pageStatistic][i].incorrect));
            }
          }
        } else {
          getStatistic[pageStatistic][j].correct += 1;
          getStatistic[pageStatistic][j]['%'] = Math.round((getStatistic[pageStatistic][j].correct * 100) / (getStatistic[pageStatistic][j].correct + getStatistic[pageStatistic][j].incorrect));
        }

        localStorage.setItem('statistic', JSON.stringify(getStatistic));

        const goodResult = document.createElement('span');
        goodResult.innerHTML = `
          <svg color="green" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-smile-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c.552 0 1-.672 1-1.5S10.552 5 10 5s-1 .672-1 1.5S9.448 8 10 8z"/>
          </svg>
        `;
        checkTrue[a].innerHTML = `
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
        </svg>
      `;
        result.appendChild(goodResult);
        let audio = new Audio();
        audio.src = `${trueA}`;
        audio.autoplay = true;
        el.style.pointerEvents = 'none';
        el.style.opacity = '0.5';
        setTimeout(() => {
          startListening();
        }, 1000);
        localStorage.setItem('game', 'true');
      } else {
        const realPage = item / 2;
        let pageStatistic = Math.round(item / 2) - 1;

        if (localStorage.getItem('activeSlide') && item === 's') {
          pageStatistic = Number(JSON.parse(localStorage.getItem('activeSlide')));
        }

        let j = JSON.parse(localStorage.getItem('prevAudio'));
        if (Number.isInteger(realPage)) {
          j += 8;
        }
        const getStatistic = JSON.parse(localStorage.getItem('statistic'));
        getStatistic[pageStatistic][j].incorrect += 1;
        getStatistic[pageStatistic][j]['%'] = Math.round((getStatistic[pageStatistic][j].correct * 100) / (getStatistic[pageStatistic][j].correct + getStatistic[pageStatistic][j].incorrect));
        localStorage.setItem('statistic', JSON.stringify(getStatistic));

        const badResult = document.createElement('span');
        badResult.innerHTML = `
          <svg color="red" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-emoji-frown-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM10 8c.552 0 1-.672 1-1.5S10.552 5 10 5s-1 .672-1 1.5S9.448 8 10 8z"/>
          </svg>
        `;
        result.appendChild(badResult);
        let audio = new Audio();
        audio.src = `${falseA}`;
        audio.autoplay = true;
        localStorage.setItem('game', 'false');
      }
      game();
    });
  });
}
