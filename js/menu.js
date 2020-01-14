const $btnMenu = document.querySelector('.btn_menu');
const $navHeader = document.querySelector('.header__nav');

let menuOpened = false;
const WIDTH = 768;

window.addEventListener('resize', function(){
	if(window.innerWidth > WIDTH) {
		closeMenu();
	}
});

$btnMenu.addEventListener('click', function(){
	if(!menuOpened) {
		openMenu();
	} else {
		closeMenu();
	}

	menuOpened = !menuOpened;
});

function openMenu() {
	let _top = $navHeader.getBoundingClientRect().top + 'px'

	let _style = {
		maxHeight: 'calc(100vh - '+ _top +' )',
		overflow: 'hidden'
	}

	applyStyleToNav(_style)
}

function applyStyleToNav(_style){
	Object.keys(_style).forEach( stl => {
		$navHeader.style[stl] = _style[stl]
	})
}

function closeMenu() {
	let _style = {
		maxHeight: '0px',
		overflow: 'hidden'
	}

	applyStyleToNav(_style)
}