window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.padding = "20px 50px 10px 50px";
    document.getElementById("nav").style.backgroundColor = "#fff";
    document.getElementById("nav").style.borderBottom = "2px solid #f4f4f4";
  }
  else {
    document.getElementById("nav").style.padding = "20px 50px 10px 50px";
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.getElementById("nav").style.borderBottom = "none";
  }
}
// see more
let showDiv = document.getElementById("hidden-cards");
let hideBtn = document.getElementById("see-more");
function seeMore() {
  showDiv.style.display = "flex";
  hideBtn.style.display = "none";
  
}
// Open page
function openWindow() { 
  
  window.location.assign("./pages/contact-us.html");

}