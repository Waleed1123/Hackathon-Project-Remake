// //   // Import the functions you need from the SDKs you need
// //   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
// //     import { getFirestore,  initializeFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";


// //   // TODO: Add SDKs for Firebase products that you want to use
// //   // https://firebase.google.com/docs/web/setup#available-libraries

// //   // Your web app's Firebase configuration
// //   const firebaseConfig = {
// //     apiKey: "AIzaSyBb1xNf8Yeo5n_oXvlum_HAz1VUGi8ziSo",
// //     authDomain: "hackathon-project-dcaf4.firebaseapp.com",
// //     projectId: "hackathon-project-dcaf4",
// //     storageBucket: "hackathon-project-dcaf4.appspot.com",
// //     messagingSenderId: "554789985402",
// //     appId: "1:554789985402:web:f2c91b23f1ebffbe6dafc3"
// //   };
// //   var app = firebase.initializeApp(firebaseConfig);
// //   const db = initializeFirestore(app);

// //   document.addEventListener("DOMContentLoaded", () => {

// //   const addPost = document.querySelector("#addPost");



// //   addPost.addEventListener("click", function(event){


// //     console.log("chal rahh hah")
// // //   let user =  document.getElementById("user").value;
// // //   let disc =  document.getElementById("disc").value;

// // //   let myPost = {
// // //     user,
// // //     disc

// // // }
// // // db.collection("users").add({
// // //   myPost
// // // })
// // // .then((docRef) => {
// // //   console.log("Document written with ID: ", docRef.id);
// // //   console.log("Hoo gaya")
// // // })
// // // .catch((error) => {
// // //   console.error("Error adding document: ", error.message);
// // // });

// // // event.preventDefault();

// //   })
// // })











// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
// import { getFirestore,signOut, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
// // import { signOut } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
// // 
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBb1xNf8Yeo5n_oXvlum_HAz1VUGi8ziSo",
//   authDomain: "hackathon-project-dcaf4.firebaseapp.com",
//   projectId: "hackathon-project-dcaf4",
//   storageBucket: "hackathon-project-dcaf4.appspot.com",
//   messagingSenderId: "554789985402",
//   appId: "1:554789985402:web:f2c91b23f1ebffbe6dafc3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); // Initialize Firestore using the app instance

// document.addEventListener("DOMContentLoaded", () => {
//   const addPost = document.querySelector("#addPost");

//   addPost.addEventListener("click", function (event) {
//     console.log("chal rahh hah");
//     // Your other code

//     event.preventDefault();
//   });
// });

// let logout = document.getElementById("logout");
// logout.addEventListener("click", logout = () => {


//   const auth = getAuth();
//   signOut(auth).then(() => {
//     console.log("Hoo gaya Log Out");
//     window.location.href= "./login.html"
//     // Sign-out successful.
//   }).catch((error) => {
//     console.log("Nai hua Log Out");
//     console.log(error.message);
//     // An error happened.
//   });


// });



















import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

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
const db = getFirestore(app); // Initialize Firestore using the app instance

document.addEventListener("DOMContentLoaded", () => {
  const addPost = document.querySelector("#addPost");

  addPost.addEventListener("click", function (event) {
    console.log("Button clicked");
    // Your code to add a post to Firestore

    event.preventDefault();
  });
});

let logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Logged out successfully");
      window.location.href = "./login.html";
    })
    .catch((error) => {
      console.log("Logout error:", error.message);
    });
});
