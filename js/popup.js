$('.popup-btn').on('click',  function(event) {
    event.preventDefault();
    $('.modal').fadeIn();
	$('body').addClass('stop');
});
$('.popup-close').on('click',  function(event) {
    event.preventDefault();
    $('.popup').fadeOut();
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var popup = $("#modal-dialog"); // тут указываем ID элемента
    var close = $(".modal-close");
    $('body').addClass('stop');
    if (!popup.is(e.target)// если клик был не по нашему блоку
        && popup.has(e.target).length === 0 // и не по его дочерним элементам
        || close.is(e.target)) { 
            event.preventDefault();
            $('.modal').fadeOut();
			$('body').removeClass('stop');
    }
});