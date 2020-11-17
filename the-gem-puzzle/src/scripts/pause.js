import { showMenu } from './menu';
import { endGame, finallyEndTime, setTime } from './timeAndSteps';

const pauseGame = document.createElement('div');
const continueBtn = document.createElement('button');
const endBtn = document.createElement('button');
const saveOrNotBlock = document.createElement('div');
const save = document.createElement('button');
const dontSave = document.createElement('button');

pauseGame.classList.add('pause__window');
continueBtn.classList.add('continue');
saveOrNotBlock.classList.add('save-or-not');
save.classList.add('save');
dontSave.classList.add('do-not-save');
continueBtn.textContent = 'continue';
endBtn.classList.add('end');
endBtn.textContent = 'end';

export function pauseWinsow() {
  pauseGame.style.display = 'flex';

  pauseGame.appendChild(continueBtn);
  pauseGame.appendChild(endBtn);

  document.querySelector('.game__field').prepend(pauseGame);
}

function saveOrNot() {
  save.textContent = 'save';
  dontSave.textContent = 'don\'t save';

  saveOrNotBlock.appendChild(save);
  saveOrNotBlock.appendChild(dontSave);
  pauseGame.appendChild(saveOrNotBlock);
}

function setDate() {
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

  const date = `${day} ${month} ${year}`;

  return date;
}

endBtn.addEventListener('click', () => {
  finallyEndTime();
  endGame();
  saveOrNot();
  saveOrNotBlock.style.display = 'flex';
});

continueBtn.addEventListener('click', () => {
  pauseGame.style.display = 'none';
  setTime();
});

save.addEventListener('click', () => {
  let needToSaveGame = JSON.parse(localStorage.getItem('beforeSave'));
  let needToSaveData = JSON.parse(localStorage.getItem('gameData'));
  let needTOSavePicture = JSON.parse(localStorage.getItem('imageBefore'));
  let pastSaved = JSON.parse(localStorage.getItem('saveGame'));
  let pastData = JSON.parse(localStorage.getItem('newGameData'));
  let pastImages = JSON.parse(localStorage.getItem('newImages'));
  const date = setDate();

  if (!pastSaved) {
    pastSaved = [];
  }

  if (!pastData) {
    pastData = [];
  }

  if (!pastImages) {
    pastImages = [];
  }

  needToSaveData.push(date);
  pastSaved.push(needToSaveGame);
  pastData.push(needToSaveData);
  pastImages.push(needTOSavePicture);

  if (pastData.length > 8) {
    pastData.shift();
  }

  if (pastSaved.length > 8) {
    pastSaved.shift();
  }

  if (pastImages.length > 8) {
    pastImages.shift();
  }

  localStorage.setItem('saveGame', JSON.stringify(pastSaved));
  localStorage.setItem('newGameData', JSON.stringify(pastData));
  localStorage.setItem('newImages', JSON.stringify(pastImages));
  pauseGame.style.display = 'none';
  saveOrNotBlock.style.display = 'none';
  showMenu();
});

dontSave.addEventListener('click', () => {
  showMenu();
  pauseGame.style.display = 'none';
  saveOrNotBlock.style.display = 'none';
});
