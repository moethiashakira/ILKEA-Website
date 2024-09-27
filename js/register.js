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
    const phone = document.getElementById('phone')
    const dob = document.getElementById('dob')
    const gender_male = document.getElementById('gender_male')
    const gender_female = document.getElementById('gender_female')
    const gender_other = document.getElementById('gender_other')
    const address = document.getElementById('address')
    const city = document.getElementById('city')
    const password = document.getElementById('password')
    const confpass = document.getElementById('confpass')
    const checkbox = document.getElementById('checkbox')

    if (emptyFieldValidation(name.value)) {
        alert('Name must be filled!')
    }
    else if (name.value.length < 5) {
        alert("Name must be more than 5 characters")
    }
    else if (emptyFieldValidation(email.value)) {
        alert('Email Address must be filled!')
    }
    else if (!email.value.endsWith('@gmail.com')) {
        alert('Email Address must ends with "@gmail.com"')
    }
    else if (phone.value == '') {
        alert('Phone Number must be filled!')
    }
    else if (phone.value.length < 8) {
        alert("Phone Number must be more than 8 characters")
    }
    else if (dob.value == '') {
        alert('Date of Birth must be filled!')
    }
    else if (!gender_male.checked && !gender_female.checked && !gender_other.checked) {
        alert("Select your Gender!");
    }
    else if (address.value == '') {
        alert('Address must be filled!')
    }
    else if (city.value == '') {
        alert('City must be filled!')
    }
    else if (password.value == '') {
        alert('Password must be filled!')
    }
    else if (password.value.length < 8) {
        alert('Password must be minimum 8 characters!')
    }
    else if (confpass.value == '') {
        alert('Re-type password must be filled!')
    }
    else if (password.value != confpass.value) {
        alert('Password not same!')
    }
    else if (!checkbox1.checked) {
        alert("You must agree with the terms and conditions!")
    }
    else {
        alert("You have successfully register.")
        location.href = "index.html"
    }
} 