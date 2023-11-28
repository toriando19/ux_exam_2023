logoutBtn.addEventListener('click', async function () {
    let loggedInUserId = sessionStorage.getItem('loggedInUserId');
    let loggedInUserEmail = sessionStorage.getItem('loggedInUserEmail');

    try {
        const deleteResponse = await fetch(`http://localhost:3000/users/${loggedInUserId}`, {
            method: 'DELETE',
        });

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


