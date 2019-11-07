if ($(window).width() > 768) {
  var lastScrollTop = 0;
  $(document).on('scroll', function () {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
          $('#navBar').fadeOut(1000);
      } else {
          $('#navBar').fadeIn(1000);
      }
      lastScrollTop = st;
  });
}

function hideNav() {
  if ($(window).width() > 768) {
    $('#navBar').fadeOut(1000);
  }
}

function myFunction(x) {
  x.classList.toggle("change");
}
if ($(window).width() < 768) {
  $(document).on('click', '.nav-link', function() {
      $(".yes").trigger('click');
      $("#navbarSupportedContent").collapse
  });
}




$(".a-link").on('click', function() {
  var x = $(this).attr("href");
  x = x.slice( 1 );
  $(".switch").fadeOut(10);
  $("div#"+x).fadeIn(800);
});

function thankYou() {
    alert("Message has been sent, Thank you!");
}
function emailForm() {
  var x = document.getElementById("email");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
$(function() {
  $('.a-link').click(function() {
    $('.a-link').removeClass("active");
    $(this).addClass("active");
  })
});
