// (function ($) {

//     $(window).load(function () {


//     });
	
// })(jQuery);
// 
// 
document.addEventListener('load',function () {
	console.log('ccc');
	const menuBtn = document.querySelector('.sfm-navicon-button');
	const xBtn = document.querySelector('.sfm-sidebar-close');


	function opacityOnChange () {
		xBtn.style.opacity = 1;
	}
	function opacityOffChange () {
		xBtn.style.opacity = 0;
	}

	menuBtn.addEventListener('click',opacityOnChange);
	xBtn.addEventListener('click',opacityOffChange);
})
