$(document).ready(function() {

	$('#job-carousel').jcarousel({
		animation:'slow',
		visible: 9,
		scroll: 1,
		wrap: 'circular'
	});

	$(' .sliderjob .btn-prev').click(function() {
		$('#job-carousel').jcarousel('scroll', '-=1');
	});

	$('.sliderjob .btn-next').click(function() {
		$('#job-carousel').jcarousel('scroll', '+=1');
	});

	
});
