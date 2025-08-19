"use strict";

// hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');  // openクラスを付け外しする

    if(nav.classList.contains('open')) {
        hamburger.textContent = '× ';
    } else {
        hamburger.textContent = 'menu';
    }
});


// fade in
const fadein = document.querySelectorAll('.fadein');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});
fadein.forEach(target => observer.observe(target));
