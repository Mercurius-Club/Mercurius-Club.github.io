// Get references to the images and the container element
var groundCoin = document.getElementById("coin-ground");
var airCoin = document.getElementById("coin-air");
var sparkSmall = document.getElementById("spark-small");
var sparkBig = document.getElementById("spark-big");
var container = document.getElementById("download");

// Add an event listener to track mouse movement
container.addEventListener("mousemove", function(e) {
  // Get the current mouse position
  var x = e.clientX;
  var y = e.clientY;
  // Set the position of the images
  groundCoin.style.transform = "translate(" + x/70 + "px, " + -y/70 + "px)";
  airCoin.style.transform = "translate(" + -x/30 + "px, " + -y/30 + "px)";
  sparkSmall.style.transform = "translate(" + x/30 + "px, " + y/30 + "px)";
  sparkBig.style.transform = "translate(" + x/60 + "px, " + -y/60 + "px)";
});