import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

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
const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector("#loginBtn");

    loginBtn.addEventListener("click", function (event) {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("User Login Done", user);

                // Redirect to dashboard
                window.location.href = "./dashboard.html";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });

        event.preventDefault();
    });
});
