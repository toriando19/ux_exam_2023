/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cart dropdown /////////////////////////////////////////////////////////////////////////////////////

function cart_dropdown() {
    var section = document.getElementById('check-out-order-info');   // Creating the variable of the section, that is linked to the "repeat-address-info"-section in the "check-out.html"

     // Toggle the visibility of the section
     if (section.style.display === 'none' ) {
        section.style.display = 'grid';
    } else {
        section.style.display = 'none';
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your order: Calculations /////////////////////////////////////////////////////////////////////////////////////




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


    // Summary in popup - view filled form ///////////////////////////////////////////////////////////////////////////

    // Get form values
    const email                 = document.getElementById('check-out-email').value;
    const phonenumber           = document.getElementById('check-out-phone-number').value;
    const firstname             = document.getElementById('check-out-fname').value;
    const lastname              = document.getElementById('check-out-lname').value;

    const deliveryaddress       = document.getElementById('address').value;
    const deliveryzipcode       = document.getElementById('zip-code').value;
    const deliverycity          = document.getElementById('city').value;
    
    const cardnumber            = document.getElementById('ccnumber').value;
    const cardmonth             = document.getElementById('expmonth').value;
    const cardyear              = document.getElementById('expyear').value;
    const cardcvv               = document.getElementById('cvv').value;

    // Display values in the HTML
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Email:</p>           <span id="outputEmail">${email}</span>
        <p>Phonenumber:</p>     <span id="outputName">${phonenumber}</span>
        <p>Name:</p>            <span id="outputName">${firstname} ${lastname}</span>
        <br> <br>
        <p>Address:</p>         <span id="outputName">${deliveryaddress} 
                                <br> ${deliveryzipcode} ${deliverycity} 
        <br> <br>
        <p>Creditcard:</p>      <span id="outputName">${cardnumber} 
                                <br> ${cardmonth} ${cardyear} 
                                <br> ${cardcvv} </span>
    `;
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

// Confirm payment - clear localstorage - return to frontpage ///////////////////////////////////////////////////////////////////////

function clearLocalStorage() {
    localStorage.clear();
    alert("Thank you for your order! We will send you an email with the confirmation!");

    window.location.href = "index.html"; // Return to frontpage after confirm purchase //
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////










