
// Login Functionality
let loginBtn = document.getElementById("loginBtn");
let emailField = document.querySelector('input[type="email"]');
let passwordInput = document.getElementById("passwordInput");

loginBtn.addEventListener('click', async function () {
    console.log('button clicked');

    let loginEmail = emailField.value;
    let loginPassword = passwordInput.value;

    try {
        // Fetch user data from JSON Server for authentication
        const response = await fetch(`http://localhost:3000/users?email=${loginEmail}&password=${loginPassword}`);

        if (response.ok) {
            const userData = await response.json();
            if (userData.length > 0) {
                // Successfully logged in
                sessionStorage.setItem('loggedInUser', loginEmail);
                window.location.href = "index.html"; // Redirect to dashboard or homepage
            } else {
                console.error('Invalid credentials');
                // Show an error message for invalid credentials
                // Example: alert("Invalid email or password. Please try again.");
            }
        } else {
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error)
    }

});


