export function menuContent() {
  const menu = document.createElement('nav');
  const menuList = document.createElement('ul');
  const menuListItems = [
    'Main page', 'Action (set A)', 'Action (set B)',
    'Animals (set A)', 'Animals (set A)', 'Clothes (set A)',
    'Clothes (set B)', 'Emotions (set A)', 'Emotions (set B)',
    'Food (set A)', 'Food (set B)', 'Adjective (set A)',
    'Adjective (set B)', 'Statistic'
  ];

  for (let i = 0; i < menuListItems.length; i += 1) {
    const item = document.createElement('li');
    const itemHref = document.createElement('a');
    itemHref.classList.add('page');
    itemHref.href = `#page${i}`;
    itemHref.textContent = `${menuListItems[i]}`;

    itemHref.addEventListener('click', () => {
      console.log('click menu !');
      document.querySelector('.buttonBurger__top').classList.toggle('buttonBurger__top--active');
      document.querySelector('.buttonBurger__middle').classList.toggle('buttonBurger__middle--active');
      document.querySelector('.buttonBurger__bottom').classList.toggle('buttonBurger__bottom--active');
      document.querySelector('.break-menu').classList.toggle('active-menu');
      document.querySelector('nav').classList.toggle('active-menu');
      document.querySelector('.spy').classList.toggle('spy-active');
      document.querySelector('body').classList.toggle('overflow-body');
    });

    item.appendChild(itemHref);

    menuList.appendChild(item);
  }

  menu.appendChild(menuList);

  return menu;
}
