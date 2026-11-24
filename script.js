// // 1
// let input = document.getElementById("input");
// let btn = document.getElementById("btn");
// const form = document.getElementById("myform");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   alert("form submitted succesfully");
// });

// //2
// form.addEventListener("submit", () => {
//   if (input.value.trim() == "") {
//     alert("name is required");
//   } else {
//     alert("success");
//   }
// });

// // Task 3: Email Validation
// const email = document.getElementById("email");
// form.addEventListener("submit", () => {
//   if (email.value.trim().includes("@")) {
//     alert("email is ok");
//   } else {
//     alert("invalid email");
//   }
// });

// // Task 4: Password Length Check
// const Password = document.getElementById("pass");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (Password.value.length < 6) {
//     alert("pass greater than 6 char");
//   } else {
//     alert("login successfully");
//   }
// });

// // Task 5: Show Error Message in DOM
// const para = document.getElementById("result");
// form.addEventListener("submit", () => {
//   if (!email.value.trim().includes("@")) {
//     para.textContent = "invalid mail ";
//   } else {
//     para.textContent = "correct mail";
//   }
// });
// task 6 : reset
const form = document.getElementById("myform");
const input = document.getElementById("input");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const para = document.getElementById("result");
const resetbtn = document.getElementById("resetbtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = input.value.trim();
  const emailValue = email.value.trim();
  const passValue = pass.value;

  if (nameValue === "") {
    para.textContent = "Name is required";
    alert("Name is required");
    return;
  }

  if (!emailValue.includes("@")) {
    para.textContent = "Please use a correct email";
    alert("Please use a correct email");
    return;
  }

  if (passValue.length < 6) {
    para.textContent = "Password must be at least 6 characters";
    alert("Password must be at least 6 characters");
    return;
  }

  para.textContent = "Form Submitted Successfully";
  alert("Form Submitted Successfully");
});

resetbtn.addEventListener("click", () => {
  form.reset();
  para.textContent = "";
});
