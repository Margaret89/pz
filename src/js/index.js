import {$, Inputmask} from './common';

// Стрелка наверх
$(window).on('scroll', function(){
	if($(this).scrollTop()>300){
		$('.js-move-up').addClass('visible');
	}else{
		$('.js-move-up').removeClass('visible');
	}
});
$('.js-move-up').on('click', function(){$('body,html').animate({scrollTop:0},500);return false;});

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

// show/hide faq
if($('.js-faq').length){
	$('.js-faq-head').on('click', function() {
		var numElem = $(this).parent('.js-faq-item').data('num');

		$('.js-faq-item').removeClass('active');
		$(this).parent('.js-faq-item').addClass('active');
		$(this).closest('.js-faq').find('.js-faq-item[data-num='+numElem+']').addClass('active');
	});
}

// team slider
if($('.js-team-slider').length){
	$('.js-team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button id="prev" type="button" class="slider-prev"><svg class="icon ic-prev" width="24" height="65"><use xlink:href="assets/sprites/sprite.svg#ic-prev"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="slider-next"><svg class="icon ic-next" width="24" height="65"><use xlink:href="assets/sprites/sprite.svg#ic-next"></use></svg></button>'
	});
}

// quiz
if($('.js-quiz-step').length){
	var countSteps = $('.js-quiz-step').length;
	var curStep = 1;
	var error = false;

	$('.js-quiz-next').on('click', function(e) {
		curStep++;
		
		if($('.js-quiz-step.active .js-req-check').length){
			if($('.js-req-check input:checkbox:checked').length == 0){
				error = true;
				$('.js-quiz-error').addClass('active');
			}else{
				error = false;
				$('.js-quiz-error').removeClass('active');
			}
		}

		if(error == false){
			$('.js-quiz-step').removeClass('active');
			$('.js-quiz-error').removeClass('active');

			if(curStep > countSteps){
				$('.js-quiz-success').addClass('active');
				$(this).addClass('invisible');
			}else{
				e.preventDefault();
				$('.js-quiz-step[data-step='+curStep+']').addClass('active');
			}
		}
	});

	$('.js-quiz').on('submit',function(e){
		$(this)[0].reset();
		e.preventDefault();
	});
}

// Маска для телефона 
Inputmask('+7 (999) 999-9999').mask('.js-phone');

// Вывод сообщения об успешной отправке в попапе
$('.js-valid-form').each(function(){
	$(this).on('submit',function(e){
		$.fancybox.close();
		$.fancybox.open({
			src  : '#msg-success',
			type : 'inline',
			opts : {
				
			}
		});
		$(this)[0].reset();
		e.preventDefault();
	});
});