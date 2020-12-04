import cards from '../../assets/cards';

export function renderPage(item, itemTwo, wordsForRepeat) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  if (item === 0) {
    if (localStorage.getItem('mode') === 'learn') {
      for (let i = 0; i < cards[item].length; i += 1) {
        const cardChange = document.createElement('a');
        cardChange.style.display = 'block';
        cardChange.setAttribute('href', `#item${i + 1}`);
        const card = document.createElement('div');

        cardChange.id = `item${i}`;
        cardChange.classList.add('card-change');
        card.classList.add('card-template', 'card-hover', 'front');

        card.innerHTML = `
          <img src="../src/assets/${cards[item][i].image}" alt="Card image cap">
          <div>
            <h5 style="color: black">${cards[item][i].word}</h5>
          </div>
        `;

        cardChange.append(card);
        cardContainer.appendChild(cardChange);
      }
    } else {
      for (let i = 0; i < cards[item].length; i += 1) {
        const cardChange = document.createElement('a');
        cardChange.style.display = 'block';
        cardChange.setAttribute('href', `#item${i + 1}`);
        const card = document.createElement('div');

        cardChange.id = `item${i}`;
        cardChange.classList.add('card-change');
        card.classList.add('card-template', 'card-hover', 'front');

        card.innerHTML = `
          <img src="../src/assets/${cards[item][i].image}" alt="Card image cap">
          <div>
            <h5 style="color: black">${cards[item][i].word}</h5>
          </div>
        `;

        cardChange.append(card);
        cardContainer.appendChild(cardChange);
      }
    }
  } else {
    if (localStorage.getItem('mode') === 'learn') {
      let num = 0;

      for (let i = 0; i < cards[item].length; i += 1) {
        const cardChange = document.createElement('div');
        const card = document.createElement('div');
        const cardBack = document.createElement('div');
        const sound = `
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-volume-up-fill sound sound-on" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path class="sound-on" d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
            <path class="sound-on" d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
            <path class="sound-on" d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
            <path class="sound-on" fill-rule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
          </svg>
        `;

        const rotateCard = `
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-counterclockwise rotate rotate-on" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path class="rotate-on" fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
            <path class="rotate-on" d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
          </svg>
        `;
        cardChange.id = `item${num}`;
        cardChange.classList.add('card-change');
        card.classList.add('card-template', 'card-hover', 'front');
        cardBack.classList.add('card-template', 'back');

        card.innerHTML = `
          <img src="../src/assets/${cards[item][i].image}" alt="Card image cap">
          <div>
            <h5>${cards[item][i].word}</h5>
            <div class="icons">
              <div class="sound-block">
                ${sound}
              </div>
              <div class="turn-block">
                ${rotateCard}
              </div>
            </div>
          </div>
        `;

        cardBack.innerHTML = `
          <img src="../src/assets/${cards[item][i].image}" alt="Card image cap">
          <div>
            <h5 class="card-title">${cards[item][i].translation}</h5>
          </div>
        `;

        cardChange.append(card, cardBack);
        if (wordsForRepeat) {
          for (let j = 0; j < wordsForRepeat.length; j += 1) {
            if (cards[item][i].word === wordsForRepeat[j]) {
              cardContainer.appendChild(cardChange);
              num += 1;
            }
          }
        } else {
          cardContainer.appendChild(cardChange);
          num += 1;
        }
      }

      if (itemTwo) {
        for (let i = 0; i < cards[itemTwo].length; i += 1) {
          const cardChange = document.createElement('div');
          const card = document.createElement('div');
          const cardBack = document.createElement('div');
          const sound = `
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-volume-up-fill sound sound-on" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path class="sound-on" d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
            <path class="sound-on" d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
            <path class="sound-on" d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
            <path class="sound-on" fill-rule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
          </svg>
        `;

          const rotateCard = `
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-counterclockwise rotate rotate-on" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path class="rotate-on" fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
            <path class="rotate-on" d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
          </svg>
        `;
          cardChange.id = `item${num}`;
          console.log(cardChange.id);
          cardChange.classList.add('card-change');
          card.classList.add('card-template', 'card-hover', 'front');
          cardBack.classList.add('card-template', 'back');

          card.innerHTML = `
          <img src="../src/assets/${cards[itemTwo][i].image}" alt="Card image cap">
          <div>
            <h5>${cards[itemTwo][i].word}</h5>
            <div class="icons">
              <div class="sound-block">
                ${sound}
              </div>
              <div class="turn-block">
                ${rotateCard}
              </div>
            </div>
          </div>
        `;

          cardBack.innerHTML = `
          <img src="../src/assets/${cards[itemTwo][i].image}" alt="Card image cap">
          <div>
            <h5 class="card-title">${cards[itemTwo][i].translation}</h5>
          </div>
        `;

          cardChange.append(card, cardBack);
          if (wordsForRepeat) {
            for (let j = 0; j < wordsForRepeat.length; j += 1) {
              if (cards[itemTwo][i].word === wordsForRepeat[j]) {
                cardContainer.appendChild(cardChange);
                num += 1;
              }
            }
          } else {
            cardContainer.appendChild(cardChange);
            num += 1;
          }
        }
      }
    } else {
      const resultOfClick = document.createElement('div');
      resultOfClick.classList.add('click-result');

      cardContainer.appendChild(resultOfClick);

      let num = 0;

      for (let i = 0; i < cards[item].length; i += 1) {
        const cardChange = document.createElement('div');
        const card = document.createElement('div');

        cardChange.id = `item${num}`;
        cardChange.classList.add('card-change');
        card.classList.add('card-template', 'card-hover', 'front');

        card.innerHTML = `
          <img src="../src/assets/${cards[item][i].image}" alt="Card image cap">
          <div style="text-align: center; padding: 15px">
            <div class="check"></div>
          </div>
        `;

        cardChange.append(card);
        if (wordsForRepeat) {
          for (let j = 0; j < wordsForRepeat.length; j += 1) {
            if (cards[item][i].word === wordsForRepeat[j]) {
              cardContainer.appendChild(cardChange);
              num += 1;
            }
          }
        } else {
          cardContainer.appendChild(cardChange);
          num += 1;
        }
      }

      if (itemTwo) {
        for (let i = 0; i < cards[itemTwo].length; i += 1) {
          const cardChange = document.createElement('div');
          const card = document.createElement('div');

          cardChange.id = `item${num}`;
          cardChange.classList.add('card-change');
          card.classList.add('card-template', 'card-hover', 'front');

          card.innerHTML = `
          <img src="../src/assets/${cards[itemTwo][i].image}" alt="Card image cap">
          <div style="text-align: center; padding: 15px">
            <div class="check"></div>
          </div>
        `;

          cardChange.append(card);
          if (wordsForRepeat) {
            for (let j = 0; j < wordsForRepeat.length; j += 1) {
              if (cards[itemTwo][i].word === wordsForRepeat[j]) {
                cardContainer.appendChild(cardChange);
                num += 1;
              }
            }
          } else {
            cardContainer.appendChild(cardChange);
            num += 1;
          }
        }
      }

      const breakLine = document.createElement('div');
      breakLine.classList.add('w-100');

      const start = document.createElement('button');
      start.classList.add('start-game', 'btn', 'btn-warning');
      start.innerHTML = `
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
      `;

      cardContainer.append(breakLine, start);
    }
  }

  return cardContainer;
}
