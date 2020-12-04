export function createTitle() {
  const title = document.createElement('h1');
  title.textContent = 'English for kids';
  title.classList.add('text-center', 'd-none', 'd-sm-block');
  return title;
}
