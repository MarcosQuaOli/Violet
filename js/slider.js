const $container = document.querySelector('.slider__container');
const $sliderItens = $container.querySelectorAll('.slider__itens');
const $btnLink = document.querySelectorAll('.page-link');

var currentSlide = 0;

init()

function init() {
	var _show = $container.querySelectorAll('.show_slide');

	Array.prototype.forEach.call(_show, function(sh){
		sh.classList.remove('show_slide');
	})

	$sliderItens[0].classList.add('show_slide');
	$btnLink[0].classList.add('actived');

	activedLink();
	sliderInterval();
}

function sliderInterval() {
	setInterval(function(){
		currentSlide++;
		showSlide();
	}, 5000);
}

function activedLink(){
	$btnLink.forEach(item => {
		item.addEventListener('click', function(){				
			currentSlide = item.textContent;
			showSlide();			
		});
	})
}

function showSlide() {
	let leng = $sliderItens.length;
	let slide = currentSlide % leng;
	slide = Math.abs(slide);

	var active = document.querySelector('.slideshow__link .actived');
	if(active) active.classList.remove('actived');
	$btnLink[slide].classList.add('actived');

	$container.querySelector('.show_slide').classList.remove('show_slide');
	$sliderItens[slide].classList.add('show_slide');
}