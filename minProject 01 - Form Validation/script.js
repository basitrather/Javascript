const form = document.querySelector("form");
const userName = document.querySelector("#USname");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repass");
const email = document.querySelector("#email");

const userNameCheck = function () {
  if (userName.value.length < 3 || userName.value.length > 17) {
    document.querySelector("#nameError").style.display = "initial";
  } else {
    document.querySelector("#nameError").style.display = "none";
  }
};
const passwordCheck = function () {
  if (
    password.value === "" ||
    repassword.value === "" ||
    password.value !== repassword.value
  ) {
    document.querySelector("#passwordError").style.display = "initial";
  } else {
    document.querySelector("#passwordError").style.display = "none";
  }
  if (!password.value.includes("#") || !password.value.includes("*")) {
    document.querySelector("#passwordError2").style.display = "initial";
  } else {
    document.querySelector("#passwordError2").style.display = "none";
  }
};
const emailCheck = function () {
  if (email.value === "")
    document.querySelector("#emailError2").style.display = "initial";
  else document.querySelector("#emailError2").style.display = "none";
  //check if @ is present or not
  if (!email.value.includes("@")) {
    document.querySelector("#emailError").style.display = "initial";
  } else {
    document.querySelector("#emailError").style.display = "none";
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userNameCheck();
  passwordCheck();
  emailCheck();
});
