let sideNav = document.getElementById("mySidenav");
let hamburgerMenu = document.querySelector('.hamburger-menu');
let menuLink = document.querySelectorAll('.menu a');
let menus = Array.from(menuLink);
menus.map(menu => {
    menu.onclick = function() {
        closeNav();
    }
});

function openNav() {
    sideNav.style.padding = "25px";
    console.log(window.innerWidth);
    
    // check if innerwidth is < 414px for mobile view
    if(window.innerWidth <= 414) {
        sideNav.style.width = "40vw";
    }else{
        sideNav.style.width = "15vw";
    }
}

function closeNav() {
    sideNav.style.width = "0";
    sideNav.style.padding = "0";
}

window.onscroll = function() {
    if(window.pageYOffset > 526 && window.pageYOffset < 1570) {
        hamburgerMenu.style.color = '#3c95a8';
    }else {
        hamburgerMenu.style.color = 'white';
    }
}