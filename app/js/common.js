$(function () {

	// переворачивающиеся карточки
	$(".flipcard").flip({
		axis: 'y',
		trigger: 'hover'
	});

	//всплывание по наведению
	$('.portfolio-card-link').hide();

	$('.portfolio-card').hover(function () {
		$(this).find('.portfolio-card-link').slideDown();
	}, function () {
		$(this).find('.portfolio-card-link').slideUp();
	});


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

	  //Плавная прокрутка до якоря
	  $(".anchor_link").click(function() {
		var _href = $(this).attr("href");
		$("html, body").animate({
		  scrollTop: $(_href).offset().top
		});
		return false;
		});		
		
});