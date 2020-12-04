export function spyBlock() {
  const spyBlock = document.createElement('div');
  spyBlock.classList.add('spy');

  spyBlock.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('spy')) {
      document.querySelector('.buttonBurger__top').classList.toggle('buttonBurger__top--active');
      document.querySelector('.buttonBurger__middle').classList.toggle('buttonBurger__middle--active');
      document.querySelector('.buttonBurger__bottom').classList.toggle('buttonBurger__bottom--active');
      document.querySelector('nav').classList.toggle('active-menu');
      document.querySelector('.break-menu').classList.toggle('active-menu');
      document.querySelector('.spy').classList.toggle('spy-active');
      document.querySelector('body').classList.toggle('overflow-body');
    }
  });

  return spyBlock;
}
