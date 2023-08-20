import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyBb1xNf8Yeo5n_oXvlum_HAz1VUGi8ziSo",
        authDomain: "hackathon-project-dcaf4.firebaseapp.com",
        projectId: "hackathon-project-dcaf4",
        storageBucket: "hackathon-project-dcaf4.appspot.com",
        messagingSenderId: "554789985402",
        appId: "1:554789985402:web:f2c91b23f1ebffbe6dafc3"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("#loginBtn");
  const auth = getAuth();

  loginBtn.addEventListener("click", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let secPassword = document.getElementById("secPassword").value;

    if (password === secPassword) {
      console.log("password is same");
      
      // Create the user with email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Login Done", user);
          window.location.href = "./login.js"
        })
        .catch((error) => {
          alert("Wrong info")
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      alert("Enter Correct Password");
      console.log("password is different");
    }

    event.preventDefault();
  });
});
