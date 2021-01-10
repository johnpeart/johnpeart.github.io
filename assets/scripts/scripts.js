function toggleMenu() {
  var menu = document.getElementById("header-menu-links");
  menu.classList.toggle("open");
  
  var menu = document.getElementById("header-menu-toggle-image");
  menu.classList.toggle("open");
}

var accordian = document.getElementsByClassName("expand-button");
var i;

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}