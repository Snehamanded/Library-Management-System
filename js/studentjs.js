document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const studentName = document.getElementById('student-name').value;
    const usn = document.getElementById('usn').value;
    const branch = document.getElementById('branch').value;
    const semister = document.getElementById('semister').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (studentName && usn && branch && semister && phoneNumber && email && password) {
      alert('Registration successful!');
      window.location.href = '../html/log_in.html';
    } else {
      alert('Please fill in all the required fields');
    }
  });