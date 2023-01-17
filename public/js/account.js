
//login
const login = (username, password) =>
fetch('/api/account/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  });

  //account creation
  const emailLog = document.querySelector('#email-login').value.trim();
  const passwordLog = document.querySelector('#password-login').value.trim();

  //if (email && password) {
  const accountCreation = (email, username, password) =>
  fetch('api/account/login',{
    method: 'POST',
    body: JSON.stringify({email, username, password}),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  // if (response.ok) {
  //   document.location.replace('/');
  //   res.JSON("Logged in")
  // } else {
  //   alert('Failed to log in');
  // }
  //}
  //}
  //logout
  const logout = () =>
  fetch('/api/account/logout',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
