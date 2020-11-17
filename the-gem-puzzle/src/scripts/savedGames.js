import { showMenu } from './menu';
import { setNewTime, setSteps, setTime } from './timeAndSteps';
import { generateField } from './generateField';

const saveGameWindow = document.createElement('div');
const saveTable = document.createElement('div');
const back = document.createElement('i');
const saveHeader = document.createElement('h3');
const data = document.createElement('p');
const moves = document.createElement('p');
const size = document.createElement('p');
const time = document.createElement('p');
const tabToPlay = document.createElement('p');
const play = document.createElement('i');

let check = 0;

data.textContent = 'Data';
moves.textContent = 'Moves';
size.textContent = 'Size';
time.textContent = 'Time';
play.classList.add('material-icons');
saveGameWindow.classList.add('save__game');
saveTable.classList.add('save__game-table');
back.classList.add('material-icons', 'back');
back.textContent = 'reply';
tabToPlay.textContent = 'play';
play.textContent = 'play_arrow';

let items = [[], [], [], [], [], [], [], []];

for (let i = 0; i < items.length; i += 1) {
  let newDate = document.createElement('p');
  let newMoves = document.createElement('p');
  let newSize = document.createElement('p');
  let newTime = document.createElement('p');
  let play = document.createElement('i');

  items[i].push(newDate, newMoves, newSize, newTime, play);
}

function addEvent(param, arr) {
  document.querySelectorAll('.play').forEach((el, i) => {
    el.addEventListener('click', (e) => {
      if (e) {
        saveGameWindow.style.display = 'none';
        setNewTime(arr[0][i][2]);
        setTime();
        setSteps(arr[0][i][0]);
        localStorage.setItem('level', arr[0][i][1]);
        const array = JSON.parse(localStorage.getItem('saveGame'));
        let indexes = [];

        for (let j = 0; j < array[i].length; j += 1) {
          indexes.push(array[i][j].index - 1);
        }

        const picture = JSON.parse(localStorage.getItem('newImages'));

        generateField('sdf', array[i], picture[i], arr[0][i][0]);
      }
    });
  });
}

export function savedGames() {
  check += 1;
  saveHeader.textContent = 'Saved games';
  saveGameWindow.style.display = 'block';

  let arr = [];

  for (let i = 0; i < localStorage.length; i += 1) {
    let loc = JSON.parse(localStorage.getItem('newGameData'));
    arr.push(loc);
  }

  saveTable.innerHTML = '';

  saveTable.append(data, moves, time, size, tabToPlay);

  if (localStorage.getItem('newGameData')) {
    for (let i = 0; i < arr[0].length; i += 1) {
      const resultsObject = arr[0][i];

      items[i][0].textContent = resultsObject[3];
      items[i][1].textContent = resultsObject[0];
      items[i][3].textContent = resultsObject[1];
      items[i][4].classList.add('material-icons', 'play');
      items[i][4].textContent = 'play_arrow';

      let seconds = resultsObject[2] % 60;
      let minutes = (resultsObject[2] - seconds) / 60;

      if (minutes < 0) {
        minutes = 0;
      }

      if (seconds < 10) {
        if (minutes < 10) {
          items[i][2].textContent = `0${minutes}:0${seconds}`;
        } else {
          items[i][2].textContent = `${minutes}:0${seconds}`;
        }
      } else if (seconds >= 10) {
        if (minutes < 10) {
          items[i][2].textContent = `0${minutes}:${seconds}`;
        } else {
          items[i][2].textContent = `${minutes}:${seconds}`;
        }
      }

      saveTable.append(items[i][0], items[i][1], items[i][2], items[i][3], items[i][4]);
    }
  }

  saveGameWindow.appendChild(saveHeader);
  saveGameWindow.appendChild(saveTable);
  saveGameWindow.appendChild(back);

  document.querySelector('.game__field').appendChild(saveGameWindow);

  addEvent(check, arr);
}

back.addEventListener('click', () => {
  saveGameWindow.style.display = 'none';
  showMenu();
});
