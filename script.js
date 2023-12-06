// Function to handle sign-in
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var userInfo = document.getElementById('userInfo');

  // Clear previous content
  userInfo.innerHTML = '';

  // Create list items for user information
  var nameItem = document.createElement('li');
  nameItem.textContent = 'Name: ' + profile.getName();
  userInfo.appendChild(nameItem);

  var imageItem = document.createElement('li');
  imageItem.textContent = 'Image URL: ' + profile.getImageUrl();
  userInfo.appendChild(imageItem);

  var emailItem = document.createElement('li');
  emailItem.textContent = 'Email: ' + profile.getEmail();
  userInfo.appendChild(emailItem);
}

// Function to handle sign-out
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
