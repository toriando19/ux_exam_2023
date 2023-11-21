const baseUrl = 'http://localhost:3000';

let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let emailField = document.querySelector('input[type="email"]');

// Retrieve specific password input fields by their IDs
let passwordField = document.getElementById('passwordField');
let confirmPasswordField = document.getElementById('confirmPasswordField');
console.log(confirmPasswordField);
signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    confirmPasswordField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");

    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;
    const isValidPassword = validatePassword(password); // Declaration and assignment of isValidPassword

    console.log('Entered Password:', password);
    console.log('Confirmed Password:', confirmPassword);
    console.log('Is Password Valid?', isValidPassword);
    console.log(confirmPasswordField);


    if (password === confirmPassword && isValidPassword) {
        const user = {
            email: emailField.value,
            password
        };

        // Send user data to JSON Server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            if (response.ok) {
                alert('User signed up successfully!');
                // Perform further actions if needed
            } else {
                alert('Failed to sign up user.');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert("Passwords should match and meet the criteria.");
    }
};

loginBtn.onclick = function () {
    // Add login functionality here, check if the entered credentials match any user in the JSON file
    const enteredEmail = emailField.value;
    const enteredPassword = passwordField.value;

    // Retrieve user data from JSON Server
    fetch(`http://localhost:3000/users?email=${enteredEmail}&password=${enteredPassword}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Correct login, store email in sessionStorage
                sessionStorage.setItem('loggedInUser', enteredEmail);
                alert('Logged in successfully!');
                // Perform further actions if needed
            } else {
                alert('Invalid email or password.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

// Logout functionality
// Assuming you have a logout button with ID "logoutBtn"
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.onclick = function () {
    sessionStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    // Perform further actions if needed
};

function validatePassword(password) {
    // Password validation criteria
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(password);
}

