$(document).ready(function () {

    // Bottom Links & Bar
    //Click link for active class
    $(".a-link").on('click', function () {
        var x = $(this).attr("alt");

        //remove active & active-bar from all a-links
        $(".a-link").removeClass("active");
        $(".a-link").removeClass("active-bar");

        //cycle through a-links to find x, add active & active-bar
        $(".a-link").each(function () {
            if (($(this).attr("alt") == x) && $(this).hasClass("link-line")) {
                $(this).addClass("active-bar");
            } else if ($(this).attr("alt") == x) {
                $(this).addClass("active");
            }
        });

        //fade out on screen content and fade in linked content
        x = x.slice(1);
        $(".switch").fadeOut(0);
        $("div#" + x).fadeIn(200);
    });

    //Left & Right arrow keys to cycle through content
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: //left
                var x = $("span.active-bar");
                $(x).prev("span.link-line").addClass("active-bar");
                $(x).removeClass("active-bar");
                $(".a-link").removeClass("active");

                if ($(".a-link").hasClass("active-bar") || $(".a-link").hasClass("active")) {
                    var y = $("span.active-bar").attr("alt");
                    $(".a-link").each(function () {
                        if ($(this).attr("alt") == y) {
                            $(this).addClass("active");
                        }
                    });
                    y = y.slice(1);
                    $(".switch").fadeOut(0);
                    $("div#" + y).fadeIn(200);
                } else {
                    $(".link-line").last().addClass("active-bar");
                    $("li span").last().addClass("active");
                    var y = $("span.active-bar").attr("alt");
                    $(".a-link").each(function () {
                        if ($(this).attr("alt") == y) {
                            $(this).addClass("active");
                        }
                    });
                    y = y.slice(1);
                    $(".switch").fadeOut(0);
                    $("div#" + y).fadeIn(200);
                }
                break;
            case 39: //right
                var x = $("span.active-bar");
                $(x).next("span.link-line").addClass("active-bar");
                $(x).removeClass("active-bar");
                $(".a-link").removeClass("active");

                if ($(".a-link").hasClass("active-bar") || $(".a-link").hasClass("active")) {
                    var y = $("span.active-bar").attr("alt");
                    $(".a-link").each(function () {
                        if ($(this).attr("alt") == y) {
                            $(this).addClass("active");
                        }
                    });
                    y = y.slice(1);
                    $(".switch").fadeOut(0);
                    $("div#" + y).fadeIn(200);
                } else {
                    $(".link-line").first().addClass("active-bar");
                    $("li span").first().addClass("active");
                    var y = $("span.active-bar").attr("alt");
                    $(".a-link").each(function () {
                        if ($(this).attr("alt") == y) {
                            $(this).addClass("active");
                        }
                    });
                    y = y.slice(1);
                    $(".switch").fadeOut(0);
                    $("div#" + y).fadeIn(200);
                }
                break;
        }

    });

    //Swipe support for mobile
    var start = null;
    window.addEventListener("touchstart", function (event) {
        if (event.touches.length === 1) {
            //just one finger touched
            start = event.touches.item(0).clientX;
        } else {
            //a second finger hit the screen, abort the touch
            start = null;
        }
    });

    window.addEventListener("touchend", function (event) {
        var offset = 100;//at least 100px are a swipe
        if (start) {
            //the only finger that hit the screen left it
            var end = event.changedTouches.item(0).clientX;

            if (end > start + offset) {
                //a left -> right swipe
                var x = $("span.active-bar");
                $(x).next("span.link-line").addClass("active-bar");
                $(x).removeClass("active-bar");
                $(".a-link").removeClass("active");

                if ($(".a-link").hasClass("active-bar") || $(".a-link").hasClass("active")) {
                    var y = $("span.active-bar").attr("alt");
                    $(".a-link").each(function () {
                        if ($(this).attr("alt") == y) {
                            $(this).addClass("active");
                        }
                    });
                    y = y.slice(1);
                    $(".switch").fadeOut(0);
                    $("div#" + y).fadeIn(200);
                } else {
                    $(".link-line").first().addClass("active-bar");
                    $("li span").first().addClass("active");
                    var y = $("span.active-bar").attr("alt");
                    $(".a-link").each(function () {
                        if ($(this).attr("alt") == y) {
                            $(this).addClass("active");
                        }
                    });
                    y = y.slice(1);
                    $(".switch").fadeOut(0);
                    $("div#" + y).fadeIn(200);
                }
            }
            if (end < start - offset) {
                //a right -> left swipe
                var x = $("span.active-bar");
                $(x).prev("span.link-line").addClass("active-bar");
                $(x).removeClass("active-bar");
                $(".a-link").removeClass("active");

                if ($(".a-link").hasClass("active-bar") || $(".a-link").hasClass("active")) {
                    var y = $("span.active-bar").attr("alt");
                    $(".a-link").each(function () {
                        if ($(this).attr("alt") == y) {
                            $(this).addClass("active");
                        }
                    });
                    y = y.slice(1);
                    $(".switch").fadeOut(0);
                    $("div#" + y).fadeIn(200);
                } else {
                    $(".link-line").last().addClass("active-bar");
                    $("li span").last().addClass("active");
                    var y = $("span.active-bar").attr("alt");
                    $(".a-link").each(function () {
                        if ($(this).attr("alt") == y) {
                            $(this).addClass("active");
                        }
                    });
                    y = y.slice(1);
                    $(".switch").fadeOut(0);
                    $("div#" + y).fadeIn(200);
                }
            }
        }
    });

    //On mouse hover, toggle grid backgrounds to fade out and information to fade in
    $(".padding-none").mouseenter(function () {
        $(".card", this).fadeTo("slow", 0);
        $(".card-body", this).fadeTo("slow", 1);
    });
    $(".padding-none").mouseleave(function () {
        $(".card", this).fadeTo("slow", 1);
        $(".card-body", this).fadeTo("slow", 0);
    });

    //NavBar Corrections
    $(".mt-1").on('click', function () {
        $(this).toggleClass("change");
        var value = $(".link-bar").css("bottom");
        if (value === "40px") {
            $(".main-wrapper").css("max-height", "calc(100vh - 195px)");
            $(".link-bar").css("bottom", "165px");
        } else {
            $(".main-wrapper").css("max-height", "calc(100vh - 70px");
            $(".link-bar").css("bottom", "40px");
        }
    });
});
