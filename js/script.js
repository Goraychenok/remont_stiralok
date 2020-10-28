var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  jQuery(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').addClass('active');
    });
    $('.popup').fadeIn();
});
function slowScroll(id){
	var offset = 25;
	$('html,body').animate ({
		scrollTop: $(id).offset ().top - offset
	},1000);
	$('body').removeClass('lock');
	$('.header__burger,.header__menu').removeClass('active');
	return false;
}





