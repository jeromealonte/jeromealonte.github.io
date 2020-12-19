$(document).ready(function() {
    $('.hamburger-menu');
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

    $('#mySidenav a').click(function(event){
        if(this.hash !== '') {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            })
        }
    })

    function openNav() {
        $("#mySidenav").css('padding', '25px');

        let navWidth = 0;

        console.log(window.innerWidth);

        if(window.innerWidth <= 768) {
            navWidth = '60vw';
        } else if(window.innerWidth <= 736) {
            navWidth = '100vw';
        } else {
            navWidth = '30vw';
        }

        $( "#mySidenav" ).css('display', 'block').animate({
            width: navWidth
          }, 300, function() {
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

        $(".animate-element").each(function(){
            let animateElement = $(this).offset().top;
            const topOfWindow = $(window).scrollTop();
            if (animateElement < topOfWindow + 350) {
                $(this).addClass("fade-in");
            }
        });

        // function to change hamburger icon color
        $("#home").each(function(){
            updateHamburgerMenuColor($(this), 'white');
        });

        $(".about-me-section").each(function(){
            updateHamburgerMenuColor($(this), '#3c95a8');
        });

        $("#projects").each(function(){
            updateHamburgerMenuColor($(this), 'white');
        });
    });

    function updateHamburgerMenuColor(element, color) {
        let topOfWindow = $(window).scrollTop();
        if (element.offset().top < topOfWindow + 50) {
            $('.hamburger-menu').css('color', color);
        }
    }
});

