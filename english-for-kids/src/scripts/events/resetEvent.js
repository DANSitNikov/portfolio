import { resetAllStatistic } from '../statistic/resetStatistic';

export function reset() {
  const resetBtn = document.querySelector('.reset-statistic-btn');

  resetBtn.addEventListener('click', () => {
    resetAllStatistic();
  });
}
