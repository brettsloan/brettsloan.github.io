function login() {  
  window.open("RIFCO/ContactInformation.html",'_self',false);
}

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
