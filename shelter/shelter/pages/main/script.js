const invisibleItem = document.querySelectorAll('.slider-item');

function showOrClose() {
    if (document.documentElement.clientWidth < 1280) {
        invisibleItem[2].classList.add('invisible-item');
        if (document.documentElement.clientWidth < 768) {
            invisibleItem[1].classList.add('invisible-item');
        } else {
            invisibleItem[1].classList.remove('invisible-item');
        }
    } else {
        invisibleItem[2].classList.remove('invisible-item');
    }
}

window.addEventListener('resize',  showOrClose);
showOrClose();