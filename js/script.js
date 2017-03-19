/*jshint esversion: 6 */

$(function(){
	console.log($('.nav-links-mobile-container ul li'));

	function init(){
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
			// $('.nav-links-mobile-container').toggleClass('active');

			if($('.nav-links-mobile-container').hasClass('enter-active')){
				$('.nav-links-mobile-container').removeClass('enter-active');
				setTimeout(()=>{
					$('.nav-links-mobile-container').addClass('leave');
				}, 50);
				setTimeout(()=>{
					$('.nav-links-mobile-container').removeClass('enter').addClass('leave-active');
				}, 250);
				setTimeout(()=> {
					navContentRemove();
				}, 350);
			} else {
				$('.nav-links-mobile-container').removeClass('leave');
				setTimeout(()=>{
					$('.nav-links-mobile-container').removeClass('leave-active').addClass('enter');
				}, 50);
				setTimeout(()=>{
					$('.nav-links-mobile-container').addClass('enter-active');
				}, 100);
				setTimeout(()=> {
					navContentFadeIn();
				}, 350);
			}

			//Fade-in animation for nav contents
			function navContentFadeIn(){
				$('.nav-links-mobile-container ul li:nth-child(1)').velocity({
					opacity: 1
				}, {
					duration: 1000
				});
				$('.nav-links-mobile-container ul li:nth-child(2)').velocity({
					opacity: 1
				}, {
					duration: 1000
				});
				$('.nav-links-mobile-container ul li:nth-child(3)').velocity({
					opacity: 1
				}, {
					duration: 1000
				});
				$('.nav-links-mobile-container ul li:nth-child(4)').velocity({
					opacity: 1
				}, {
					duration: 1500
				});
				$('.nav-links-mobile-container ul li:nth-child(5)').velocity({
					opacity: 1
				}, {
					duration: 2000
				});
				$('.nav-links-mobile-container ul li:nth-child(6)').velocity({
					opacity: 1
				}, {
					duration: 2000
				});
			}

			function navContentRemove(){
				$('.nav-links-mobile-container ul li').velocity({
					opacity: 0
				}, {
					duration: 1000
				});
			}
			// $('.nav-links-mobile-container span').toggleClass('nav-item-hidden');

			// $('.nav-links-mobile-container ul li').toggleClass('nav-item-hidden');

			
			
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
	}

	init();

});