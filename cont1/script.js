// Log a message to the console when the form is submitted
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  });
  