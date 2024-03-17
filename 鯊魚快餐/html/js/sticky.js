window.onscroll = function() {myFunction3333()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction3333() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}