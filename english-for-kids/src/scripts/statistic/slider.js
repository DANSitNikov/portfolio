import { statisticBody } from './statisticBody';

export function createSlider() {
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const sliderItem = document.querySelectorAll('.slider-item');
  let page = 0;
  let position = 0;
  let activeSlide = 0;
  localStorage.setItem('activeSlide', JSON.stringify(activeSlide));

  sliderItem[activeSlide].classList.add('active-slider-item');

  nextBtn.addEventListener('click', () => {
    if (position !== -700) {
      sliderItem[activeSlide].classList.remove('active-slider-item');
      activeSlide += 1;
      localStorage.setItem('activeSlide', JSON.stringify(activeSlide));
      sliderItem[activeSlide].classList.add('active-slider-item');
      position -= 140;
      sliderItem.forEach((el, i) => {
        el.style.transitionDuration = '0.6s';
        el.style.transform = `translate(${position}px)`;
      });
      document.querySelector('#content').lastChild.remove();
      localStorage.removeItem('active-sort');
      page += 1;
      statisticBody(page);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (position !== 0) {
      sliderItem[activeSlide].classList.remove('active-slider-item');
      activeSlide -= 1;
      localStorage.setItem('activeSlide', JSON.stringify(activeSlide));
      sliderItem[activeSlide].classList.add('active-slider-item');
      position += 140;
      sliderItem.forEach((el, i) => {
        el.style.transitionDuration = '0.6s';
        el.style.transform = `translate(${position}px)`;
      });
      document.querySelector('#content').lastChild.remove();
      localStorage.removeItem('active-sort');
      page -= 1;
      statisticBody(page);
    }
  });

  statisticBody();
}
