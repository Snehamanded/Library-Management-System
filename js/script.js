document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'supriya@gmail.com' && password === 'supriya@12') {
      alert('Login successful!');
      window.location.href = '../html/index.html';
    } else {
      alert('Invalid username or password');
    }
  });