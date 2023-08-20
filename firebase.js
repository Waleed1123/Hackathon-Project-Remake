  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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



  