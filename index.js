let showPass = () => {
  let passIcon = document.querySelector("#password-icon");
  let pass = document.querySelector("#password");
  if (pass.type === "password") {
    pass.type = "text";
    passIcon.innerHTML = "&#xf070;";
  } else {
    pass.type = "password";
    passIcon.innerHTML = "&#xf06e;";
  }
};

document.querySelector("#password-icon").addEventListener("click", showPass);
document.querySelector("#copyrights").innerHTML =
  "tkp &copy; " + new Date().getFullYear();
document
  .querySelector("#email")
  .addEventListener("input", (e) => alert(e.target.value));
