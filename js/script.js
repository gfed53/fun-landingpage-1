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

	//Header Load Animation
	$('#bg-container h1 span:nth-child(1)').velocity({
		opacity: 1
	}, {
		duration: 1000
	});
	$('#bg-container h1 span:nth-child(2)').velocity({
		opacity: 1
	}, {
		duration: 1500
	});
	$('#bg-container h1 span:nth-child(3)').velocity({
		opacity: 1
	}, {
		duration: 2000
	});
	$('#bg-container h1 span:nth-child(4)').velocity({
		opacity: 1
	}, {
		duration: 2500
	});
	$('#bg-container h1 span:nth-child(5)').velocity({
		opacity: 1
	}, {
		duration: 3000
	});

	//Hamburger Nav Icon Animation
	$('#nav-toggle').on('click', ()=> {
		$('#nav-toggle').toggleClass('active');
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