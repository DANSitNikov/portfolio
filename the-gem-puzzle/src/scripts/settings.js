import { showMenu } from './menu';
import { level } from './chooseLvl';
import { changeSoundOnOff } from './audio';

const settings = document.createElement('div');
const settingsHeader = document.createElement('h3');
const fieldSizeBlock = document.createElement('div');
const fieldSize = document.createElement('p');
const soundBlock = document.createElement('div');
const sound = document.createElement('p');
const soundOnOff = document.createElement('i');
const back = document.createElement('i');

let soundIcon = 0;

if (!localStorage.getItem('sound')) {
  localStorage.setItem('sound', JSON.stringify(soundIcon));
  changeSoundOnOff(false);
} else {
  soundIcon = JSON.parse(localStorage.getItem('sound'));
  if (soundIcon === 0) {
    changeSoundOnOff(false);
  } else {
    changeSoundOnOff(true);
  }
}

soundOnOff.addEventListener('click', () => {
  if (localStorage.getItem('sound') === '0') {
    soundOnOff.textContent = 'volume_up';
    changeSoundOnOff(true);
    soundIcon = 1;
  } else {
    soundOnOff.textContent = 'volume_off';
    changeSoundOnOff(false);
    soundIcon = 0;
  }
  localStorage.setItem('sound', JSON.stringify(soundIcon));
});

settings.classList.add('settings');

settingsHeader.textContent = 'Settings';

fieldSizeBlock.classList.add('field__size');
fieldSize.textContent = 'Field size: ';

soundBlock.classList.add('sound');
sound.textContent = 'Sound: ';
soundOnOff.classList.add('material-icons');

export function showSettings() {
  settings.style.display = 'block';

  if (soundIcon === 0) {
    soundOnOff.textContent = 'volume_off';
  } else {
    soundOnOff.textContent = 'volume_up';
  }

  back.classList.add('material-icons', 'back');
  back.textContent = 'reply';

  fieldSizeBlock.appendChild(fieldSize);
  level(fieldSizeBlock);

  soundBlock.appendChild(sound);
  soundBlock.appendChild(soundOnOff);

  settings.appendChild(settingsHeader);
  settings.appendChild(fieldSizeBlock);
  settings.appendChild(soundBlock);
  settings.appendChild(back);

  document.querySelector('.game__field').appendChild(settings);
  back.addEventListener('click', () => {
    showMenu();
    settings.style.display = 'none';
  });
}
