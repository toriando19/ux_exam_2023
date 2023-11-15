// Change header background color
let header = document.getElementById('site-header');

document.addEventListener('scroll', function () {

  // Get the scroll position
  let scrollPos = window.pageYOffset;

  if (scrollPos > 100) {
    header.style.backgroundColor = "#001c55";
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



// Check-out-form visibility ///////////////////////////////////////////////////////////////////////////

//Skal fixes...

document.getElementById('form').addEventListener('input', function () {
  // Check if both name and email fields are filled
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();

  if (name !== '' && email !== '') {
      // If both fields are filled, show the hidden content
      document.getElementById('hiddenContent').style.display = 'block';
  } else {
      // If any field is empty, hide the content
      document.getElementById('hiddenContent').style.display = 'none';
  }
});

 /////////////////////////////////////////////////////////////////////////////////////////////////////////