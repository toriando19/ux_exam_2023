const baseUrl = 'http://localhost:3000';
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");
const confirmPasswordField = document.getElementById("confirmPasswordField");
const passwordField = document.querySelector('input[type="password"]');
const emailField = document.querySelector('input[type="email"]');
const logoutBtn = document.getElementById('logoutBtn');

signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    confirmPasswordField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");

    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;
    const email = emailField.value;

    if (password === confirmPassword && validatePassword(password)) {
        const user = {
            email,
            password
        };

        // Send user data to JSON Server
        fetch(`${baseUrl}/users`, {
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
    const enteredEmail = emailField.value;
    const enteredPassword = passwordField.value;

    // Retrieve user data from JSON Server
    fetch(`${baseUrl}/users?email=${enteredEmail}&password=${enteredPassword}`)
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

logoutBtn.onclick = function () {
    sessionStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    // Perform further actions if needed
};

//function validatePassword(password) {
    // Password validation criteria
    //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    //return passwordRegex.test(password);
}

