/*// Function to fetch logo and app name from the server and update HTML elements
function updateLogoAndTitle() {
    fetch('http://34.30.158.215:8080/logoName')
        .then(response => response.json())
        .then(data => {
            // Update the logo image src
            document.getElementById('logoImage').src = data.logo;
            // Update the title text
            document.getElementById('pageTitle').textContent = data.appName;
        })
        .catch(error => {
            console.error('Error fetching logo and app name:', error);
        });
}
*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('nameLogoForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the updated logo and app name from the form
        const logo = document.querySelector('input[type="file"]');
        const appName = document.getElementById('appName').value;

        const logoFile = logo.files[0];

        // Create FormData object and append the logo file
        const formData = new FormData();
        formData.append('logo', logoFile);

        // Send the data to the server
        fetch('http://34.30.158.215:8080/new-logo', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => {
            console.error('Error updating logo:', error);
        });

        fetch('http://34.30.158.215:8080/new-name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ appName: appName })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => {
            console.error('Error updating app name:', error);
        });
    });
});