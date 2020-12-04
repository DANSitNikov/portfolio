export function createMenu() {
  const burgerMenu = document.createElement('button');
  const btnTop = document.createElement('span');
  const btnMiddle = document.createElement('span');
  const btnBottom = document.createElement('span');

  burgerMenu.classList.add('buttonBurger');
  btnTop.classList.add('buttonBurger__top');
  btnMiddle.classList.add('buttonBurger__middle');
  btnBottom.classList.add('buttonBurger__bottom');
  burgerMenu.append(btnTop, btnMiddle, btnBottom);

  burgerMenu.addEventListener('click', () => {
    btnTop.classList.toggle('buttonBurger__top--active');
    btnMiddle.classList.toggle('buttonBurger__middle--active');
    btnBottom.classList.toggle('buttonBurger__bottom--active');
    document.querySelector('.break-menu').classList.toggle('active-menu');
    document.querySelector('nav').classList.toggle('active-menu');
    document.querySelector('.spy').classList.toggle('spy-active');
    document.querySelector('body').classList.toggle('overflow-body');
  });

  return burgerMenu;
}
