import { setSteps, victoryGame } from './timeAndSteps';
import { audio } from './audio';
import { youWin } from './happyWindow';

export const arrayOfImages = [];
const allImages = require.context('../assets/images', true, /.*\.jpg$/);
allImages.keys().forEach((key) => {
  arrayOfImages.push(allImages(key));
});

const field = document.createElement('div');

field.classList.add('field');

export function generateField(number = 3, newNumbers, picture, moves) {
  if (localStorage.getItem('level')) {
    number = localStorage.getItem('level');
  }

  field.innerHTML = '';

  const fieldItems = [];
  const empty = {
    left: 0,
    top: 0,
    el: 0
  };

  let sizeFour = 133.33;
  let countOfItems = 9;
  let step = 0;

  if (newNumbers) {
    step = moves;
  }

  switch (number) {
    case '4':
      sizeFour = 100;
      countOfItems = 16;
      break;

    case '5':
      sizeFour = 80;
      countOfItems = 25;
      break;

    case '6':
      sizeFour = 66.66;
      countOfItems = 36;
      break;

    case '7':
      sizeFour = 57.14;
      countOfItems = 49;
      break;

    case '8':
      sizeFour = 50;
      countOfItems = 64;
      break;
    default:
      break;
  }

  if (document.documentElement.clientWidth < 511) {
    sizeFour = sizeFour / 1.3;
  }

  let randomImg = Math.floor(Math.random() * 150);
  if (randomImg === 0) {
    randomImg = 1;
  }

  if (newNumbers) {
    randomImg = picture;
  }

  function createNumbers(number) {
    const numbers = [...Array(countOfItems).keys()]
      .sort(() => Math.random() - 0.5);

    let check = 0;

    if (number % 2 === 1) {
      for (let i = 0; i < numbers.length; i += 1) {
        let a = 0;

        if (numbers[i] !== Math.max(...numbers)) {
          for (let j = i + 1; j < numbers.length; j += 1) {
            if (numbers[i] > numbers[j] && numbers[j] !== Math.max(...numbers)) {
              a += 1;
            }
          }
        }

        check += a;
      }
    } else if (number % 2 === 0) {
      for (let i = 0; i < numbers.length; i += 1) {
        let a = 0;

        if (numbers[i] !== Math.max(...numbers)) {
          for (let j = i + 1; j < numbers.length; j += 1) {
            if (numbers[i] > numbers[j] && numbers[j] !== Math.max(...numbers)) {
              a += 1;
            }
          }
        } else {
          let row = i + 1;
          let plus = Math.ceil(row / number);
          if (plus === 0) plus = 1;
          a += plus;
        }

        check += a;
      }
    }

    if (check % 2 === 0) {
      return numbers;
    } else {
      return createNumbers(number);
    }
  }

  let numbers = createNumbers(number);
  let saveGame = [];

  if (newNumbers) {
    numbers = [];

    for (let j = 0; j < newNumbers.length; j += 1) {
      numbers.push(newNumbers[j].index - 1);
    }
  }

  let element;

  function dragStart(e, i) {
    setTimeout(() => e.target.classList.add('invisible'), 0);
    element = i;
  }

  function dragEnd(e) {
    e.target.classList.remove('invisible');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave(e) {
    e.target.className = 'empty';
  }

  function dragDrop(e) {
    e.target.className = 'empty';

    const fieldItem = fieldItems[element];
    const leftDiff = Math.abs(empty.left - fieldItem.left);
    const topDiff = Math.abs(empty.top - fieldItem.top);

    const emptyBlock = document.querySelector('.empty');

    if (leftDiff + topDiff > 1) {
      return;
    }

    audio();

    fieldItem.el.style.left = `${empty.left * sizeFour}px`;
    fieldItem.el.style.top = `${empty.top * sizeFour}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = fieldItem.left;
    empty.top = fieldItem.top;
    fieldItem.left = emptyLeft;
    fieldItem.top = emptyTop;

    emptyBlock.style.left = `${empty.left * sizeFour}px`;
    emptyBlock.style.top = `${empty.top * sizeFour}px`;

    saveGame[element].left = parseFloat(fieldItem.el.style.left) / sizeFour;
    saveGame[element].top = parseFloat(fieldItem.el.style.top) / sizeFour;
    for (let i = 0; i < saveGame.length; i += 1) {
      if (saveGame[i].index === Math.max(...numbers) + 1) {
        saveGame[i].left = empty.left;
        saveGame[i].top = empty.top;
      }
    }

    localStorage.setItem('beforeSave', JSON.stringify(saveGame));

    let resultOne = [];

    step += 1;
    setSteps(step);

    const gameData = [step, number];
    localStorage.setItem('gameData', JSON.stringify(gameData));

    fieldItems.forEach(elem => {
      if (Number(elem.el.id) === elem.top * number + elem.left + 1) {
        resultOne.push(true);
      }
    });

    if (resultOne.length === number ** 2 - 1) {
      setTimeout(() => {
        generateField();
        youWin(randomImg, step);
        victoryGame(step, number);
      }, 200);
    }
  }

  const moveItem = (index) => {
    const fieldItem = fieldItems[index];
    const leftDiff = Math.abs(empty.left - fieldItem.left);
    const topDiff = Math.abs(empty.top - fieldItem.top);

    const emptyBlock = document.querySelector('.empty');

    if (leftDiff + topDiff > 1) {
      return;
    }

    audio();

    fieldItem.el.style.left = `${empty.left * sizeFour}px`;
    fieldItem.el.style.top = `${empty.top * sizeFour}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = fieldItem.left;
    empty.top = fieldItem.top;
    fieldItem.left = emptyLeft;
    fieldItem.top = emptyTop;

    emptyBlock.style.left = `${empty.left * sizeFour}px`;
    emptyBlock.style.top = `${empty.top * sizeFour}px`;

    saveGame[index].left = parseFloat(fieldItem.el.style.left) / sizeFour;
    saveGame[index].top = parseFloat(fieldItem.el.style.top) / sizeFour;
    for (let i = 0; i < saveGame.length; i += 1) {
      if (saveGame[i].index === Math.max(...numbers) + 1) {
        saveGame[i].left = empty.left;
        saveGame[i].top = empty.top;
      }
    }

    localStorage.setItem('beforeSave', JSON.stringify(saveGame));

    let resultOne = [];

    step += 1;
    setSteps(step);

    const gameData = [step, number];
    localStorage.setItem('gameData', JSON.stringify(gameData));

    fieldItems.forEach(elem => {
      if (Number(elem.el.id) === elem.top * number + elem.left + 1) {
        resultOne.push(true);
      }
    });

    if (resultOne.length === number ** 2 - 1) {
      setTimeout(() => {
        generateField();
        youWin(randomImg, step);
        victoryGame(step, number);
      }, 200);
    }
  };

  for (let i = 0; i < numbers.length; i += 1) {
    let left = i % number;
    let top = (i - left) / number;

    if (newNumbers) {
      left = Math.round(parseFloat(newNumbers[i].left));
      top = Math.round(parseFloat(newNumbers[i].top));
    }

    const leftToImg = numbers[i] % number;
    const topToImg = (numbers[i] - leftToImg) / number;

    if (numbers[i] === Math.max(...numbers)) {
      const emptyBlock = document.createElement('div');
      emptyBlock.classList.add('empty');
      emptyBlock.style.position = 'absolute';
      emptyBlock.style.width = `${sizeFour}px`;
      emptyBlock.style.height = `${sizeFour}px`;

      if (newNumbers) {
        left = Math.round(parseFloat(newNumbers[i].left));
        top = Math.round(parseFloat(newNumbers[i].top));
      }

      emptyBlock.style.left = `${left * sizeFour}px`;
      emptyBlock.style.top = `${top * sizeFour}px`;

      fieldItems.push({ left, top, el: Math.max(...numbers) });
      empty.left = left;
      empty.top = top;

      emptyBlock.addEventListener('dragover', (e) => dragOver(e));
      emptyBlock.addEventListener('dragenter', (e) => dragEnter(e));
      emptyBlock.addEventListener('dragleave', (e) => dragLeave(e));
      emptyBlock.addEventListener('drop', (e) => dragDrop(e, emptyBlock));

      field.appendChild(emptyBlock);

      saveGame.push({ index: numbers[i] + 1, left: empty.left, top: empty.top });
    } else {
      const fieldItem = document.createElement('div');

      fieldItem.classList.add('field__item');
      fieldItem.classList.add(`item__${i}`);
      fieldItem.style.width = `${sizeFour}px`;
      fieldItem.style.height = `${sizeFour}px`;
      fieldItem.id = numbers[i] + 1;

      fieldItem.style.backgroundImage = `url("${arrayOfImages[randomImg].default}")`;
      fieldItem.style.backgroundPositionX = `${-leftToImg * sizeFour}px`;
      fieldItem.style.backgroundPositionY = `${-topToImg * sizeFour}px`;
      fieldItem.style.left = `${left * sizeFour}px`;
      fieldItem.style.top = `${top * sizeFour}px`;

      fieldItem.setAttribute('draggable', 'true');

      if (newNumbers) {
        fieldItem.style.left = newNumbers[i].left * sizeFour + 'px';
        fieldItem.style.top = newNumbers[i].top * sizeFour + 'px';
      }

      fieldItems.push({ left, top, el: fieldItem });

      field.appendChild(fieldItem);

      saveGame.push(
        { index: numbers[i] + 1, left: left, top: top }
      );

      fieldItem.addEventListener('dragstart', (e) => dragStart(e, i));
      fieldItem.addEventListener('dragend', (e) => dragEnd(e));

      fieldItem.addEventListener('click', () => {
        moveItem(i);
      });
    }
  }

  const gameData = [step, number];
  localStorage.setItem('gameData', JSON.stringify(gameData));
  localStorage.setItem('imageBefore', JSON.stringify(randomImg));

  localStorage.setItem('beforeSave', JSON.stringify(saveGame));
  document.querySelector('.game__field').prepend(field);
}
