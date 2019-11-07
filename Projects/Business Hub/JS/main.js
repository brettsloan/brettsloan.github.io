/*LOGIN JS*/
var users = [
  "Example.1@example.net",
  "Example.2@example.net",
  "Guest"
];
function upperCaseUserName(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function login() {
  var userName = document.getElementById("usrnme").value;
  userName = upperCaseUserName(userName);
  users.forEach(function(x) {
    if(userName === x) {
      window.open("RifcoHomePage.html",'_self',false);
    }
  });
}

/*HomePage JS*/
$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  $('a').on('click', function() {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  $('.aLink').on('click', function() {
    var x = $(this).attr("href");
    x = x.slice( 1 );
    $('.switch').hide(600, 'linear');
    $('div#'+x).show(600, 'linear');
  });
  var clipboard = new Clipboard('.sub');
  clipboard.on('success', function(e) {
      console.log(e);
  });
  clipboard.on('error', function(e) {
      console.log(e);
      alert("Error");
  });
});
