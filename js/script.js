// SLICK SLIDER

$(document).ready(function() {
    $('.header__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});


// BURGER MENU

let burgerBtn = document.querySelector('#burger-btn');
let burgerList = document.querySelector('#burger-list');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    burgerList.classList.toggle('active');
})


// TABS

let tabCont = document.querySelectorAll('.tabs-block');
let tabBtn = document.querySelectorAll('.tabs-item');

for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function() {
        for (let elem of tabCont) {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active');
            }
        }
        tabCont[i].classList.toggle('active');
    })
}