loginBtn.addEventListener('click', async function () {
    console.log('button clicked');

    let loginEmail = emailField.value;
    let loginPassword = passwordInput.value;

    console.log('Login Email:', loginEmail); // Check if correct email is retrieved
    console.log('Login Password:', loginPassword); // Check if correct password is retrieved

    try {
        console.log(`Fetching: http://localhost:3000/users?email=${loginEmail}&password=${loginPassword}`);
        const response = await fetch(`http://localhost:3000/users?email=${loginEmail}&password=${loginPassword}`);

        if (response.ok) {
            const userData = await response.json();
            console.log('User Data:', userData); // Log the retrieved user data

            if (userData.length > 0) {
                console.log('User found:', userData[0]); // Log the user object
                sessionStorage.setItem('loggedInUserId', userData[0].id);
                sessionStorage.setItem('loggedInUserEmail', loginEmail);
                window.location.href = "frontpage.html";
            } else {
                console.error('No user found for provided credentials');
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


