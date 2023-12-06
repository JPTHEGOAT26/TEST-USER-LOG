function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var userName = profile.getName();

  document.getElementById('googleSignInBtn').style.display = 'none';
  document.getElementById('userBox').style.display = 'block';
  document.getElementById('userName').innerText = userName;
}
