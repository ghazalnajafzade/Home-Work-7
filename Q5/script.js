const email = document.querySelector("#email");
function controller(e) {
  e.preventDefault();
  if (email.value.includes("@")) {
    generateTost("Your email has been successfully");
  } else {
    generateTost("Please enter @ in your email");
  }
}
