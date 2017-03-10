/*jshint esversion: 6 */

$(function(){
	console.log('hello ');

	//CTA Button Animation

	$('#btn-cta').on('mouseenter', ()=>{
		// console.log('enter');
		$('#btn-cta').velocity({
			fontSize: '1.4em'
		}, {
			duration: 200
		}
		);
	});

	$('#btn-cta').on('mouseleave', ()=> {
		// console.log('leave');
		$('#btn-cta').velocity({
			fontSize: '1.2em'
		}, {
			duration: 200
		}
		);
	});


});