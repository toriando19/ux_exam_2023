// Change header background color
let header = document.getElementById('site-header');

document.addEventListener('scroll', function() {
  
  // Get the scroll position
  let scrollPos = window.pageYOffset;
  
  if ( scrollPos > 100 ) {
    header.style.backgroundColor = "#001c55";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Accordion
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}