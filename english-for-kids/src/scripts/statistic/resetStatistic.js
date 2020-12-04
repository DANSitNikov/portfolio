import { takeStatistic } from './statisticLibrary';
import { activePage } from '../header/active-page';
import { createHeaderStatistic } from './statistic';
import { createSlider } from './slider';

export function resetAllStatistic() {
  const resetWrapper = document.createElement('div');
  const resetBlock = document.createElement('div');
  const areYouSure = document.createElement('h3');
  const yes = document.createElement('button');
  const no = document.createElement('button');
  resetWrapper.classList.add('reset-wrapper');
  resetBlock.classList.add('reset-buttons');
  yes.classList.add('yes', 'btn', 'btn-warning');
  no.classList.add('no', 'btn', 'btn-primary');
  areYouSure.classList.add('are-you-sure');

  areYouSure.textContent = 'Are you sure?';
  yes.textContent = 'yes';
  no.textContent = 'no';

  resetBlock.append(areYouSure,yes, no);
  resetWrapper.appendChild(resetBlock);

  no.addEventListener('click', () => {
    document.querySelector('body').removeChild(resetWrapper);
    document.querySelector('body').style.overflowX = 'hidden';
    document.querySelector('body').style.overflowY = 'auto';
  });

  yes.addEventListener('click', () => {
    localStorage.removeItem('statistic');
    takeStatistic();
    document.querySelector('body').removeChild(resetWrapper);
    document.querySelector('body').style.overflowX = 'hidden';
    document.querySelector('body').style.overflowY = 'auto';
    let slot = document.querySelector('#content');
    activePage(13);
    slot.innerHTML = createHeaderStatistic().outerHTML;
    createSlider();
  });

  document.querySelector('body').appendChild(resetWrapper);
  document.querySelector('body').style.overflow = 'hidden';
}
