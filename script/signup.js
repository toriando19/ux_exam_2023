
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");

    // Signup Functionality
    let signupBtn = document.getElementById("signupBtn");
    let emailField = document.querySelector('input[type="email"]');
    let passwordInput = document.getElementById("passwordInput");
    let confirmPasswordField = document.getElementById("confirmPasswordField");

    signupBtn.addEventListener('click', async function (event) {
        event.preventDefault();

        let email = emailField.value;
        let password = passwordInput.value;
        let confirmPassword = confirmPasswordField.querySelector('input[type="password"]').value;

        // Password validation logic
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[a-zA-Z0-9]).{8,20}$/;
        let isPasswordValid = passwordRegex.test(password);

        if (password !== confirmPassword) {
            // Display an error for password mismatch
            alert("Passwords do not match");
            return;
        } else if (!isPasswordValid) {
            // Display an error for invalid password format
            alert("Password must be between 8 and 20 characters, contain lowercase and uppercase letters, numbers, and special characters.");
            return;
        }

        try {
            // Make a POST request to add the user
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Redirect to login page after successful signup
                window.location.href = "login.html";
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
