$(function(){

	let curSlide = 0;
	let delay = 5;
	let maxSlide = $('.banner-single').length -1;

	initSlider();
	changeSlide();

	function initSlider() {
		$('.banner-single').hide();
		$('.banner-single').eq(0).show();
		for (let i = 0; i <= maxSlide; i++) {
			let content = $('.bullets').html();
			if (i == 0) {
				content += '<span class="active-slider"></span>';
			} else {
				content += '<span></span>';
			}
			$('.bullets').html(content);
		}
	}

	function changeSlide() {
		setInterval(function(){
			// stop() para todas as outras animações para dar preferência â atual
			$('.banner-single').eq(curSlide).stop().fadeOut(1000);
			curSlide++;
			if (curSlide > maxSlide) {
				curSlide = 0;
			}
			$('.banner-single').eq(curSlide).stop().fadeIn(1000);

			// troca bullets da navegação do slider
			$('.bullets span').removeClass('active-slider');
			$('.bullets span').eq(curSlide).addClass('active-slider');

		}, delay * 1000);
	}

	$('body').on('click', '.bullets span', function(){
		// this faz referência ao objeto que foi clicado
		let currentBullet = $(this);

		// esconde o slide anterior
		$('.banner-single').eq(curSlide).stop().fadeOut(1000);


		// index() é o número do elemento que foi clicado
		curSlide = currentBullet.index();

		// mostra o próximo slide
		$('.banner-single').eq(curSlide).stop().fadeIn(1000);

		$('.bullets span').removeClass('active-slider');
		currentBullet.addClass('active-slider');
	});
});