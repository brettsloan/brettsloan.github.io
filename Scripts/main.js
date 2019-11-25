$(document).ready(function () {

	// Top Links
	$(".a-link").on('click', function() {
        var x = $(this).attr("alt");
        $(".a-link").removeClass("active");
        $(".a-link").removeClass("active-bar");
        $(".a-link").each(function () {
            if (($(this).attr("alt") == x) && $(this).hasClass("link-line")) {
                
                $(this).addClass("active-bar");
            } else if ($(this).attr("alt") == x) {
                $(this).addClass("active");
            }
        });
        x = x.slice(1);
        $(".switch").fadeOut(0);
        $("div#" + x).fadeIn(200);

    });
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: //left
                var x = $("span.active-bar");
                $("span.active-bar").prev("span.link-line").addClass("active-bar");
                $(x).removeClass("active-bar");
                var y = $("span.active-bar").attr("alt");
                $(".a-link").removeClass("active");
                $(".a-link").each(function () {
                    if ($(this).attr("alt") == y) {
                        $(this).addClass("active");
                    }
                });
                y = y.slice(1);
                $(".switch").fadeOut(0);
                $("div#" + y).fadeIn(200);
            break;
            case 39: //right
                var x = $("span.active-bar");
                $("span.active-bar").next("span.link-line").addClass("active-bar");
                $(x).removeClass("active-bar");
                var y = $("span.active-bar").attr("alt");
                $(".a-link").removeClass("active");
                $(".a-link").each(function () {
                    if ($(this).attr("alt") == y) {
                        $(this).addClass("active");
                    }
                });
                y = y.slice(1);
                $(".switch").fadeOut(0);
                $("div#" + y).fadeIn(200);
            break;
        }

    });

	//NavBar Corrections
	$(".mt-1").on('click', function() {
		$(".navbar-collapse").addClass("open");
		var value = $('body').css('padding-top');
		if (value === '20px') {
            $('body').css('padding-top', '+=120');
            $(".link-bar").css('bottom', '40px');
		} else {
            $('body').css('padding-top', '20px');
            $(".link-bar").css('bottom', '+=120');
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
