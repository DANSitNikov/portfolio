import { showMenu } from './menu';

const bestScore = document.createElement('div');
const bestScoreHeader = document.createElement('h3');
const scoresTable = document.createElement('div');
const back = document.createElement('i');
const data = document.createElement('p');
const moves = document.createElement('p');
const size = document.createElement('p');
const time = document.createElement('p');

data.textContent = 'Data';
moves.textContent = 'Moves';
size.textContent = 'Size';
time.textContent = 'Time';

bestScore.classList.add('best__score');
bestScoreHeader.textContent = 'Best scores';
scoresTable.classList.add('score__table');

let items = [[], [], [], [], [], [], [], [], [], []];

for (let i = 0; i < items.length; i += 1) {
  let newDate = document.createElement('p');
  let newMoves = document.createElement('p');
  let newSize = document.createElement('p');
  let newTime = document.createElement('p');

  items[i].push(newDate, newMoves, newSize, newTime);
}

export function showBestScore() {
  bestScore.style.display = 'block';
  back.classList.add('material-icons', 'back');
  back.textContent = 'reply';

  let arr = [];

  for (let i = 0; i < localStorage.length; i += 1) {
    let loc = JSON.parse(localStorage.getItem('result'));
    arr.push(loc);
  }

  scoresTable.innerHTML = '';

  scoresTable.append(data, moves, size, time);

  if (localStorage.getItem('result')) {
    for (let i = 0; i < arr[0].length; i += 1) {
      const resultsObject = arr[0][i];

      items[i][0].textContent = resultsObject[0];
      items[i][1].textContent = resultsObject[1];
      items[i][2].textContent = resultsObject[2];

      let seconds = resultsObject[3] % 60;
      let minutes = (resultsObject[3] - seconds) / 60;

      if (minutes < 0) {
        minutes = 0;
      }

      if (seconds < 10) {
        if (minutes < 10) {
          items[i][3].textContent = `0${minutes}:0${seconds}`;
        } else {
          items[i][3].textContent = `${minutes}:0${seconds}`;
        }
      } else if (seconds >= 10) {
        if (minutes < 10) {
          items[i][3].textContent = `0${minutes}:${seconds}`;
        } else {
          items[i][3].textContent = `${minutes}:${seconds}`;
        }
      }

      scoresTable.append(items[i][0], items[i][1], items[i][2], items[i][3]);
    }
  }

  bestScore.appendChild(bestScoreHeader);
  bestScore.appendChild(scoresTable);
  bestScore.appendChild(back);

  document.querySelector('.game__field').appendChild(bestScore);
  back.addEventListener('click', () => {
    showMenu();
    bestScore.style.display = 'none';
  });
}

export function addBestScore(date, moves, size, time) {
  let day = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();

  switch (month.toString()) {
    case '0':
      month = 'Jan';
      break;
    case '1':
      month = 'Feb';
      break;
    case '2':
      month = 'Mar';
      break;
    case '3':
      month = 'Apr';
      break;
    case '4':
      month = 'May';
      break;
    case '5':
      month = 'Jun';
      break;
    case '6':
      month = 'Jul';
      break;
    case '7':
      month = 'Aug';
      break;
    case '8':
      month = 'Sept';
      break;
    case '9':
      month = 'Oct';
      break;
    case '10':
      month = 'Nov';
      break;
    case '11':
      month = 'Dec';
      break;
    default:
      break;
  }

  date = `${day} ${month} ${year}`;

  let pastResult = JSON.parse(localStorage.getItem('result'));

  if (!pastResult) {
    pastResult = [];
  }

  localStorage.removeItem('result');

  pastResult.push([date, moves, size, time]);

  let newResult = pastResult.sort((a, b) => {
    return b[b.length - 2] - a[a.length - 2]
      || a[a.length - 1] - b[b.length - 1]
      || a[a.length - 3] - b[b.length - 3];
  });

  if (newResult.length > 10) {
    newResult.pop();
  }

  localStorage.setItem('result', JSON.stringify(newResult));
}
