import favico from '../../src/assets/favico/favicon-32x32.png';

export function makeFavicon() {
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');

  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = `${favico}`;
  document.getElementsByTagName('head')[0].appendChild(link);
}
