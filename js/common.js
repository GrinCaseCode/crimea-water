$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}
	
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	// mask-input 
	$(".input-phone").mask("+7 (999) 999-99-99");

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn-nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(600);
		} else {
			$(".menu").slideUp(600);
		}
		
	});

	$(".menu a").click(function() {
		$(".menu").slideUp(600);
		$(".sandwich").removeClass("active");
	});

	$(".location-block__value").click(function() {
		$(".location-list").slideToggle(200);
	});
	$(".location-list a").click(function() {
		$(".location-list").slideUp(200);
	});

	//слайдер

/*
$('.slider-advantages').each(function(){
  
		var $slider = $(this);
  $blockArrows = $(this).parent().find(".controls-arrows");
		if ($slider.length) {
			var currentSlide;
			var slidesCount;
			var sliderCounter = document.createElement('div');
			 var sliderCounter = $(this).find(".slick-dots button");

			var updateSliderCounter = function(slick, currentIndex) {
				currentSlide = slick.slickCurrentSlide() + 1;
				slidesCount = slick.slideCount;
				$(sliderCounter).html('<span>0'+slidesCount + '</span>')
			};

			$slider.on('init', function(event, slick) {
				$(this).find(".slick-dots button").append(sliderCounter);
				updateSliderCounter(slick);
				$(this).find(".slick-dots button").text(slick.slideCount);
			});

			$slider.on('afterChange', function(event, slick, currentSlide) {
				updateSliderCounter(slick, currentSlide);
			});

			$slider.slick({
				arrows: true,
				dots: true,
				infinite: true,
				prevArrow: '<div class="slick-prev slick-arrow"><div/>',
				nextArrow: '<div class="slick-next slick-arrow">Вперед <i class="fas fa-chevron-right"></i><div/>',
				slidesToShow: 1,
				slidesToScroll: 1,
				 appendArrows: $blockArrows,
			});
		} 

$(this).find(".slick-dots").addClass("container");


	});
	*/

		var texts = document.querySelectorAll(".slider-advantages .swiper-slide"),
	suball = texts.length;

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		direction: 'horizontal',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 0,
		mousewheelControl: true,
		parallax: true,
		speed: 1000,
		mousewheelReleaseOnEdges: true,
		paginationBulletRender: function (index, className) {
			return '<span class="' + className + '">' +'<span>'  + (index + 1) +' / '+suball+' </span>'+ '</span>';
		}
	});





var $btn_fix = $(".btn_top");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 100 && $btn_fix.hasClass("default") ){
		$btn_fix.removeClass("default").addClass("active");
	} else if($(this).scrollTop() <= 100 && $btn_fix.hasClass("active")) {
		$btn_fix.removeClass("active").addClass("default");
	}
	
});

if ( $(this).scrollTop() > 100 && $btn_fix.hasClass("default") ){
	$btn_fix.removeClass("default").addClass("active");
} else if($(this).scrollTop() <= 100 && $btn_fix.hasClass("active")) {
	$btn_fix.removeClass("active").addClass("default");
}



	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


