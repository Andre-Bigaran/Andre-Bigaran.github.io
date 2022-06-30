jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});

$(function(){
	$('section#content article div.btn').click(function(){
		$(this).siblings('p.box').slideToggle();	
		if($(this).text() == "Learn more"){
			$(this).text("Show less");
		}else{
			$(this).text("Learn more");
		}
	});
});

document.addEventListener('DOMContentLoaded',function(event){

	var dataText = [ "Integrity.", "Commitment", "Alls - We are better together!"];
	
	function typeWriter(text, i, fnCallback) {
	  if (i < (text.length)) {
	   document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  

		setTimeout(function() {
		  typeWriter(text, i + 1, fnCallback)
		}, 100);
	  }

	  else if (typeof fnCallback == 'function') {

		setTimeout(fnCallback, 700);
	  }
	}

	 function StartTextAnimation(i) {
	   if (typeof dataText[i] == 'undefined'){
		  setTimeout(function() {
			StartTextAnimation(0);
		  }, 20000);
	   }

	  if (i < dataText[i].length) {

	   typeWriter(dataText[i], 0, function(){

		 StartTextAnimation(i + 1);
	   });
	  }
	}

	StartTextAnimation(0);
  });


  $(function() {
	$('.material-card > .mc-btn-action').click(function () {
		var card = $(this).parent('.material-card');
		var icon = $(this).children('i');
		icon.addClass('fa-spin-fast');

		if (card.hasClass('mc-active')) {
			card.removeClass('mc-active');

			window.setTimeout(function() {
				icon
					.removeClass('fa-arrow-left')
					.removeClass('fa-spin-fast')
					.addClass('fa-bars');

			}, 800);
		} else {
			card.addClass('mc-active');

			window.setTimeout(function() {
				icon
					.removeClass('fa-bars')
					.removeClass('fa-spin-fast')
					.addClass('fa-arrow-left');

			}, 800);
		}
	});
});

$(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
