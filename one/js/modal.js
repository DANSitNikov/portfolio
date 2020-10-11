document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    const btn = document.querySelectorAll('.btn'),
          modal = document.querySelector('.modal-window'),
          close = document.querySelector('.modal__close'),
          aroundModal = document.querySelector('.modal-window');

    btn.forEach( el => {
        el.addEventListener('click', () => {
        modal.style.display = 'block';
        document.documentElement.style.overflowY = 'hidden';
        clearInterval(download);
    })})

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.documentElement.style.overflowY = 'auto';
    })

    const download = setTimeout(function () {
        modal.style.display = 'block';
        document.documentElement.style.overflowY = 'hidden';
    },15000);

    aroundModal.addEventListener('click', (e) => {
        if (e.target === aroundModal) {
            modal.style.display = 'none';
            document.documentElement.style.overflowY = 'auto';
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            modal.style.display = 'none';
            document.documentElement.style.overflowY = 'auto';
        }
    })

    function showFormInBottom() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            modal.style.display = 'block';
            document.documentElement.style.overflowY = 'hidden';
            clearInterval(download);
            window.removeEventListener('scroll', showFormInBottom)
        }
    }

    window.addEventListener('scroll', showFormInBottom)
})