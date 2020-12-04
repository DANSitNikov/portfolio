export function statisticBody(item = 0, sorter = true, parameter = 'word ') {
  let statisticLibrary = JSON.parse(localStorage.getItem('statistic'));
  const parentBlock = document.querySelector('#content');
  const tableHeader = [
    'word', 'translation', 'trained',
    'correct', 'incorrect', '%'
  ];

  const table = document.createElement('div');
  table.classList.add('table-container');

  function sortObj(arr) {
    parameter = parameter.slice(0, -1);
    if (JSON.parse(localStorage.getItem('active-sort')) && JSON.parse(localStorage.getItem('active-sort'))[0] === 1) {
      if (parameter === 'correct' || parameter === 'incorrect' || parameter === 'trained' || parameter === '%') {
        arr.sort((a, b) => b[parameter] > a[parameter] ? 1 : -1);
      } else {
        arr.sort((a, b) => b[parameter] < a[parameter] ? 1 : -1);
      }
    } else {
      if (parameter === 'correct' || parameter === 'incorrect' || parameter === 'trained' || parameter === '%') {
        arr.sort((a, b) => b[parameter] < a[parameter] ? 1 : -1);
      } else {
        arr.sort((a, b) => b[parameter] > a[parameter] ? 1 : -1);
      }
    }

    return arr;
  }

  if (sorter) {
    table.innerHTML = '';
    statisticLibrary[item] = sortObj(statisticLibrary[item]);
  }

  for (let i = 0; i < 6; i += 1) {
    const tableHeaderItem = document.createElement('h4');
    const sortUp = document.createElement('span');
    const sortDown = document.createElement('span');
    sortDown.classList.add('sort-down');
    sortUp.classList.add('sort-up');
    sortUp.innerHTML = `
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
      </svg>
    `;
    sortDown.innerHTML = `
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
      </svg>
    `;
    tableHeaderItem.classList.add('table-header', 'table-item');
    tableHeaderItem.textContent = tableHeader[i];
    tableHeaderItem.append(sortUp, sortDown);

    if (!JSON.parse(localStorage.getItem('active-sort'))) {
      localStorage.setItem('active-sort', JSON.stringify([2, 'word']));
    }

    if (JSON.parse(localStorage.getItem('active-sort')) && JSON.parse(localStorage.getItem('active-sort'))[0] === 1) {
      if (JSON.parse(localStorage.getItem('active-sort'))[1] === tableHeaderItem.textContent.split(' ')[0].trim()) {
        tableHeaderItem.children[0].classList.add('active-up');
      }
    } else if (JSON.parse(localStorage.getItem('active-sort')) && JSON.parse(localStorage.getItem('active-sort'))[0] === 2) {
      if (JSON.parse(localStorage.getItem('active-sort'))[1] === tableHeaderItem.textContent.split(' ')[0].trim()) {
        tableHeaderItem.children[1].classList.add('active-down');
      }
    }

    tableHeaderItem.addEventListener('click', () => {
      if (JSON.parse(localStorage.getItem('active-sort')) && JSON.parse(localStorage.getItem('active-sort'))[0] === 1) {
        localStorage.setItem('active-sort', JSON.stringify([2, tableHeaderItem.textContent.split(' ')[0].trim()]));
      } else {
        localStorage.setItem('active-sort', JSON.stringify([1, tableHeaderItem.textContent.split(' ')[0].trim()]));
      }
      document.querySelector('#content').lastChild.remove();
      statisticBody(item, true, tableHeaderItem.textContent.split(' ')[0]);
    });

    table.appendChild(tableHeaderItem);
  }

  for (let i = 0; i < 16; i += 1) {
    let j = 0;
    for (let key in statisticLibrary[item][i]) {
      const tableWord = document.createElement('h5');
      tableWord.classList.add('table-item', 'table-word', `table-item_${j}`);
      tableWord.textContent = statisticLibrary[item][i][key];
      table.appendChild(tableWord);
      j += 1;
    }
  }

  parentBlock.appendChild(table);
}
