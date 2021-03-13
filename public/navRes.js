const buger = document.querySelector('#burger');
const meni = document.querySelector('#menu');

buger.addEventListener('click', () => {
    if(meni.classList.contains('hidden')) {
        meni.classList.remove('hidden');
    } else {
        meni.classList.add('hidden');
    }
})