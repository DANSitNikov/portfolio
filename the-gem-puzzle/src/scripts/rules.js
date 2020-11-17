import { showMenu } from './menu';

const rules = document.createElement('div');
const rulesHeader = document.createElement('h3');
const rulesSliderContainer = document.createElement('div');
const rulesSlider = document.createElement('div');
const slideOne = document.createElement('div');
const slideTwo = document.createElement('div');
const slideThree = document.createElement('div');
const back = document.createElement('i');
const next = document.createElement('i');
const prev = document.createElement('i');

export function showRules() {
  rules.classList.add('rules');
  rules.style.display = 'block';

  rulesHeader.textContent = 'Rules of Gem Puzzle';
  rulesSliderContainer.classList.add('rules__slider-container');
  rulesSlider.classList.add('rules__slider');

  slideOne.innerHTML = `<p>1) If time will 59:00 you will lose the game!</p> <br>
                        <p>2) You can change sound and level in the settings, and it will be saved!</p> <br>
                        <p>3) If you don't want to end your game right now or you have no time, you can save it and continue next time!</p>`;

  slideTwo.innerHTML = `<p>4) You can see your best games on 'Best score' page!</p> <br>
                        <p>5) The higher level of the game will be always more valuable then less level!</p>`;

  slideThree.innerHTML = `<p>And the last, if you find any problem in my app, please text me about it, I really appreciate that. Thank you!</p>`;

  back.classList.add('material-icons', 'back');
  back.textContent = 'reply';
  next.classList.add('material-icons', 'next');
  next.textContent = 'skip_next';
  prev.classList.add('material-icons', 'prev');
  prev.textContent = 'skip_previous';

  rulesSlider.append(slideOne, slideTwo, slideThree);
  rulesSliderContainer.appendChild(rulesSlider);
  rules.appendChild(rulesHeader);
  rules.appendChild(back);
  rules.appendChild(rulesSliderContainer);
  rules.appendChild(prev);
  rules.appendChild(next);

  document.querySelector('.game__field').appendChild(rules);
  back.addEventListener('click', () => {
    showMenu();
    rules.style.display = 'none';
  });
}

let counter = 0;
let size = -400;

next.addEventListener('click', () => {
  if (counter > 1) {
    counter = 2;
    rulesSlider.style.transform = 'translate(' + (-800) + 'px)';
  } else {
    rulesSlider.style.transition = 'transform 0.4s ease-in-out';
    counter += 1;
    rulesSlider.style.transform = 'translate(' + (size * counter) + 'px)';
    prev.classList.remove('inactive');
  }
  if (counter === 2) {
    next.classList.add('inactive');
  }
});

prev.addEventListener('click', () => {
  if (counter <= 0) {
    counter = 0;
    rulesSlider.style.transform = 'translate(' + 0 + 'px)';
  } else {
    rulesSlider.style.transition = 'transform 0.4s ease-in-out';
    counter -= 1;
    rulesSlider.style.transform = 'translate(' + (size * counter) + 'px)';
    next.classList.remove('inactive');
  }
  if (counter === 0) {
    prev.classList.add('inactive');
  }
});
