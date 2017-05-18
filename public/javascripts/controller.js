
<script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAMKcjAqmsqkRssHXcvFIe0e66HsAupXOE",
    authDomain: "my-calendar-project-ce7ab.firebaseapp.com",
    databaseURL: "https://my-calendar-project-ce7ab.firebaseio.com",
    projectId: "my-calendar-project-ce7ab",
    storageBucket: "my-calendar-project-ce7ab.appspot.com",
    messagingSenderId: "11642640373"
  };
  firebase.initializeApp(config);
  var db = firebase

  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
  // An error happened.
  });

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // ...
  });

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // ...
  });

  document.getElementById("myBtn").addEventListener("click", function(){
    var password = document.getElementByName('password').value;
    var passwordTwo = document.getElementByName('password2').value;
    var email = document.getElementByName('email').value;
    var username = document.getElementByName('username').value;
    var firstName = document.getElementByName('firstname').value;
    var password = document.getElementByName('lastname').value;


});
</script>