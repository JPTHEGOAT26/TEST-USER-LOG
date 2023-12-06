var info = document.getElementById('info');
info.innerHTML = "not signed in";
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  // Do not send profile info to your backend! Use an ID token instead.
  info.innerHTML = "signed in: " + profile.getName();
        
  // Send this to the backend for authenticaton.
  var id_token = googleUser.getAuthResponse().id_token;  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://www.douglassbranton.com/yousurveyit/api/signin.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) alert('success');
      // else alert('fail: ' + xhr.responseText + xhr.status);
    }    
  }
  xhr.send('idtoken=' + id_token);
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    info.innerHTML = "not signed in";
  });
}