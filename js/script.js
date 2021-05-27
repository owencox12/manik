$(document).ready(function(){
    $('.header__burger').on('click', function(){
    $('.header__burger_list').toggleClass('header__burger_list_active')
    $('.header__burger').toggleClass('header__burger_active')
    $('body').toggleClass('lock')
    })
    $('#button').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.button--footer').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.button--main').on('click', function(){
        $('.overlay, #price').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #price').fadeOut('slow');
    });
});