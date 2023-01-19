
//login
const login = (username, password) =>
fetch('/api/accounts/login',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  });

  //account creation
  const emailLog = document.querySelector('#email-login').value.trim();
  const passwordLog = document.querySelector('#password-login').value.trim();

  //if (emailLog && password) {
  const accountCreation = (email, username, password) =>
  fetch('api/accounts/',{
    method: 'POST',
    body: JSON.stringify({email, username, password}),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (response.ok) {
    document.location.replace('/');
    res.JSON("Logged in");
    req.session.user_id = accountData.id;
    req.session.logged_in = true;
  } else {
    alert('Failed to log in');
  }
  //logout
  const logout = () =>
  fetch('/api/accounts/logout',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

