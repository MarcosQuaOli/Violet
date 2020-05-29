$(document).ready(() => {
	/* Selected Button */
	$('.portfolio__btn').click(function(){
		$('.portfolio__btn').removeClass('btn--on');
		$(this).toggleClass('btn--on'); 
	});

	filtering("all");

	$('[data-target]').click((e) => { 
		let target = $(e.target).attr('data-target');

		filtering(target);
	});

	// Função para filtrar as imagens que serão selecionadas
	function filtering(target) {				
		$('[data-filter~="all"]').each(function() {
			let filter = $(this).attr('data-filter').split(" ");

			let filterType = filter.some((e) => {return e === target});

			(filterType) ? $(this).show(1000) : $(this).hide(800);			
		});
	} 
})

