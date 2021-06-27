$(document).ready(() => {

    //點擊icon顯示菜單
    $('.show_hamburgerMenu').click((e) => {
        e.preventDefault();
        $('.hamburgerMenu').toggleClass('hamburgerMenu-show');
    });

    //最愛
    $('.fa-heart').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('far');
        $(this).toggleClass('fas');
    });

});