const bottomPage = document.querySelector('.footer');
const funBus = document.querySelector('.logo-heading');
const navLinks = document.querySelector('.main-navigation');
const textPara = document.querySelector('.destination p');
const picture = document.querySelector('.img-content');
const boatPicture = document.querySelector('.content-destination img');

funBus.addEventListener('click', (event) => {
    event.target.style.color = 'red';
});

funBus.addEventListener('dblclick', (event) => {
    event.target.style.color = 'black';
});

navLinks.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red';
});

navLinks.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'white';
});
