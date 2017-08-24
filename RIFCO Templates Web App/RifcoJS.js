function login() {
  window.open("ContactInformation.html",'_self',false);
}

function getName() {
  var gotName = document.getElementById("usrnme").value;
  localStorage["name"] = gotName;
}

function fillBlanks() {
  var currentDate = new Date();
  Array.prototype.slice.call(
    document.getElementsByClassName('date')).forEach(function (x) {
    x.value = currentDate.toDateString();
  });
  Array.prototype.slice.call(
    document.getElementsByClassName('name')).forEach(function (x) {
    x.value = localStorage["name"];
  });
}

function eiTotal() {
  document.getElementById("EI").value =
  document.getElementById("totalOne").value -  document.getElementById("totalTwo").value;
}

$(function() {
  $('.calendar').datepicker();
} );

$(function() {
    $('#menu').click(function(){
      $('.subMenu').slideToggle();
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
