jQuery(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').addClass('active'); 
    });
});

$('#button_one').click(function(event){
    $('.companys-two').addClass('block');
    $('#button_two').addClass('block');
    $('#button_one').addClass('none');

});

$('#button_two').click(function(event){
    $('.companys-two').removeClass('block');
    $('#button_two').removeClass('block');
    $('#button_one').removeClass('none');
});