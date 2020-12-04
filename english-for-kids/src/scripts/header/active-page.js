export function activePage(item) {
  const currentItem = `page${item}`;
  const pages = document.querySelectorAll('.page');

  pages.forEach(el => {
    el.classList.remove('active');
    if (currentItem === el.href.slice(23)) {
      el.classList.add('active');
    }
  });
}
