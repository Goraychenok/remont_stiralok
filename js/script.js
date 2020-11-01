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
    $(".popup").delay(7000).fadeIn();
    
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

//phone mask
jQuery(function($){
  $("#phone").mask("+7 (999) 999-99-99");
  $("#phone-mask").mask("+7 (999) 999-99-99");
  $("#phone-mask-two").mask("+7 (999) 999-99-99");
});


// $(document).mouseup(function (e){
//   var popups = $(".popup"); 
//   var popupBtn = $(".popup-btn");
//   if (popupBtn.is(e.target)) { 
//       popups.addClass('none');
//   } else if(!popupBtn.is(e.target)){
//      popups.delay(1000).fadeIn();
//   }
// });




