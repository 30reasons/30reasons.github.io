//
// Toggling poster info
//

function togglePosterInfo() {
	$('.poster__info-open').each(function(){
		$(this).on('click', function(event){
			var target = $( $(this).attr('href') );	
			target.find('.poster__info').addClass('is-open').removeClass('is-closed');
			$('.carousel').flickity('resize');
			event.preventDefault();
		});
	});
	$('.poster__info-close').each(function(){
		$(this).on('click', function(event){
			var target = $( $(this).attr('href') );	
			target.find('.poster__info').addClass('is-closed').removeClass('is-open');
			$('.carousel').flickity('resize');
			event.preventDefault();
		});
	});
}

//
// Animated jump links
//

function animateScroll() {
	$('a.js-animate-scroll').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('body').addClass('is-scrolling');
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500, function(){
				$('body').removeClass('is-scrolling');
			});
		}
	});
}

function initPage(){

	// your functions go here

	console.log('page loaded');
  togglePosterInfo();
  animateScroll();

};