import { playMode, playModeActive } from '../modes/play';
import { learnMode } from '../modes/learn';

export function toggleMode(toggle, learn, play) {
  learn.style.transform = 'scale(2.3)';
  play.style.transform = 'scale(1.5)';
  learn.style.color = 'yellow';
  play.style.color = 'black';
  localStorage.removeItem('oneGame');

  toggle.addEventListener('click', (e) => {
    if (e.target.checked) {
      playMode();
      playModeActive(learn, play);
    } else {
      learnMode(learn, play);
    }
    localStorage.removeItem('oneGame');
    toggle.setAttribute('disabled', 'true');
    setTimeout(() => {
      toggle.removeAttribute('disabled');
    }, 500);
  });
}
