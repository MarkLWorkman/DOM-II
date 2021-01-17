const bottomPage = document.querySelector('.footer');
const funBus = document.querySelector('.logo-heading');
const navLinks = document.querySelector('.main-navigation');
const textPara = document.querySelector('.destination p');
const picture = document.querySelector('.img-content');
const boatPicture = document.querySelector('.content-destination img');

funBus.addEventListener('click', (event) => {
    event.target.style.color = 'red';
});