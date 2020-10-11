document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    let result = [],
        check = 0,
        createRes = document.createElement('p');

    createRes.classList.add('please');

    function startModal() {
        const start = document.querySelector('#start');
        start.addEventListener('click', modalsOpen);
    }

    const modalsOpen = () => {
        function modal(btnPrev, btnNext, contentPrev, contentNext) {
            const btnPrevS = document.querySelector(btnPrev),
                btnNextS = document.querySelector(btnNext),
                windows = document.querySelectorAll('[data-modal]'),
                windowsModals = document.querySelectorAll('.modal_window'),
                contentPrevS = document.querySelector(contentPrev),
                contentNextS = document.querySelector(contentNext);

            let wayToDelete = document.querySelector('#finishRes');

            function hideWindow() {
                windowsModals.forEach(el => el.style.display = 'none');
            }

            function showWindow(i = 0) {
                windowsModals[i].style.display = 'grid';
            }

            btnPrevS.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(el => {
                    el.style.display = 'none';
                });

                contentPrevS.style.display = 'grid';

            });

            btnNextS.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }


                windows.forEach(el => {
                    el.style.display = 'none';
                });

                let finishRes = resultWindow();

                if (btnNext === '#next15') {
                    check += 1;
                    //console.log(check)
                    if (check === 1) {
                        createRes.textContent = `${finishRes}`;

                        wayToDelete.append(createRes);

                        const delAllCheckboxes = document.querySelectorAll('input');

                        result = [];
                        delAllCheckboxes.forEach(el => {
                            el.checked = false;
                        });
                    }
                }
                document.getElementById('window16').style.display = 'none';
                contentNextS.style.display = 'grid';
            });

            check = 0;
            createRes.textContent = '';

            hideWindow();
            showWindow();
        }

        const hiddenStart = document.querySelector('.modal_window_start');

        hiddenStart.style.display = 'none';

        modal('#help1', '#next1', '#help2', '#window2');
        modal('#prev2', '#next2', '#window1', '#window3');
        modal('#prev3', '#next3', '#window2', '#window4');
        modal('#prev4', '#next4', '#window3', '#window5');
        modal('#prev5', '#next5', '#window4', '#window6');
        modal('#prev6', '#next6', '#window5', '#window7');
        modal('#prev7', '#next7', '#window6', '#window8');
        modal('#prev8', '#next8', '#window7', '#window9');
        modal('#prev9', '#next9', '#window8', '#window10');
        modal('#prev10', '#next10', '#window9', '#window11');
        modal('#prev11', '#next11', '#window10', '#window12');
        modal('#prev12', '#next12', '#window11', '#window13');
        modal('#prev13', '#next13', '#window12', '#window14');
        modal('#prev14', '#next14', '#window13', '#window15');
        modal('#prev15', '#next15', '#window14', '#window16');
        modal('#help1', '#finish', '#help2', '#windowStart');

        const checkAndChangeState = (state) => {
            function addNum(elems, prop) {
                const allElems = document.querySelectorAll(elems);

                allElems.forEach((el, i) => {
                    el.addEventListener('click', () => {
                        if (el.getAttribute('type') === 'checkbox') {
                            state[prop] = i;
                            allElems.forEach((item, j) => {
                                item.checked = false;
                                i === j ? item.checked = true : item.checked = false;
                            });
                            //console.log(state);
                        }
                    });
                });
            }

            addNum('.q_one', 0);
            addNum('.q_two', 1);
            addNum('.q_three', 2);
            addNum('.q_four', 3);
            addNum('.q_five', 4);
            addNum('.q_six', 5);
            addNum('.q_seven', 6);
            addNum('.q_eight', 7);
            addNum('.q_nine', 8);
            addNum('.q_ten', 9);
            addNum('.q_eleven', 10);
            addNum('.q_twelve', 11);
            addNum('.q_thirteen', 12);
            addNum('.q_fourteen',13);
            addNum('.q_fifteen',14);
        }

        checkAndChangeState(result);

        function resultWindow() {
            let resultWell = [2,2,2,1,0,1,2,1,1,3,1,2,2,0,0];
            let arr = [];

            if (result.toString() === resultWell.toString()) {
                return 'Поздравляем, вы успено справились с тестом. Это очень большой успеч! Но помните, что никогда нельзя останавливаться на достигнутом';
            } else {
                for (let i = 0; i < resultWell.length; i++) {
                    if (result[i] !== resultWell[i]) {
                        arr.push(resultWell[i]);
                    }
                }
                console.log(arr);

                let lastTime = resultWell.length - arr.length;

                if (lastTime === 1) {
                    return `О нет, вы дали всего один правильный ответ. Нужно стараться!!!`;
                } else if (lastTime > 1 && lastTime <=4) {
                    return `Вы набрали ${lastTime} правильных ответа. Это не очень хороший результат, но отличный повод продолжать изучать английский!!!`;
                } else if (lastTime >= 5 && lastTime <= 10) {
                    return `Вы набрали ${lastTime} правильных ответов. Довольно неплохой показатель, но нужно расти дальше!!!`;
                } else if (lastTime > 10 && lastTime < 15) {
                    return `Вы набрали ${lastTime} правильных ответов. Вы очень близки к идеалу, осталось совсем чуть-чуть!!!`
                } else {
                    return `Эмм, вы точно решали этот тест???`;
                }
            }
        }
    }

    startModal();
});