(function($){
    $('.topbar__icon').click(function() {
        $(this).toggleClass('active');
        $('body').toggleClass('menu-opened');
    });
})(jQuery);