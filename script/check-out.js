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
     if (section.style.display === 'none' ) {
        section.style.display = 'grid';
    } else {
        section.style.display = 'none';
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your order: Calculations /////////////////////////////////////////////////////////////////////////////////////

var itemCount = 1;
var itemPrice = 120;
var deliveryPrice = 120;

// Variable to accumulate the total
var totalAccumulator = (itemCount * itemPrice) + deliveryPrice;

function updateOrderInfo() {
    var itemCountElement = document.getElementById('itemCount');
    var itemPriceElement = document.getElementById('itemPrice');
    var deliveryPriceElement = document.getElementById('deliveryPrice');
    var totalElement = document.getElementById('totalPrice');
    var vatTaxesElement = document.getElementById('vatTaxesPrice');

    // Update item count and prices
    itemCountElement.textContent = itemCount + ' item(s)';
    itemPriceElement.textContent = '$' + (itemCount * itemPrice);
    deliveryPriceElement.textContent = '$' + deliveryPrice;

    // Calculate total, including VAT & Taxes
    totalAccumulator = (itemCount * itemPrice) + deliveryPrice;
    var vatTaxes = totalAccumulator * 0.2; // Assuming VAT and Taxes are 20%
    
    totalElement.textContent = '$' + totalAccumulator;
    vatTaxesElement.textContent = '$' + vatTaxes;
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Choose delivery ///////////////////////////////////////////////////////////////////////////

function delivery(checkbox) {
    var checkboxes = document.getElementsById('checkbox');

    checkboxes.forEach(function (currentCheckbox) {
        if (currentCheckbox !== checkbox) {
            currentCheckbox.checked = false;
        }
    });
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

// Confirm payment - pop-up ///////////////////////////////////////////////////////////////////////////

function submitForm() {
    var section = document.getElementById('confirm-pop-up');   // Creating the variable of the section, that is linked to the "repeat-address-info"-section in the "check-out.html"

     // Toggle the visibility of the section
     if (section.style.display === 'none') {
        section.style.display = 'grid';
    } else {
        section.style.display = 'none';
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Summary in popup - view filled form ///////////////////////////////////////////////////////////////////////////

function summary() {
    // Get form values
    var email = document.getElementById('email').value.trim();
    var name = document.getElementById('fname').value.trim() + ' ' + document.getElementById('lname').value.trim();

    // Display summary in the popup
    document.getElementById('popup-confirm-Email').textContent = 'Email: ' + email;
    document.getElementById('popup-confirm-Name').textContent = 'Name: ' + name;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cancel payment - close pop-up ///////////////////////////////////////////////////////////////////////////

function closePopup() {
    var section = document.getElementById('confirm-pop-up');   // Creating the variable of the section, that is linked to the "repeat-address-info"-section in the "check-out.html"

     // Toggle the visibility of the section
     if (section.style.display === 'grid') {
        section.style.display = 'none';
    } else {
        section.style.display = 'grid';
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////












