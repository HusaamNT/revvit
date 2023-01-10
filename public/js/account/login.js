
//frontend login
const login = (username, password) =>
fetch('/api/account/',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  });
