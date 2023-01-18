const login = async ev => {
  ev.preventDefault()
  const username = document.getElementById('login-username').value
  const password = document.getElementById('login-password').value
  if (!username || !password) {
    alert('Fill in the form') // TODO: Do this nicely
  }
  const payload = { username, password }
  await fetch('/api/accounts/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  window.location.href = '/'
}

const signUpButton = document.getElementById('login')
signUpButton.addEventListener('click', login)