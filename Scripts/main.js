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

    $(function () {
      var today = new Date();
      var birthDate = new Date("October 23, 1992 00:01:01");
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      accurateAge = age;
      return age;
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
            if (end < start - offset) {
                //a right -> left swipe
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
        $(".main-wrapper").toggleClass("open");
    });




    var landingPageText = [
      "█",
      "H█",
      "He█",
      "Hel█",
      "Hell█",
      "Hello█",
      "Hello █",
      "Hello W█",
      "Hello Wo█",
      "Hello Wor█",
      "Hello Worl█",
      "Hello World█",
      "Hello World!█",
      "Hello World!"
    ];

    var landingPageTextTwo = [
      "█",
      "M█",
      "My█",
      "My █",
      "My n█",
      "My na█",
      "My nam█",
      "My name█",
      "My name █",
      "My name i█",
      "My name is█",
      "My name is █",
      "My name is B█",
      "My name is Br█",
      "My name is Bre█",
      "My name is Bret█",
      "My name is Brett█",
      "My name is Brett."
    ];

    var landingPageTextThree = [
      "█",
      "I█",
      "I'█",
      "I'm█",
      "I'm █",
      "I'm 3█",
      "I'm 32█",
      "I'm 32 █",
      "I'm 32 y█",
      "I'm 32 ye█",
      "I'm 32 yea█",
      "I'm 32 year█",
      "I'm 32 years█",
      "I'm 32 years █",
      "I'm 32 years o█",
      "I'm 32 years ol█",
      "I'm 32 years old█",
      "I'm 32 years old █",
      "I'm 32 years old &█",
      "I'm 32 years old & █",
      "I'm 32 years old & I█",
      "I'm 32 years old & I:"
    ];

    var text = [
      "█",
      "C█",
      "Co█",
      "Cod█",
      "Code█",
      "Code █",
      "Code w█",
      "Code we█",
      "Code web█",
      "Code webs█",
      "Code websi█",
      "Code websit█",
      "Code website█",
      "Code websites█",
      "Code websites█",
      "Code websites█",
      "Code websites&nbsp",
      "Code websites&nbsp",
      "Code websites&nbsp",
      "Code websites█",
      "Code websites█",
      "Code websites█",
      "Code websites&nbsp",
      "Code websites&nbsp",
      "Code websites&nbsp",
      "Code websites█",
      "Code websites█",
      "Code websites█",
      "Code websites&nbsp",
      "Code websites&nbsp",
      "Code websites&nbsp",
      "Code website█",
      "Code websit█",
      "Code websi█",
      "Code webs█",
      "Code web█",
      "Code we█",
      "Code w█",
      "Code █",
      "Code█",
      "Cod█",
      "Co█",
      "C█",
      "█",
      "C█",
      "Cr█",
      "Cre█",
      "Crea█",
      "Creat█",
      "Create█",
      "Create █",
      "Create a█",
      "Create ap█",
      "Create app█",
      "Create appl█",
      "Create appli█",
      "Create applic█",
      "Create applica█",
      "Create applicat█",
      "Create applicati█",
      "Create applicatio█",
      "Create application█",
      "Create applications█",
      "Create applications█",
      "Create applications█",
      "Create applications&nbsp",
      "Create applications&nbsp",
      "Create applications&nbsp",
      "Create applications█",
      "Create applications█",
      "Create applications█",
      "Create applications&nbsp",
      "Create applications&nbsp",
      "Create applications&nbsp",
      "Create applications█",
      "Create applications█",
      "Create applications█",
      "Create applications&nbsp",
      "Create applications&nbsp",
      "Create applications&nbsp",
      "Create application█",
      "Create applicatio█",
      "Create applicati█",
      "Create applicat█",
      "Create applica█",
      "Create applic█",
      "Create appli█",
      "Create app█",
      "Create ap█",
      "Create a█",
      "Create █",
      "Create█",
      "Creat█",
      "Crea█",
      "Cre█",
      "Cr█",
      "C█",
      "█",
      "D█",
      "Do█",
      "Do █",
      "Do o█",
      "Do ot█",
      "Do oth█",
      "Do othe█",
      "Do other█",
      "Do other █",
      "Do other s█",
      "Do other sh█",
      "Do other shi█",
      "Do other sh█",
      "Do other s█",
      "Do other st█",
      "Do other stu█",
      "Do other stuf█",
      "Do other stuff█",
      "Do other stuff█",
      "Do other stuff█",
      "Do other stuff&nbsp",
      "Do other stuff&nbsp",
      "Do other stuff&nbsp",
      "Do other stuff█",
      "Do other stuff█",
      "Do other stuff█",
      "Do other stuff&nbsp",
      "Do other stuff&nbsp",
      "Do other stuff&nbsp",
      "Do other stuff█",
      "Do other stuff█",
      "Do other stuff█",
      "Do other stuff&nbsp",
      "Do other stuff&nbsp",
      "Do other stuff&nbsp",
      "Do other stuf█",
      "Do other stu█",
      "Do other st█",
      "Do other s█",
      "Do other █",
      "Do other█",
      "Do othe█",
      "Do oth█",
      "Do ot█",
      "Do o█",
      "Do █",
      "Do█",
      "D█",
      "█"
      ];

    var flashingBlock = [
        "█",
        "█",
        "█",
        "&nbsp",
        "&nbsp",
        "&nbsp"
    ];

    let activeIndex = 0;
    var counter = 0;
    var counterLanding = 0;
    var counterLandingTwo = 0;
    var counterLandingThree = 0;
    var blinkingCounter = 0;
    var elem = document.getElementById("rewrite-text");
    var elemLanding = document.getElementById("rewrite-landing-text");
    var elemLandingTwo = document.getElementById("rewrite-landing-text-two");
    var elemLandingThree = document.getElementById("rewrite-landing-text-three");
    var blinkingElem = document.getElementById("blinkingP");
    var inst = setInterval(change, 100);
    var instLanding = setInterval(changeLanding, 100);
    var instLandingTwo = setInterval(changeLandingTwo, 100);
    var instLandingThree = setInterval(changeLandingThree, 100);
    var blinkingInst = setInterval(changeBlinking, 100);  



    function changeLanding() {
      elemLanding.innerHTML = landingPageText[counterLanding];
      counterLanding++;
      if (counterLanding >= landingPageText.length) {
        clearInterval(instLanding);
      }
    }

    function changeLandingTwo() {
      if (counterLanding >= landingPageText.length) {
        elemLandingTwo.innerHTML = landingPageTextTwo[counterLandingTwo];
        counterLandingTwo++;
        if (counterLandingTwo >= landingPageTextTwo.length) {
          clearInterval(instLandingTwo);
        }
      }
    }

    function changeLandingThree() {
        if (counterLandingTwo >= landingPageTextTwo.length) {
  
          elemLandingThree.innerHTML = landingPageTextThree[counterLandingThree];
          counterLandingThree++;
          if (counterLandingThree >= landingPageTextThree.length) {
            clearInterval(instLandingThree); // uncomment this if you want to stop refreshing after one cycle
          }
        }
      }

      function changeBlinking() {
        blinkingElem.innerHTML = flashingBlock[blinkingCounter];
        blinkingCounter++;
        if (blinkingCounter >= flashingBlock.length) {
            blinkingCounter = 0;
        }
      }

    function change() {
      if (counterLandingThree >= landingPageTextThree.length) {

        elem.innerHTML = text[counter];
        counter++;
        if (counter >= text.length) {
          counter = 0;
          // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
        }
      }
    }

});
