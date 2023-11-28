// Logout Functionality
let logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener('click', function () {
    // Clear the user session data
    sessionStorage.removeItem('loggedInUser');

    // Redirect to login_signup.html when logout button is clicked
    window.location.href = "login_signup.html";
});
