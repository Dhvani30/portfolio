// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDzYJuppUDDX6K18--B1wdvQbM_VsPsOg", // Your Web API key
  authDomain: "portfolio-4a36f.firebaseapp.com", // Your project's auth domain
  projectId: "portfolio-4a36f", // Your Project ID
  storageBucket: "portfolio-4a36f.appspot.com", // Your project's storage bucket
  messagingSenderId: "958933278835", // Your project number
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  return re.test(String(email).toLowerCase());
}

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("signup");
  const signInForm = document.getElementById("signin");

  const signUp = document.getElementById("submitSignUp");
  const signIn = document.getElementById("submitSignIn");
  const signInButton = document.getElementById("signInButton");
  const signUpButton = document.getElementById("signUpButton");

  signUp.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("rEmail").value;
    const password = document.getElementById("rPassword").value;
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;

    console.log("Sign Up Email:", email);
    console.log("Sign Up Password:", password);

    const auth = getAuth();
    const db = getFirestore();

    // Validate email and password
    if (!validateEmail(email)) {
      showMessage("Invalid email format.", "signUpMessage");
      return;
    }
    if (password.length < 6) {
      showMessage(
        "Password must be at least 6 characters long.",
        "signUpMessage"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: email,
          firstName: firstName,
          lastName: lastName,
        };
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
          .then(() => {
            showMessage("Account Created Successfully", "signUpMessage");
            window.location.replace("home.html");
          })
          .catch((error) => {
            console.error("Error writing document", error);
            showMessage("Error saving user data.", "signUpMessage");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign Up Error Code:", errorCode);
        console.error("Sign Up Error Message:", errorMessage);
        showMessage("Error: " + errorMessage, "signUpMessage");
      });
  });

  signIn.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Sign In Email:", email);
    console.log("Sign In Password:", password);

    const auth = getAuth();

    // Validate email and password
    if (!validateEmail(email)) {
      showMessage("Invalid email format.", "signInMessage");
      return;
    }
    if (password.length < 6) {
      showMessage(
        "Password must be at least 6 characters long.",
        "signInMessage"
      );
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("loggedInUserId", user.uid);
        showMessage("Login is successful!", "signInMessage");
        window.location.replace("home.html");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign In Error Code:", errorCode);
        console.error("Sign In Error Message:", errorMessage);
        showMessage("Error: " + errorMessage, "signInMessage");
      });
  });

  // Switch to Sign Up Form
  signUpButton.addEventListener("click", () => {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
  });

  // Switch to Sign In Form
  signInButton.addEventListener("click", () => {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
  });
});
