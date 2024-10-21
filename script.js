document.addEventListener("DOMContentLoaded", function () {
  // Get the necessary form elements
  const signupForm = document.getElementById("signup");
  const signInForm = document.getElementById("signIn");

  // Get the necessary button elements
  const signInButton = document.getElementById("signInButton");
  const signUpButton = document.getElementById("signUpButton");

  // Ensure the signup and sign-in forms are manipulated safely
  if (signupForm) signupForm.style.display = "none"; // Hide signup by default
  if (signInForm) signInForm.style.display = "block"; // Show sign-in by default

  // Event listener for switching to the Sign In form
  if (signInButton) {
    signInButton.addEventListener("click", () => {
      if (signupForm) signupForm.style.display = "none"; // Hide signup form
      if (signInForm) signInForm.style.display = "block"; // Show sign-in form
    });
  }

  // Event listener for switching to the Sign Up form
  if (signUpButton) {
    signUpButton.addEventListener("click", () => {
      if (signInForm) signInForm.style.display = "none"; // Hide sign-in form
      if (signupForm) signupForm.style.display = "block"; // Show signup form
    });
  }
});
