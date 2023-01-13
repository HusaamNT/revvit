
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
  const accountCreation = (email, username, password) =>
  fetch('api/account',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, username, password})
  });

  //logout
  const logout = () =>
  fetch('/api/account/logout',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
