import {$} from './common';

// $(window).scroll(function(){
// 	if($(this).scrollTop()>300){
// 		$('.js-move-up').addClass('visible');
// 	}else{
// 		$('.js-move-up').removeClass('visible');
// 	}
// });
// $('.js-move-up').click(function(){$('body,html').animate({scrollTop:0},800);return false;});

// select
if($('.js-select').length){
	$('.js-select').select2({
		minimumResultsForSearch: -1,
	});
}

// top-slider
if($('.js-top-slider-img').length){
	$('.js-top-slider-img').slick({
		infinite: true,
		arrows: false,
		dots: true,
	});
}