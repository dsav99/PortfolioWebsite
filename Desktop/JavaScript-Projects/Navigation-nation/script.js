const menuBars = document.querySelector(".menu-bars");
const overlay = document.getElementById("overlay");

menuBars.addEventListener('click',function(){
    if (overlay.style.display === "none") {
        overlay.style.display = "block";
      } else {
        overlay.style.display = "none";
      }
});

overlay.addEventListener('click',function(){
    if (overlay.style.display === "none") {
        overlay.style.display = "block";
      } else {
        overlay.style.display = "none";
      }
});