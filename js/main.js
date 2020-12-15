$(document).ready(function() {
    let sideNav = document.getElementById("mySidenav");
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    let menu = document.querySelector('.menu');
    // let menuLink = document.querySelectorAll('.menu a');
    // let menus = Array.from(menuLink);
    // menus.map(menu => {
    //     menu.onclick = function() {
    //         closeNav();
    //     }
    // [<a>, <a>, <a>]
    // a.onclick = function {}
    // });

    $('.menu a').click(function(){
        closeNav();
    })

    $('.hamburger-menu').click(function(){
        openNav();
    }) 

    $('.close-menu-button').click(function(){
        closeNav();
    })

    function openNav() {
        sideNav.style.padding = "25px";
        // sideNav.style.display = 'block';
        // console.log(window.innerWidth);
        
        // check if innerwidth is < 414px for mobile view
        // if(window.innerWidth <= 414) {
        //     sideNav.style.width = "40vw";
        // }else{
        //     sideNav.style.width = "15vw";
        // }

        // console.log(menu);
        console.log('test');
        $( "#mySidenav" ).css('display', 'block').animate({
            width: '20vw'
          }, 200, function() {
            
        });

    }

    function closeNav() {
        $( "#mySidenav" ).animate({
            width: '0'
          }, 400, function() {
            setTimeout(function() {
                $('#mySidenav').css('display', 'none');
            }, 400);
            
        });
    }

    // window.onscroll = function() {
    //     if(window.pageYOffset > 526 && window.pageYOffset < 1570) {
    //         hamburgerMenu.style.color = '#3c95a8';
    //     }else {
    //         hamburgerMenu.style.color = 'white';
    //     }
    // }

    $(window).scroll(function(){
        if(window.pageYOffset > 526 && window.pageYOffset < 1570) {
            hamburgerMenu.style.color = '#3c95a8';
        }else {
            hamburgerMenu.style.color = 'white';
        }

        $(".animate-element").each(function(){
            var animateElement = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (animateElement < topOfWindow + 300) {
                $(this).addClass("fade-in");
            }
        });
    })
});

