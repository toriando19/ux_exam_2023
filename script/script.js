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