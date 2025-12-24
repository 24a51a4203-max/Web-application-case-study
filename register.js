// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDEkXua7pBmEMTbJpUs1vRM_mepuJaTo4A",
    authDomain: "register-b9b9d.firebaseapp.com",
    projectId: "register-b9b9d",
    storageBucket: "register-b9b9d.firebasestorage.app",
    messagingSenderId: "961149356152",
    appId: "1:961149356152:web:725b31275959f9679e458d",
    measurementId: "G-WCM8MJTWKG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  alert("creating account...")
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)

  //inputs
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const dob = document.getElementById('dob').value;
  const case_details = document.getElementById('case_details').value;   
  //submit button
  const submit = document.getElementById('submit');
    submit.addEventListener('click',function(event) {
        event.preventDefault();
      

    })