$(function () {

	// переворачивающиеся карточки
	$(".flipcard").flip({
		axis: 'y',
		trigger: 'hover'
	});

	//всплывание по наведению

	function windowSize() {
		if ($(window).width() <= '767') {
			$('.portfolio-card-link').show();
		}
	}
	$(window).on('load resize', windowSize);

	$('.portfolio-card-link').hide();

	$('.portfolio-card').hover(function () {
		$(this).find('.portfolio-card-link').slideDown(250);
	}, function () {
		$(this).find('.portfolio-card-link').slideUp(250);
	});

	//Карусель в портфолио
	$('.portfolio-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		lazyLoad: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		},
		autoHeight: true
		// animateOut: 'fadeOut'
	});

	$('.objects-logo-carousel').owlCarousel({
		loop: true,
		margin: 50,
		stagePadding: 20,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		},
		navText: [
			'<img src="./img/icons/Button_slide_prew.svg">',
			'<img src="./img/icons/Button_slide_next.svg">'
		],
		//   autoWidth:true,
	})


	//переключение примеров
	$("#lounge").click(function () {
		$(".examples-slide").css('background-image', 'url(../img/desktop/examples_slide-1.jpg)');
	});
	$("#children").click(function () {
		$(".examples-slide").css('background-image', 'url(../img/desktop/examples_slide-2.jpg)');
	});
	$("#kitchen").click(function () {
		$(".examples-slide").css('background-image', 'url(../img/desktop/examples_slide-3.jpg)');
	});
	$("#bathroom").click(function () {
		$(".examples-slide").css('background-image', 'url(../img/desktop/examples_slide-4.jpg)');
	});

	//Умный дом
	$("#smartHomeControl").hide();
	$("#smartHomeSecurity").hide();

	$(".smart-home__multimedia").click(function () {
		$('.smart-home__card').hide();
		$("#smartHomeMultimedia").fadeIn();
	});
	$(".smart-home__control").click(function () {
		$('.smart-home__card').hide();
		$("#smartHomeControl").fadeIn();
	});
	$(".smart-home__security").click(function () {
		$('.smart-home__card').hide();
		$('#smartHomeSecurity').fadeIn();
	});

	$('.info__text').hide();
	// $('.info__dot').hover(function () {
	// 		// over
	// 		$(this).next('.info__text').fadeIn();
	// 	}, function () {
	// 		// out
	// 		$(this).next('.info__text').fadeOut();
	// 	}
	// );
	$('.info__dot').click(function () {
		$(this).next('.info__text').fadeToggle();
	});

	//Плавная прокрутка до якоря
	$(".anchor_link").click(function () {
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

	//Маска ввода телефона
	$(".input-phone").mask("+7 (999) 999-99-99");

});