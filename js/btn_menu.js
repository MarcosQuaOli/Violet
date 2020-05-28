$(document).ready(() => {
	$('.bar-btn').click(() => {
    $('.navbar').slideToggle();
  })
  
  $('.navbar').click(() => {
    $('.navbar').slideUp();
  })

	$(window).resize(() => {
		(window.innerWidth > 768) ? $('.navtop').css('display', 'block') : $('.navtop').css('display', 'none');
	})
})