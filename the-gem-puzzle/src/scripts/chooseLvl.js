import { saveLevel } from './menu';

const select = document.createElement('select');

for (let i = 3; i <= 8; i += 1) {
  const option = document.createElement('option');
  option.id = `option__${i}`;
  option.value = `${i}`;
  option.textContent = `${i}`;
  select.appendChild(option);
}

select.addEventListener('change', () => {
  localStorage.setItem('level', select.value);
  saveLevel(select.value);
});

export function level(settings) {
  select.value = JSON.parse(localStorage.getItem('level'));
  settings.appendChild(select);
}
