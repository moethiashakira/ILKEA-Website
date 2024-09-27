'use strict';

/* navbar toggle */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/*  active class on header when scrolled 200px from top */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})





function emptyFieldValidation(str) {
  if (str.length == 0) {
    return true
  }
  else return false
}

function checkPass(password) {
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      return true;
    }
  }
  return false;
}

function Validate(e) {
  e.preventDefault();

  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const password = document.getElementById('password')

  if (emptyFieldValidation(name.value)) {
    alert('Name must be filled!')
  }
  else if (name.value.length < 5) {
    alert("name must be more than 5 characters")
  }
  else if (emptyFieldValidation(email.value)) {
    alert('Email Address must be filled!')
  }
  else if (!email.value.endsWith('@gmail.com')) {
    alert('Email Address must ends with "@gmail.com"')
  }
  else if (password.value == '') {
    alert('Password must be filled!')
  }
  else if (password.value.length < 8) {
    alert('Password must be minimum 8 characters!')
  }
  else {
    alert("You have successfully login.")
    location.href = "index.html"
  }
}

