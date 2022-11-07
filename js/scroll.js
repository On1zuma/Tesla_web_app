var voiture = document.getElementById("teslaCar");

var info = document.getElementById("info");
var isChromium = window.chrome; // if (isChromium !== null && typeof isChromium !== "undefined") {

window.addEventListener("scroll", function (e) {
  var scroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scroll <= 88) {
    voiture.style.opacity = (100 - scroll) / 100;
  }
  if (scroll >= 88) {
    info.style.opacity = 0.5;
    voiture.style.opacity = 0.12;
  } else {
    info.style.opacity = 1;
  }
});
