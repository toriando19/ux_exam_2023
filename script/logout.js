document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn'); // Replace 'yourButtonId' with the actual ID of your button

    logoutBtn.addEventListener('click', async function () {
        console.log("Logout button clicked"); // Check if the event listener is triggered

        let loggedInUserId = sessionStorage.getItem('loggedInUserId');
        let loggedInUserEmail = sessionStorage.getItem('loggedInUserEmail');
        console.log("User ID:", loggedInUserId); // Check if user data is retrieved correctly

        try {
            const deleteResponse = await fetch(`http://localhost:3000/users/${loggedInUserId}`, {
                method: 'DELETE',
            });
            console.log("Delete Response:", deleteResponse); // Log deleteResponse

            if (deleteResponse.ok) {
                console.log('User data deleted successfully');
                sessionStorage.removeItem('loggedInUserId');
                sessionStorage.removeItem('loggedInUserEmail');
                window.location.href = "login_signup.html";
            } else {
                console.error('Failed to delete user data. Status:', deleteResponse.status);
                const errorMessage = await deleteResponse.text();
                console.error('Error message:', errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});


