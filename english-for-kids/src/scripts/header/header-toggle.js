import { toggleMode } from '../events/toggleMode';

export function createToggle() {
  const toggle = document.createElement('div');
  const learn = document.createElement('p');
  const play = document.createElement('p');
  const switchBtn = document.createElement('div');
  const switchLabel = document.createElement('label');
  const switchCheckbox = document.createElement('input');
  const switchSlider = document.createElement('span');

  learn.textContent = 'Learn';
  play.textContent = 'Play';

  toggle.classList.add('toggle-mode');
  learn.classList.add('mode-learn');
  play.classList.add('mode-play');
  switchBtn.classList.add('switch-btn');
  switchLabel.classList.add('switch-label');
  switchCheckbox.classList.add('switch-checkbox');
  switchCheckbox.setAttribute('type', 'checkbox');
  switchSlider.classList.add('switch-slider', 'round');

  switchBtn.setAttribute('title', 'toggle is not active in statistic!');

  switchLabel.append(switchCheckbox, switchSlider);
  switchBtn.appendChild(switchLabel);
  toggle.append(learn, switchBtn, play);

  toggleMode(switchCheckbox, learn, play);

  return toggle;
}
