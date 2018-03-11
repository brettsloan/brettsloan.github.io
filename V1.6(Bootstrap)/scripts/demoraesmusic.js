$(function() {

  // contact form animations
  $('.formButton').click(function() {
    $('#email').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#email");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
//^^JS piece taken from https://codepen.io/andrewerrico/pen/Efyrt THANK YOU!


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

function initMap() {
  var uluru = {lat: 44.255089, lng: -79.090734};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom:12,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
