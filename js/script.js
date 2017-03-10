/*jshint esversion: 6 */

$(function(){
	console.log('hello ');

	//Parallax Header BG
	$('#bg-container').fallings({
		velocity: 0.2,
		initialPosition: 0,
		bgParallax: true,
		bgPercent: "50%",
		onClass: "fallings-visible",
		offClass: "fallings-invisible"
	});

	//CTA Button Animation

	// $('#btn-cta').on('mouseenter', ()=>{
	// 	$('#btn-cta').velocity({
	// 		fontSize: '1.4em'
	// 	}, {
	// 		duration: 200
	// 	}
	// 	);
	// });

	// $('#btn-cta').on('mouseleave', ()=> {
	// 	$('#btn-cta').velocity({
	// 		fontSize: '1.2em'
	// 	}, {
	// 		duration: 200
	// 	}
	// 	);
	// });


});