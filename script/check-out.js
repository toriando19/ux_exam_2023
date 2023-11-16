/////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// Cart dropdown /////////////////////////////////////////////////////////////////////////////////////

function cart_dropdown() {
    var section = document.getElementById('order-info');   // Creating the variable of the section, that is linked to the "repeat-address-info"-section in the "check-out.html"

     // Toggle the visibility of the section
     if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'grid';
    } else {
        section.style.display = 'none';
    }
}

function toggleSection() {
    var section = document.getElementById('sectionToToggle');

    // Toggle the visibility of the section
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Delivery to same address ///////////////////////////////////////////////////////////////////////////

function same_address() {
    var checkbox = document.getElementById('repeat-address');       // Creating the variable of the checkbox, that is linked to the "Deliver to same address"-checkbox in the "check-out.html"
    var section = document.getElementById('repeat-address-info');   // Creating the variable of the section, that is linked to the "repeat-address-info"-section in the "check-out.html"

    // If the checkbox is checked, hide the section; otherwise, show it
    if (checkbox.checked) {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////










