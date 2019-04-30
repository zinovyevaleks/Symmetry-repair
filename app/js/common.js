$(function () {

	// переворачивающиеся карточки
	$(".flipcard").flip({
		axis: 'y',
		trigger: 'hover'
	});

	//всплывание по наведению
	$('.portfolio-card-link').hide();

	$('.portfolio-card').hover(function () {
		$(this).find('.portfolio-card-link').slideDown(250);
	}, function () {
		$(this).find('.portfolio-card-link').slideUp(250);
	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		lazyLoad: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		},
		autoHeight:true
		// animateOut: 'fadeOut'
	});


	//переключение примеров
	// $("#lounge").click(function () {
	// 	$(".examples-slide").css('background-image', 'url(../img/desktop/examples_slide-1.jpg)');
	// });
	// $("#children").click(function () { 
	// 	$(".examples-slide").css('background-image', 'url(../img/desktop/examples_slide-2.jpg)');
	// });
	// $("#kitchen").click(function () { 
	// 	$(".examples-slide").css('background-image', 'url(../img/desktop/examples_slide-3.jpg)');
	// });
	// $("#bathroom").click(function () { 
	// 	$(".examples-slide").css('background-image', 'url(../img/desktop/examples_slide-4.jpg)');
	// });

	  //Плавная прокрутка до якоря
	  $(".anchor_link").click(function() {
		var _href = $(this).attr("href");
		$("html, body").animate({
		  scrollTop: $(_href).offset().top
		});
		return false;
		});		

		// отправка письма ajax

		$("form").submit(function () {
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				dataLayer.push({
					'event': 'symmetryForm'
				});
				alert("Спасибо, ваша заявка принята!");
				setTimeout(function () {
					// Done Functions
					
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});
		
});