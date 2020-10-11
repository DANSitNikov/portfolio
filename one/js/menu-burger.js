document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const menuBtn = document.querySelector('.menu-btn'),
          menu = document.querySelector('.header__menu-burger')

    menu.classList.add('hide');

    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();

        menuBtn.classList.toggle('menu-btn_active');

        if (menuBtn.classList.contains('menu-btn_active')) {
            menu.classList.add('show-menu');
            document.documentElement.style.overflowY = 'hidden';
        } else {
            menu.classList.remove('show-menu');
            document.documentElement.style.overflowY = 'auto';
        }
    })
})