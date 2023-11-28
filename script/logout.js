
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', async function () {
        console.log("Logout button clicked"); // Check if the event listener is triggered

        let loggedInUserId = sessionStorage.getItem('loggedInUserId');
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
                sessionStorage.removeItem('loggedInUser');
                window.location.href = "index.html";
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


