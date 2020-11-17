import './css/owfont-regular.css'
import './main.css';
import evening from './assets/evening.jpg';
import eveningTwo from './assets/evening2.jpg';
import eveningThree from './assets/evening3.jpg';
import eveningFour from './assets/evening4.jpg';
import eveningFive from './assets/evening5.jpg';
import eveningSix from './assets/evening6.jpg';
import morning from './assets/morning.jpg';
import morningTwo from './assets/morning2.jpg';
import morningThree from './assets/morning3.jpg';
import morningFour from './assets/morning4.jpg';
import morningFive from './assets/morning5.jpg';
import morningSix from './assets/morning6.jpg';
import night from './assets/night.jpg';
import nightTwo from './assets/night2.jpg';
import nightThree from './assets/night3.jpg';
import nightFour from './assets/night4.jpg';
import nightFive from './assets/night5.jpg';
import nightSix from './assets/night6.jpg';
import afternoon from './assets/afternoon.jpg';
import afternoonTwo from './assets/afternoon2.jpg';
import afternoonThree from './assets/afternoon3.jpg';
import afternoonFour from './assets/afternoon4.jpg';
import afternoonFive from './assets/afternoon5.jpg';
import afternoonSix from './assets/afternoon6.jpg';

const time = document.querySelector('#time'),
    name = document.querySelector('#name'),
    goal = document.querySelector('#goal'),
    good = document.querySelector('#good'),
    quote = document.querySelector('.quote'),
    author = document.querySelector('.author'),
    changer = document.querySelector('.change-back svg'),
    backToCurrent = document.querySelector('.back-to-current'),
    day = document.querySelector('.day'),
    date = document.querySelector('.date'),
    month = document.querySelector('.month'),
    year = document.querySelector('.year');

    let allImages = [[],[],[],[]],
            imgBeforeRandom = [
            [morning, morningTwo,morningThree, morningFour, morningFive, morningSix],
            [afternoon, afternoonTwo, afternoonThree, afternoonFour, afternoonFive, afternoonSix],
            [evening, eveningTwo, eveningThree, eveningFour, eveningFive, eveningSix],
            [night, nightTwo, nightThree, nightFour, nightFive, nightSix]
        ],
        degrees = 3,
        checker = 0,
        degForQuote = 3;

/*let tempArr = [];

for (let i = 0; i < 6; i++) {
    const newPets = pets;

    for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
    }

    tempArr = [...tempArr, ...newPets];
}*/

    for (let i = 0; i < allImages.length; i++) {
        for (let j = imgBeforeRandom[i].length; j > 0; j--) {
            let randomNum = Math.floor(Math.random() * j);
            allImages[i].push(imgBeforeRandom[i][randomNum]);
            imgBeforeRandom[i].splice(randomNum, 1);
        }
    }

    console.log(allImages);
    allImages = allImages.flat();

function showTime() {
    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds();

    time.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);

    if (minutes == '00' && seconds == '00') {
        changeGood();
    }

    showDay();

    setTimeout(showTime, 1000);
}

function addZero(number) {
    return (number < 10 ? '0' : '') + number;
}

function changeGood() {
    let hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        if (hour === 6) {
            document.body.style.backgroundImage = `url(${allImages[0]})`;
            checker = 1;
        } else if (hour === 7) {
            document.body.style.backgroundImage = `url(${allImages[1]})`;
            checker = 2;
        } else if (hour === 8) {
            document.body.style.backgroundImage = `url(${allImages[2]})`;
            checker = 3;
        } else if (hour === 9) {
            document.body.style.backgroundImage = `url(${allImages[3]})`;
            checker = 4;
        } else if (hour === 10) {
            document.body.style.backgroundImage = `url(${allImages[4]})`;
            checker = 5;
        } else if (hour === 11) {
            document.body.style.backgroundImage = `url(${allImages[5]})`;
            checker = 6;
        }
        good.innerHTML = 'Good morning,';
        document.body.style.color = 'white';
    } else if (hour >= 12 && hour < 18) {
        if (hour === 12) {
            document.body.style.backgroundImage = `url(${allImages[6]})`;
            checker = 7;
        } else if (hour === 13) {
            document.body.style.backgroundImage = `url(${allImages[7]})`;
            checker = 8;
        } else if (hour === 14) {
            document.body.style.backgroundImage = `url(${allImages[8]})`;
            checker = 9;
        } else if (hour === 15) {
            document.body.style.backgroundImage = `url(${allImages[9]})`;
            checker = 10;
        } else if (hour === 16) {
            document.body.style.backgroundImage = `url(${allImages[10]})`;
            checker = 11;
        } else if (hour === 17) {
            document.body.style.backgroundImage = `url(${allImages[11]})`;
            checker = 12;
        }
        good.innerHTML = 'Good afternoon,';
        document.body.style.color = 'white';
    } else if (hour >= 18 && hour < 24) {
        if (hour === 18) {
            document.body.style.backgroundImage = `url(${allImages[12]})`;
            checker = 13;
        } else if (hour === 19) {
            document.body.style.backgroundImage = `url(${allImages[13]})`;
            checker = 14;
        } else if (hour === 20) {
            document.body.style.backgroundImage = `url(${allImages[14]})`;
            checker = 15;
        } else if (hour === 21) {
            document.body.style.backgroundImage = `url(${allImages[15]})`;
            checker = 16;
        }  else if (hour === 22) {
            document.body.style.backgroundImage = `url(${allImages[16]})`;
            checker = 17;
        }  else if (hour === 23) {
            document.body.style.backgroundImage = `url(${allImages[17]})`;
            checker = 18;
        }
        document.body.style.color = 'white';
        good.innerHTML = 'Good evening,';
    } else if (hour >= 0 && hour < 6) {
        if (hour === 0) {
            document.body.style.backgroundImage = `url(${allImages[18]})`;
            checker = 19;
        } else if (hour === 1) {
            document.body.style.backgroundImage = `url(${allImages[19]})`;
            checker = 20;
        } else if (hour === 2) {
            document.body.style.backgroundImage = `url(${allImages[20]})`;
            checker = 21;
        } else if (hour === 3) {
            document.body.style.backgroundImage = `url(${allImages[21]})`;
            checker = 22;
        } else if (hour === 4) {
            document.body.style.backgroundImage = `url(${allImages[22]})`;
            checker = 23;
        } else if (hour === 5) {
            document.body.style.backgroundImage = `url(${allImages[23]})`;
            checker = 24;
        }
        document.body.style.color = 'white';
        good.innerHTML = 'Good night,';
    }
}

function setName(e) {
    if (e.code === 'Enter') {
        if (e.target.innerText === '') {
            name.blur();
            console.log(localStorage.getItem('name'));
            name.textContent = localStorage.getItem('name');
        } else {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
            getName();
        }
    }
}

function setGoal(e) {
    if (e.code === 'Enter') {
        if (e.target.innerText === '') {
            goal.blur();
            goal.textContent = localStorage.getItem('goal');
        } else {
            localStorage.setItem('goal', e.target.innerText);
            goal.blur();
            getGoal();
        }
    }
}

function getName() {
    name.textContent = localStorage.getItem('name');
}

function getGoal() {
    goal.textContent = localStorage.getItem('goal');
}

function quotes() {
    fetch("https://type.fit/api/quotes")
        .then(response => {
            return response.json();
        })
        .then(data => {
            let someQuote = Math.round(Math.random() * data.length);
            quote.textContent = data[someQuote]["text"];
            author.textContent = `by ${data[someQuote]["author"]}`;
        });
}


name.addEventListener('keypress', setName);
goal.addEventListener('keypress', setGoal);

showTime();
changeGood();
getGoal();
getName();
quotes();

document.querySelector('.change-quote').addEventListener('click', () => {
    quotes();
    document.querySelector('.change-quote').style.transform = `rotate(${degForQuote*120}deg)`;
    document.querySelector('.change-quote').style.transitionDuration = '2s';
    degForQuote += 3;
});

//change background

function imgChanger(num) {
    document.body.style.transitionDelay = '1s';
    document.body.style.transitionDuration = '0.7s';
    document.body.style.backgroundImage = `url(${allImages[num]})`;
}

changer.addEventListener('click', () => {
    changer.style.transform = `rotate(${degrees*60}deg)`;
    changer.style.transitionDuration = '1.5s';
    degrees += 3;
    imgChanger(checker);
    checker++;
    if (checker === 24) {
        checker = 0;
    }
});

backToCurrent.addEventListener('click', () => {
    changeGood();
});


function  showDay() {
    let currentTime = new Date(),
        dayNum = currentTime.getDay(),
        dateNum = currentTime.getDate(),
        monthNum = currentTime.getMonth(),
        yearNum = currentTime.getFullYear();

    if (dayNum === 1) {
        day.textContent = 'Monday';
    } else if (dayNum === 2) {
        day.textContent = 'Tuesday';
    }  else if (dayNum === 3) {
        day.textContent = 'Wednesday';
    }  else if (dayNum === 4) {
        day.textContent = 'Thursday';
    }  else if (dayNum === 5) {
        day.textContent = 'Friday';
    }  else if (dayNum === 6) {
        day.textContent = 'Saturday';
    }  else if (dayNum === 0) {
        day.textContent = 'Sunday';
    }

    if (monthNum === 0) {
        month.textContent = 'January';
    } else if (monthNum === 1) {
        month.textContent = 'February';
    } else if (monthNum === 2) {
        month.textContent = 'March';
    } else if (monthNum === 3) {
        month.textContent = 'April';
    } else if (monthNum === 4) {
        month.textContent = 'May';
    } else if (monthNum === 5) {
        month.textContent = 'june';
    } else if (monthNum === 6) {
        month.textContent = 'July';
    } else if (monthNum === 7) {
        month.textContent = 'August';
    } else if (monthNum === 8) {
        month.textContent = 'September';
    } else if (monthNum === 9) {
        month.textContent = 'October';
    } else if (monthNum === 10) {
        month.textContent = 'November';
    } else if (monthNum === 11) {
        month.textContent = 'December';
    }

    date.textContent = `${dateNum}`
    year.textContent = `${yearNum}`;
}

showDay();

const temp = document.querySelector('.whether-temperature'),
    descript = document.querySelector('.whether-description'),
    icon = document.querySelector('.whether-icon'),
    city = document.querySelector('.city'),
    windSpeed = document.querySelector('.wind-speed'),
    humidity = document.querySelector('.humidity');

function whetherInYourCity() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&appid=5e331458e96bed7f939354aa4cec4da2`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod === '404') {
                alert("I'm so sorry, but there is no such city in API!");
                temp.textContent = '';
                descript.textContent = '';
                icon.className = 'weather-icon owf';
                windSpeed.textContent = ``;
                humidity.textContent = ``;
            } else {
                temp.textContent = Math.round(data.main['temp']) - 273 + '°C';
                descript.textContent = `${data.weather[0].description}`;
                icon.className = 'weather-icon owf';
                icon.classList.add(`owf-${data.weather[0].id}`);
                windSpeed.textContent = `wind speed: ${data.wind.speed}`;
                humidity.textContent = `humidity: ${data.main.humidity}`;
            }
        });
}

function setCity(event) {
    if (event.code === 'Enter') {
        if (event.target.innerText === '') {
            city.blur();
            console.log(localStorage.getItem('city'));
            city.textContent = localStorage.getItem('city');
            whetherInYourCity();
        } else {
            whetherInYourCity();
            localStorage.setItem('city', event.target.innerText);
            city.blur();
            getCity();
        }
    }
}

function getCity() {
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
        city.textContent = 'kirov';
    } else {
        city.textContent = localStorage.getItem('city');
    }
}

function hiddenText(e) {
    e.target.textContent = '';
}

city.addEventListener('click', (e) => hiddenText(e));
name.addEventListener('click', (e) => hiddenText(e));
goal.addEventListener('click', (e) => hiddenText(e));

document.addEventListener('DOMContentLoaded', () => whetherInYourCity());
city.addEventListener('keypress', (e) => setCity(e));
getCity();