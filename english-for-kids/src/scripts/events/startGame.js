import { clickCards } from './clickCard';
import { startListening } from './startListening';
import cards from '../../assets/cards';
import { item } from '../route/route';

export function addOrRemoveGameMode() {
  const allCards = document.querySelectorAll('.card-change');
  const arr = [];
  for (let i = 0; i < allCards.length; i += 1) {
    arr.push(i);
  }

  let randomNumbers = arr.sort(() => Math.random() - 0.5);
  localStorage.setItem('randomAudio', JSON.stringify(randomNumbers));
  localStorage.setItem('startListening', '0');
  clickCards();
  setTimeout(() => {
    startListening();
  }, 1000);
}

function repeatAudio() {
  const array = JSON.parse(localStorage.getItem('randomAudio'));
  const number = JSON.parse(localStorage.getItem('startListening')) - 1;

  let audio = new Audio();
  if (localStorage.getItem('repeatWords')) {
    audio.src = `../src/assets/${cards[JSON.parse(localStorage.getItem('activeSlide')) * 2 + 1][JSON.parse(localStorage.getItem('wordForRepeat'))[+number]].audioSrc}`;
  } else {
    audio.src = `../src/assets/${cards[item][array[+number]].audioSrc}`;
  }
  audio.autoplay = true;
}

export function startGame() {
  const start = document.querySelector('.start-game');
  start.addEventListener('click', () => {
    addOrRemoveGameMode();

    const repeat = document.createElement('button');
    repeat.classList.add('btn', 'btn-info', 'repeat');
    repeat.setAttribute('disabled', 'true');
    repeat.innerHTML = `
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
      </svg>
    `;
    document.querySelector('.card-container').appendChild(repeat);
    document.querySelector('.card-container').removeChild(start);

    repeat.removeAttribute('disabled');
    repeat.addEventListener('click', () => repeatAudio());
  });
}
