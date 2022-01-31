var halfText = $('.spoiler').innerHeight() / 2,
    textHeight = $('.spoiler').innerHeight();

$('.spoiler').css('height', $('.spoiler').innerHeight() / 2);

$('.show-hide').click(function() {
    if( $('.spoiler').innerHeight() == halfText ) {
        $('.spoiler').animate({ height: textHeight }, 500);
        $(this).text('Скрыть');
    } else {
        $('.spoiler').animate({ height: halfText }, 500);
        $(this).text('Показать');
    }
});