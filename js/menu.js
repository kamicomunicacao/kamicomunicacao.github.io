$(function(){
	$('.menu-mobile').click(function(){
		let listaMenu = $('.menu-mobile ul');
		let icone = $('.botao-menu-mobile').find('i');
		if (listaMenu.is(':hidden')) {
			icone.removeClass('fa-bars');
			icone.addClass('fa-times');
			listaMenu.slideToggle();
		} else {
			icone.removeClass('fa-times');
			icone.addClass('fa-bars');
			listaMenu.slideToggle();
		}
	});
});