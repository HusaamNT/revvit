const createUser = async ev => {
  ev.preventDefault()
  const email = document.getElementById('signup-email').value
  const username = document.getElementById('signup-username').value
  const password = document.getElementById('signup-password').value
  // TODO: Verify Confirm Password matches
  if (!email || !username || !password) {
    alert('Fill in the form') // TODO: Do this nicely
  }
  const payload = { email, username, password }
  await fetch('/api/accounts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  window.location.href = '/'
}

const signUpButton = document.getElementById('sign-up')
signUpButton.addEventListener('click', createUser)

/*
//login
const login = (username, password) =>
  fetch('/api/account/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

//account creation
const emailLog = document.querySelector('#email-login').value.trim();
const passwordLog = document.querySelector('#password-login').value.trim();

//if (email && password) {
const accountCreation = (email, username, password) =>
  fetch('api/account/login', {
    method: 'POST',
    body: JSON.stringify({ email, username, password }),
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
  fetch('/api/account/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
*/
