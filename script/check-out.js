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