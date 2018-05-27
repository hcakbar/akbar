// // expand drawer when click
// var menuIcon = document.querySelector('#menu-icon');
// var main = document.querySelector('main');
// var navClass = document.querySelector('.nav');
// menuIcon.addEventListener('click', function (e) {
//     navClass.classList.toggle('open');
//     e.stopPropagation();
// });
// main.addEventListener('click', function () {
//     navClass.classList.remove('open');
// });

$(document).ready(function() {
    $('.menu-icon').on('click', function() {
        $('header nav ul').toggle('nav-menu');
    });
});