const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

menu.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});

document.querySelector('.arrow-container a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    let currentCardIndex = 0;

    function showCard(index) {
        cards.forEach(card => card.classList.remove('current'));
        cards[index].classList.add('current');
    }

    document.querySelector('.next-button').addEventListener('click', function () {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        showCard(currentCardIndex);
    });

    document.querySelector('.prev-button').addEventListener('click', function () {
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        showCard(currentCardIndex);
    });
});