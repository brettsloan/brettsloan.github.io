$(document).ready(function () {

	// Top Links
	$(".a-link").on('click', function() {
		var x = $(this).attr("alt");
		x = x.slice( 1 );
		$(".switch").fadeOut(200);
		$("div#"+x).fadeIn(2000);
	});

	//NavBar Corrections
	$(".mt-1").on('click', function() {
		$(".navbar-collapse").addClass("open");
		var value = $('body').css('padding-top');
		if (value === '20px') {
			$('body').css('padding-top', '+=120');
		} else {
			$('body').css('padding-top', '20px');
		}
	});

	$(document).on('click', function (event) {
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("open");
		if (_opened === true && !clickover.hasClass("mt-1")) {
			$(".mt-1").click();
			$(".navbar-collapse").removeClass("open");
		}
	});

});
