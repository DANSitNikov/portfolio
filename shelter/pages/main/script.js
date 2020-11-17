//render cards
let info = fetch('../../assets/pets.json')
    .then(response => response.json())
    .then(data => showCards(data));

function showCards(data) {
    const slider = document.querySelector('.slider-items');
    let count = 3;
    let arr = [];

    function generateCards(arr) {
        for (let i = 0; i < count; i++) {
            let randomSliders = Math.floor(Math.random() * data.length);
            if (arr.includes(randomSliders)) {
                i--;
            } else {
                arr.push(randomSliders);
            }
        }
        if (arr.length > 3) {
            arr.shift();
            arr.shift();
            arr.shift();
        }
        return arr;
    }

    generateCards(arr);
    let sliderItems = document.querySelectorAll('.slider-item');

    function domAppendCards(arr) {
        slider.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            let el = document.createElement('div');
            el.classList.add('slider-item');
            el.innerHTML = `
                    <img src=${data[arr[i]].img} alt="picture">
                        <p class="slider-item-name">${data[arr[i]].name}</p>
                    <button class="slider-item-btn">Learn more</button>
                `;
            slider.append(el);
        }

        sliderItems = document.querySelectorAll('.slider-item');
    }

    domAppendCards(arr);

    const popupRow = document.querySelector('.popup-row'),
        popup = document.querySelector('.popup'),
        popupClose = document.querySelector('.popup-close');

    function showPopup(item) {
        popup.style.display = 'block';

        popupRow.innerHTML = ` 
            <div class="popup-img">
                <img style="border-radius: 9px" src=${data[item].img}>
            </div>
            <div class="popup-text">
                <h2 class="popup-name">${data[item].name}</h2>
                <h3 class="popup-type">${data[item].type} - ${data[item].breed}</h3>
                <h4 class="popup-description">${data[item].description}</h4>
                <ul class="popup-list">
                    <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#F1CDB3"/>
</svg><strong>Age:</strong>${data[item].age}</li>
                    <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#F1CDB3"/>
</svg><strong>Inoculations:</strong>${data[item].inoculations.join(', ')}</li>
                    <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#F1CDB3"/>
</svg><strong>Diseases:</strong>${data[item].diseases.join(', ')}</li>
                    <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#F1CDB3"/>
</svg><strong>Parasites:</strong>${data[item].parasites.join(', ')}</li>
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

    function openPopup(sliderItems) {
        let copySliderItem = [...sliderItems];

        sliderItems.forEach(el => {
            let item = copySliderItem.indexOf(el);
            el.addEventListener('click', () => {
                showPopup(arr[item]);
                document.body.classList.add('hidden-info');
            });
        });
    }

    openPopup(sliderItems)

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

    const prevBtn = document.querySelector('.left'),
        nextBtn = document.querySelector('.right');

    nextBtn.addEventListener('click', () => {
        generateCards(arr);
        domAppendCards(arr);
        openPopup(sliderItems);
    });

    prevBtn.addEventListener('click', () => {
        generateCards(arr);
        domAppendCards(arr);
        openPopup(sliderItems);
    });
}

//menu burger
const menuBurger = document.querySelector('.burger-menu'),
    menu = document.querySelector('.header-nav');

function openOrCloseMenu() {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active-menu');
    document.body.classList.toggle('hidden-info');
    document.querySelector('.dark').classList.toggle('dark-back');
}

menuBurger.addEventListener('click', () => {
    openOrCloseMenu();
});

document.querySelector('.dark').addEventListener('click', () => {
    openOrCloseMenu();
});

document.querySelector('.active-li').addEventListener('click', () => {
    openOrCloseMenu();
    document.body.scrollTo(0,0);
})

const headerLinks = document.querySelectorAll('.header-link');

headerLinks[2].addEventListener('mouseover', () => {
    headerLinks[2].style.cursor = 'auto';
    headerLinks[2].style.color = '#CDCDCD';
    headerLinks[2].style.userSelect = 'none';
});

headerLinks[3].addEventListener('mouseover', () => {
    headerLinks[3].style.cursor = 'auto';
    headerLinks[3].style.color = '#CDCDCD';
    headerLinks[3].style.userSelect = 'none';
});