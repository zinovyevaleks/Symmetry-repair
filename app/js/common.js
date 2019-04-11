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
});