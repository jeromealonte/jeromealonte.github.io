$(document).ready(function() {
    let sideNav = document.getElementById("mySidenav");
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    let menu = document.querySelector('.menu');

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

