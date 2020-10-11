document.addEventListener('DOMContentLoaded', (e) => {
   e.preventDefault();

   const content = document.querySelectorAll('.tab__block_content-item'),
         tabs = document.querySelectorAll('.tab__menu-item'),
         parent = document.querySelector('.tab__block');

   function deleteAll() {
      content.forEach( el => {
         el.classList.add('hide',);
         el.classList.remove('show', 'fade');
      });

      tabs.forEach( el => {
         el.classList.remove('tab__item-active');
      });
   }

   function showOneTab( i = 0) {
      content[i].classList.add('show', 'fade');
      content[i].classList.remove('hide');

      tabs[i].classList.add('tab__item-active');
   }

   deleteAll();
   showOneTab();

   parent.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('tab__menu-item')) {
         tabs.forEach( (el, i) => {
            if (e.target == el) {
               deleteAll();
               showOneTab(i);
            }
         })
      }
   })
})