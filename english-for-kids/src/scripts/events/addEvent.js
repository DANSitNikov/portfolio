export function addEvent(item) {
  const itemFirst = item;
  const itemSecond = item + 1;
  const front = document.querySelectorAll('.card-change');

  front.forEach((el, i) => {
    const elemId = el.id;

    el.addEventListener('click', (e) => {
      if (i >= 8) {
        item = itemSecond;
      } else {
        item = itemFirst;
      }
      const getStatistic = JSON.parse(localStorage.getItem('statistic'));
      for (let i = 0; i < getStatistic.length; i += 1) {
        for (let j = 0; j < getStatistic[i].length; j += 1) {
          if (getStatistic[i][j].word === el.textContent.trim().split(' ')[0].slice(0, -1)) {
            getStatistic[i][j].trained += 1;
          }
        }
      }
      localStorage.setItem('statistic', JSON.stringify(getStatistic));

      if (e.target && (e.target.classList.contains('rotate-on') || e.target.classList.contains('turn-block'))) {
        document.querySelector(`#${elemId} .front`).style.transform = 'rotateY(180deg)';
        document.querySelector(`#${elemId} .back`).style.transform = 'rotateY(360deg)';
      } else if (e.target && (e.target.classList.contains('sound-on') || e.target.classList.contains('sound-block'))) {
        let audio = new Audio();
        audio.src = `../src/assets/audio/${el.textContent.trim().split(' ')[0].slice(0, -1)}.mp3`;
        audio.autoplay = true;
      }
    });
    el.addEventListener('mouseleave', (e) => {
      document.querySelector(`#${elemId} .front`).style.transform = 'rotateY(0)';
      document.querySelector(`#${elemId} .back`).style.transform = 'rotateY(180deg)';
    });
  });
}
