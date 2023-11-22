document.addEventListener("DOMContentLoaded", function() {
    let signupBtn = document.getElementById("signupBtn");
    let title = document.getElementById("title");
    let emailField = document.querySelector('input[type="email"]');
    let passwordInput = document.getElementById("passwordInput");
    let confirmPasswordField = document.getElementById("confirmPasswordField");
    let nameField = document.getElementById("nameField");

    signupBtn.addEventListener('click', async function (event) {
        event.preventDefault();
        nameField.style.maxHeight = "60px";
        confirmPasswordField.style.maxHeight = "60px"; // Show confirm password on sign-up
        title.innerHTML = "Sign up";

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
            // Simulating a successful signup for demonstration
            // Replace this with your actual fetch to the server
            // ...

            // On successful signup, redirect to login.html
            redirectToLogin();
        } catch (error) {
            console.error('Error:', error);
        }
    });

    function redirectToLogin() {
        // Redirect to login.html after successful signup
        window.location.href = "login.html";
    }
});

