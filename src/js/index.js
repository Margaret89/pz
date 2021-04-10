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
		nextArrow: '<button id="next" type="button" class="slider-next"><svg class="icon ic-next" width="24" height="65"><use xlink:href="assets/sprites/sprite.svg#ic-next"></use></svg></button>',
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			},
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
		  ]
	});
}

// staf slider
if($('.js-staf-slider').length){
	$('.js-staf-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		prevArrow: '<button id="prev" type="button" class="slider-prev"><svg class="icon ic-prev" width="24" height="65"><use xlink:href="assets/sprites/sprite.svg#ic-prev"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="slider-next"><svg class="icon ic-next" width="24" height="65"><use xlink:href="assets/sprites/sprite.svg#ic-next"></use></svg></button>',
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			},
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
		  ]
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

// Создание мобильного меню
var arrMobileMenu = [];
$('.js-add-mm').each(function(){
	var indexItem = $(this).attr('data-order');
	arrMobileMenu[indexItem] = $(this);
});

for (var i = 0; i < arrMobileMenu.length; i++) {
	$(arrMobileMenu[i]).clone().appendTo('.js-mobile-sidebar-content');
}

// Открыть/Закрыть мобильное меню
$('.js-open-menu').on('click', function(){
	$('.js-shadow').addClass('is-visible');
	$('.js-mobile-sidebar').addClass('open');
	$('.js-body').addClass('no-scroll');
});

$('.js-close-menu').on('click', function(){
	 closeCatMenu();
});

$('.js-shadow').on('click', function(){
	closeCatMenu();
});

function closeCatMenu() {
	$('.js-shadow').removeClass('is-visible');
	$('.js-mobile-sidebar').removeClass('open');
	$('.js-body').removeClass('no-scroll');
}

// select
if($('.js-select').length){
	$('.js-select').select2({
		minimumResultsForSearch: -1,
	});
}

// Button for attach file
$('.js-input-file').on('change', function(){
	var f_name = [];
	var $elemName = $(this).closest('.js-file-upload').find('.js-name-file')

	for (var i = 0; i < $(this).get(0).files.length; ++i) {
		f_name.push(" " + $(this).get(0).files[i].name);
	}

	$elemName.html(f_name);
	$elemName.attr("title", f_name);
});

// unwrap block
if($('.js-unwrap-block').length){
	$('.js-unwrap-head').on('click',function(event){
		event.preventDefault();
		var $parent = $(this).parents('.js-unwrap-block');
		
		$parent.toggleClass('opened');
		if($parent.hasClass('opened')){
			$parent.children('.js-unwrap-content').slideDown(400);
		}else{
			$parent.children('.js-unwrap-content').slideUp(400);
		}
	});
}