import { createTitle } from './header-title';
import { createMenu } from './header-menu';
import { createToggle } from './header-toggle';
import { menuContent } from './menu-content';
import { spyBlock } from './block-spy';
import { breakMenu } from './breakMenu';

export function createHeader() {
  const header = document.createElement('div');
  const headerWrap = document.createElement('div');
  header.classList.add('header');
  headerWrap.classList.add('header-wrapper');

  document.querySelector('body').appendChild(menuContent());
  document.querySelector('body').appendChild(spyBlock());
  document.querySelector('body').appendChild(breakMenu());
  header.appendChild(createMenu());
  header.appendChild(createTitle());
  header.appendChild(createToggle());

  headerWrap.appendChild(header);

  return headerWrap;
}
