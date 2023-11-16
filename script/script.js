// Change header background color
let header = document.getElementById('site-header');

document.addEventListener('scroll', function () {

  // Get the scroll position
  let scrollPos = window.pageYOffset;

  if (scrollPos > 100) {
    header.style.backgroundColor = "#E4F2FF";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Accordion
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Search bar visibility

function removeClass() {
  let searchContainer = document.getElementById('search-container');
    searchContainer.classList.remove('hidden');
}

function addClass() {
  let searchContainer = document.getElementById('search-container');
    searchContainer.classList.add('hidden');
}
