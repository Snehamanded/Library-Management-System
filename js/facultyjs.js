document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const facultyName = document.getElementById('faculty-name').value;
    const ssn = document.getElementById('ssn').value;
    const branch = document.getElementById('branch').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // You can replace the code below with your own logic to validate the form data and register the faculty
    if (facultyName && ssn && branch && phoneNumber && email && password) {
      alert('Registration successful!');
      window.location.href = '../html/log_in.html'; // Redirect to the login page
    } else {
      alert('Please fill in all the required fields');
    }
  });