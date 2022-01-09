// 7 Jan 2022

const HtmlBody = document.body;
const themeBtn = document.getElementById('theme-btn');
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');
const navbarLink = document.querySelectorAll('.navbar a');
const scrollIndicator = document.querySelector('.header .scroll-indicator');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('userClick');
});

navbarLink.forEach(link => {
    link.addEventListener('click', () => {
        // you are awesome... <3
        navbar.classList.remove('userClick');
    });
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


window.addEventListener('scroll', () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');

    let maxHeight = window.document.body.scrollHeight -  window.innerHeight;
    let percentage = ((window.scrollY / maxHeight)) * 100;

    // HTML display show... 
    scrollIndicator.style.width = percentage + '%';
});
