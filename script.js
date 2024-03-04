const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace the following code with your own login authentication logic
  if (username === 'FREE' && password === 'FREE 2024') {
    window.location.href = 'https://panel.btch.bz';
  } else {
    alert('maaf nama dan password salah coba lagi');
  }
});
