document.addEventListener("DOMContentLoaded", function() {
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
            // Make a POST request to add the user (replace with your actual endpoint)
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
                      window.location.href = "products.html"; // Redirect to dashboard or homepage
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
    

        ////// logout //////////
      


