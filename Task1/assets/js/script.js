let ham = document.querySelector('#ham');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');
let zform = document.querySelector('form');
let zbox = document.querySelectorAll('.box');
let timeoutID;

    ham.addEventListener('click', () =>{
        navbar.classList.toggle('navbar-toggle');
        for (var i=0;i<zbox.length;i++){
            zbox[i].classList.toggle('zbox');

        }
        zform.classList.toggle('zbox');
        header.classList.add('header');
    });

window.onscroll = () =>{
    clearTimeout(timeoutID);
    navbar.classList.remove('navbar-toggle');
    navbar.classList.add('nav2');
    header.classList.add('header');
    for (var i=0;i<zbox.length;i++) {
        zbox[i].classList.remove('zbox');

    }
    zform.classList.remove('zbox');
    timeoutID = setTimeout(function() {
        navbar.classList.remove('nav2');
        header.classList.remove('header');
      }, 2*5000);
}