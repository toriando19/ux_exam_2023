document.addEventListener("DOMContentLoaded", function() {
    let signupBtn = document.getElementById("signupBtn");
    let loginBtn = document.getElementById("loginBtn");
    let title = document.getElementById("title");
    let emailField = document.querySelector('input[type="email"]');
    let passwordInput= document.getElementById("passwordInput");
    let confirmPasswordField = document.getElementById("confirmPasswordField");
    let nameField = document.getElementById("nameField");

   

    loginBtn.addEventListener('click', function () {
        confirmPasswordField.style.maxHeight = "0"; // Ensure it's hidden on login
        title.innerHTML = "Login";
        nameField.style.maxHeight = "0";
        signupBtn.classList.add("disable");
        loginBtn.classList.remove("disable");
    });

    signupBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("Button clicked");
        nameField.style.maxHeight = "60px";
        confirmPasswordField.style.maxHeight = "60px"; // Show confirm password on sign-up
        title.innerHTML = "Sign up";
        signupBtn.classList.remove("disable");
        loginBtn.classList.add("disable");
    
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
    
        // Continue with the sign-up process if everything is valid
        // You can add your sign-up API call or further processing here

    });
    
});

