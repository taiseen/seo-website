// 7 Jan 2022

let HtmlBody = document.body;
let themeBtn = document.getElementById('theme-btn');
let menuBtn = document.getElementById('menu-btn');
let navbar = document.querySelector('.navbar');
let navbarLink = document.querySelectorAll('.navbar a');
let scrollIndicator = document.querySelector('.header .scroll-indicator');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('userClick');
});

// Method - 1
// after clicking in the dropdown menu 
// auto close that dropdown menu
// click + close --> instantly 
navbarLink.forEach(link => {
    link.addEventListener('click', () => {
        // you are awesome... <3
        menuBtn.classList.remove('fa-times');
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

    // Method - 2
    // after clicking in the dropdown menu 
    // auto close that dropdown menu
    // click + depend upon scrolling for close 

    // menuBtn.classList.remove('fa-times');
    // navbar.classList.remove('userClick');

    // calculate user screen view portions...
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY / maxHeight)) * 100;

    // at HTML horizontal bar display show incrementally... 
    scrollIndicator.style.width = percentage + '%';
});
