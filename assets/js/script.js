// 7 Jan 2022

const HtmlBody = document.body;
const themeBtn = document.getElementById('theme-btn');
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('userClick');
});


themeBtn.addEventListener('click', () => {

    themeBtn.classList.toggle('fa-sun');
    HtmlBody.classList.toggle('darkTheme');

    // if (themeBtn.classList.contains('fa-sun')) {
    //     HtmlBody.classList.add('darkTheme');
    // }else{
    //     HtmlBody.classList.remove('darkTheme');
    // }

});


window.addEventListener('onscroll', () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
});
