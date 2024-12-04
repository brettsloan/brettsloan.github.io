//BREAD GIF
function breadGifSaysHello() {
  if ($("#breadGif").css("bottom") === "0px") {
    $("#breadGif").css("bottom","-150px");
  } else {
    $('#breadGif').css("bottom","0px");
  }
}

//Run the bread gif every 5 seconds
var interval = setInterval(breadGifSaysHello, 5000);

window.onload = breadGifSaysHello();

// MENU FUNCTIONS

// Click on the menu button - toggles button animation and lowering of menu + body
$(function() {
  $('#menuButton').click(function(){
    $("#menuButton").toggleClass("change"); //button animation

    if ($("#navbar").css("top") === "0px") { //if navbar is visible, push it and the content up
      $("#navbar").css("top", "-225px");
      $("#content-wrapper").css("top","0px");
      $("#navbar").css("backgroundColor", "rgba(0,0,0,0.0)");

    } else { //if navbar isn't visible, bring it down and all the content down
      $("#navbar").css("top", "0px");
      $("#content-wrapper").css("top", "215px");
      $("#navbar").css("backgroundColor","rgba(0, 0, 0, 0.2)");
    }
  })
});

//Click on the links within the menu to unhide that section while also hidiing the rest
$(function() {
  $('.a-link').click(function() {
    $('body').addClass("fade-in-image");

    $('.a-link').removeClass("active"); //remove the 'active' class from all links
    $(this).addClass("active"); //give the 'active' clss to this clicked on link

    x = $(this).attr("data-title"); //create variable for clicked on link using the data-title attribute

    //specific to the chess page only since I wanted the background to be different
    if (x == "chess") {
      $('body').addClass("chess-body"); // if it is the chess page, add the chess background
    } else {
      $('body').removeClass("chess-body");
     }
    if (x == "stomachAche") {
      $('body').addClass("SAS-body"); // if it is the music page, add the music background
      $('.bar1').css("background-color","#adadad");
      $('.bar2').css("background-color","#adadad");
      $('.bar3').css("background-color","#adadad");
    } else {
      $('body').removeClass("SAS-body");
      $('.bar1').css("background-color","#853f19");
      $('.bar2').css("background-color","#853f19");
      $('.bar3').css("background-color","#853f19");
    }

    // add the 'hidden' class on all the content pages
    $('#landing').addClass("hidden");
    $('#stomachAche').addClass("hidden");
    $('#chess').addClass("hidden");
    $('#webDesign').addClass("hidden");
    $('#videoEditing').addClass("hidden");
    $('#twitchWidgets').addClass("hidden");

    //then remove the hidden class from clicked link
    $('#' + x).removeClass("hidden");

    setTimeout(function() {
      $('body').removeClass('fade-in-image');
  }, 1000);

  })
});
