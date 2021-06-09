
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBSzo6Qb8P93aAoNEejydUmAWhiT1q8HBw",
    authDomain: "kwitter-test-2-3f740.firebaseapp.com",
    databaseURL: "https://kwitter-test-2-3f740-default-rtdb.firebaseio.com",
    projectId: "kwitter-test-2-3f740",
    storageBucket: "kwitter-test-2-3f740.appspot.com",
    messagingSenderId: "637741280702",
    appId: "1:637741280702:web:83da59927c58e7cc819def"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
  }