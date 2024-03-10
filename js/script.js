const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});