export function createHeaderStatistic() {
  const statisticListItems = [
    'Action', 'Animals', 'Clothes',
    'Emotions', 'Food', 'Adjective'
  ];
  const statisticHeader = document.createElement('div');
  statisticHeader.classList.add('statistic-header');

  const slider = document.createElement('div');
  const sliderWrapper = document.createElement('div');
  const sliderWrapperContent = document.createElement('div');
  const prevBtn = document.createElement('span');
  const nextBtn = document.createElement('span');

  slider.classList.add('slider-container');
  sliderWrapper.classList.add('slider-wrapper');
  sliderWrapperContent.classList.add('slider-wrapper_content');
  prevBtn.classList.add('prev-btn');
  nextBtn.classList.add('next-btn');
  prevBtn.innerHTML = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
    </svg>
  `;
  nextBtn.innerHTML = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
    </svg>
  `;

  for (let i = 0; i < statisticListItems.length; i += 1) {
    const sliderItem = document.createElement('div');
    const sliderItemText = document.createElement('p');
    sliderItem.classList.add('slider-item');
    sliderItemText.classList.add('slider-item_text');
    sliderItemText.textContent = statisticListItems[i];
    sliderItem.appendChild(sliderItemText);
    sliderWrapperContent.appendChild(sliderItem);
  }

  sliderWrapper.appendChild(sliderWrapperContent);
  slider.append(prevBtn, sliderWrapper, nextBtn);

  const buttonsBlock = document.createElement('div');
  const repeatWords = document.createElement('button');
  const resetStatistic = document.createElement('button');
  buttonsBlock.classList.add('buttons-block');
  repeatWords.classList.add('btn', 'btn-success', 'repeat-statistic');
  resetStatistic.classList.add('btn', 'btn-danger', 'reset-statistic-btn');
  repeatWords.textContent = 'Repeat difficult words from this topic';
  resetStatistic.textContent = 'Reset statistic';
  repeatWords.setAttribute('title', 'less then 25%');

  buttonsBlock.append(repeatWords, resetStatistic);

  statisticHeader.append(slider, buttonsBlock);
  return statisticHeader;
}
