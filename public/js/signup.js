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