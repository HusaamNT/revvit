const createUser = async ev => {
  ev.preventDefault()
  const email = document.getElementById('signup-email').value
  const username = document.getElementById('signup-username').value
  const password = document.getElementById('signup-password').value
  const checkPassword = document.getElementById('password-match').value
  // TODO: Verify Confirm Password matches
  function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    // If password not entered
    if (password1 == '')
        alert ("Please enter Password");
          
    // If confirm password not entered
    else if (password2 == '')
        alert ("Please enter confirm password");
          
    // If Not same return False.    
    else if (password1 != password2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }

    // If same return True.
    else{
        alert("Password Match: Welcome to Revvit!")
        return true;
    }
}
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
