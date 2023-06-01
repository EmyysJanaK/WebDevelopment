// Handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Prepare the form data to send to the server
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
  
    // Send the form data to the server
    fetch('/send-email', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally display a success message to the user
      } else {
        console.log('Error sending email');
        // Optionally display an error message to the user
      }
    })
    .catch(function(error) {
      console.log('Error:', error);
      // Optionally display an error message to the user
    });
  });
  