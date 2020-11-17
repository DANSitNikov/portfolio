//render cards
fetch('../../assets/pets.json')
    .then(response => response.json())
    .then(data => showCards(data));

//menu burger
const menuBurger = document.querySelector('.burger-menu'),
    menu = document.querySelector('.header-nav');

function openOrCloseMenu() {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active-menu');
    document.querySelector('body').classList.toggle('hidden-info');
    document.querySelector('.dark').classList.toggle('dark-back');
    document.querySelector('.header-inside').classList.toggle('dark-head');
}

menuBurger.addEventListener('click', () => {
    openOrCloseMenu();
});

document.querySelector('.dark').addEventListener('click', (e) => {
    openOrCloseMenu();
});

document.querySelector('.active-li').addEventListener('click', () => {
    openOrCloseMenu();
    document.body.scrollTo(0,0);
})

function showCards(data) {
    const pets = document.querySelector('.pets-items'),
        nextPage = document.querySelector('#nextPage'),
        prevPage = document.querySelector('#prevPage'),
        lastPage = document.querySelector('#lastPage'),
        firstPage = document.querySelector('#firstPage'),
        numberPage = document.querySelector('.page-number');

    let allCards = [],
        numOfCards = 3;

    if (document.documentElement.clientWidth >= 1280) {
        numOfCards = 8;
    } else if (document.documentElement.clientWidth >= 768) {
        numOfCards = 6;
    }

    for (let i = 0; i < 6; i++) {
        const arr = data;

        for (let j = numOfCards; j > 0; j--) {
            let randInd = Math.floor(Math.random() * j);
            const randElem = arr.splice(randInd, 1)[0];
                arr.push(randElem);
        }
        allCards = [...allCards, ...arr];
    }

    let currentPage = 1,
        rows = 2;

    if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280) {
        rows = 3;
    } else if (document.documentElement.clientWidth < 768) {
        rows = 3;
    }

    function showSomeCards(items, wrapper, rows_per_page, page) {
        wrapper.innerHTML = '';
        page--;

        let start = rows_per_page * page * 4,
            end = (start + rows_per_page) * 4;

        if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280) {
            start = rows_per_page * page * 2;
            end = (start + rows_per_page) + 3;
        } else if (document.documentElement.clientWidth < 768) {
            start = rows_per_page * page;
            end = start + rows_per_page;
        } else {
            if (page !== 0) {
                end = end - (24*page);
            }
        }

        let paginationItems = items.slice(start, end);

        for (let i = 0; i < paginationItems.length; i++) {
            let item = paginationItems[i],
                item_el = document.createElement('div');

            item_el.classList.add('pets-item');
            item_el.innerHTML = `
                <img src=${item.img} alt="picture">
                    <p class="pets-item-name">${item.name}</p>
                <button class="pets-item-btn">Learn more</button>
            `;

            wrapper.append(item_el);
        }

        const popupRow = document.querySelector('.popup-row'),
            petsItem = document.querySelectorAll('.pets-item'),
            popup = document.querySelector('.popup'),
            popupClose = document.querySelector('.popup-close');

        function showPopup(item) {
            popup.style.display = 'block';

            popupRow.innerHTML = `            
            <div class="popup-img">
                <img style="border-radius: 9px" src=${item.img}>
            </div>
            <div class="popup-text">
                <h2 class="popup-name">${item.name}</h2>
                <h3 class="popup-type">${item.type} - ${item.breed}</h3>
                <h4 class="popup-description">${item.description}</h4>
                <ul class="popup-list">
                    <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#F1CDB3"/>
</svg><strong>Age:</strong>${item.age}</li>
                    <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#F1CDB3"/>
</svg><strong>Inoculations:</strong>${item.inoculations.join('')}</li>
                    <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#F1CDB3"/>
</svg><strong>Diseases:</strong>${item.diseases.join('')}</li>
                    <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#F1CDB3"/>
</svg><strong>Parasites:</strong>${item.parasites.join('')}</li>
                </ul>
            </div>
        `;

            return popupRow;
        }

        function closePopup() {
            popup.style.display = 'none';
            popupRow.innerHTML = '';
            return popupRow;
        }

        petsItem.forEach(el => {
            for (let i = 0; i < data.length; i++) {
                if (el.textContent.includes(data[i].name)) {
                    let item = data[i];

                    el.addEventListener('click', () => {
                        showPopup(item);
                        document.body.classList.add('hidden-info');
                    });
                    break;
                }
            }
        });

        popupClose.addEventListener('click', () => {
            closePopup();
            document.body.classList.remove('hidden-info');
        });

        popup.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('popup')) {
                if (e.target) {
                    closePopup();
                    document.body.classList.remove('hidden-info');
                }
            }
        });

        popup.addEventListener('mouseover', (e) => {
            if (e.target && e.target.classList.contains('popup')) {
                popupClose.style.background = '#FDDCC4';
            }
        });

        popup.addEventListener('mouseout', (e) => {
            if (e.target && e.target.classList.contains('popup')) {
                popupClose.style.background = 'none';
            }
        });
    }

    function inactiveSomeElements(one, two, three, four) {
        one.classList.add('inactive');
        two.classList.add('inactive');
        three.classList.remove('inactive');
        four.classList.remove('inactive');
    }

    function activeAllElements(one, two, three, four) {
        one.classList.remove('inactive');
        two.classList.remove('inactive');
        three.classList.remove('inactive');
        four.classList.remove('inactive');
    }

    function changeNumPage() {
        numberPage.textContent = `${currentPage}`;
    }

    nextPage.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280) {
            if (currentPage > 7) {
                currentPage = 8;
                changeNumPage();
                inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
            } else {
                currentPage++;
                changeNumPage();
                activeAllElements(prevPage, firstPage, lastPage, nextPage);
                showSomeCards(allCards, pets, rows, currentPage);
                document.body.scrollTo(0,0);
                if (currentPage === 8) {
                    inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
                }
            }
        } else if (document.documentElement.clientWidth < 768) {
            if (currentPage > 15) {
                currentPage = 16;
                changeNumPage();
                inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
            } else {
                currentPage++;
                changeNumPage();
                activeAllElements(prevPage, firstPage, lastPage, nextPage);
                showSomeCards(allCards, pets, rows, currentPage);
                document.body.scrollTo(0,0);
                if (currentPage === 16) {
                    inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
                }
            }
        } else {
            if (currentPage > 5) {
                currentPage = 6;
                changeNumPage();
                inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
            } else {
                currentPage++;
                changeNumPage();
                activeAllElements(prevPage, firstPage, lastPage, nextPage);
                showSomeCards(allCards, pets, rows, currentPage);
                document.body.scrollTo(0,0);
                if (currentPage === 6) {
                    inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
                }
            }
        }
    });

    prevPage.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage <= 1) {
            currentPage = 1;
            changeNumPage();
            inactiveSomeElements(prevPage, firstPage, lastPage, nextPage)
        } else {
            currentPage--;
            changeNumPage();
            activeAllElements(prevPage, firstPage, lastPage, nextPage);
            showSomeCards(allCards, pets, rows, currentPage);
            document.body.scrollTo(0,0);
            if (currentPage === 1) {
                inactiveSomeElements(prevPage, firstPage, lastPage, nextPage);
            }
        }
    });

    lastPage.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280) {
            if (currentPage === 8) {
                return;
            } else {
                currentPage = 8;
                changeNumPage();
                inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
                showSomeCards(allCards, pets, rows, currentPage);
                document.body.scrollTo(0,0);
            }
        } else if (document.documentElement.clientWidth < 768) {
            if (currentPage === 16) {
                return;
            } else {
                currentPage = 16;
                changeNumPage();
                inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
                showSomeCards(allCards, pets, rows, currentPage);
                document.body.scrollTo(0,0);
            }
        } else {
            if (currentPage === 6) {
                return;
            } else {
                currentPage = 6;
                changeNumPage();
                inactiveSomeElements(lastPage, nextPage, prevPage, firstPage);
                showSomeCards(allCards, pets, rows, currentPage);
                document.body.scrollTo(0,0);
            }
        }
    });

    firstPage.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage === 1) {
            return;
        } else {
            currentPage = 1;
            changeNumPage();
            inactiveSomeElements(prevPage, firstPage, lastPage, nextPage)
            showSomeCards(allCards, pets, rows, currentPage);
            document.body.scrollTo(0,0);
        }
    });

    showSomeCards(allCards, pets, rows, currentPage);
}

const headerLinks = document.querySelectorAll('.header-link');

headerLinks[2].addEventListener('mouseover', () => {
    headerLinks[2].style.cursor = 'auto';
    headerLinks[2].style.color = '#545454';
    headerLinks[2].style.userSelect = 'none';
})

headerLinks[3].addEventListener('mouseover', () => {
    headerLinks[3].style.cursor = 'auto';
    headerLinks[3].style.color = '#545454';
    headerLinks[3].style.userSelect = 'none';
})