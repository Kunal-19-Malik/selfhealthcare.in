


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


var inputmail = document.getElementById("subsmail");

inputmail.onclick = function() {
    alert("Thank you for visiting Self Health Care...!!");
} 

var inputmail = document.getElementById("contactus_mail");

inputmail.onclick = function() {
    alert("Thank you for visiting Self Health Care...!!");
} 
