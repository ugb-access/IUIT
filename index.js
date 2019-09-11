window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav").style.padding = "20px 50px 10px 50px";
    document.getElementById("nav").style.backgroundColor = "#fff";
  }
  else {
    document.getElementById("nav").style.padding = "20px 50px 10px 50px";
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
}