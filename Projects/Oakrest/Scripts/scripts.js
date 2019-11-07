// // Load the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// // Replace the 'ytplayer' element with an <iframe> and
// // YouTube player after the API code downloads.
// var player;
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('ytplayer', {
//     height: '360',
//     width: '640',
//     videoId: 'qjTzJsjIuAI'
//   });
// }

$(".a-link").on('click', function() {
  var x = $(this).attr("href");
  x = x.slice( 1 );
  $(".switch").fadeOut(10);
  $("div#"+x).fadeIn(800);
});

$(function() {
  $('.a-link').click(function() {
    $('.a-link').removeClass("active");
    $(this).addClass("active");
  })
});
