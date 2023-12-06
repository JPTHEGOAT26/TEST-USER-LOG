function onSignIn(googleUser) {
  console.log(googleUser.getBasicProfile())
}

function signOut() {
  gapi.auth2.getAuthInstance().signOut().then(function() {
    console.log('user signed out')
  })
}
