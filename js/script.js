let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

let nameInput = document.getElementById("contact-name");
let phoneInput = document.getElementById("contact-phone");
let emailInput = document.getElementById("contact-email");
let messageInput = document.getElementById("contact-message");
let submitBtn = document.getElementById("submit-btn");

function validateName() {
    let nameValue = nameInput.value;

    if (nameValue.length === 0) {
        nameError.innerHTML = `Name is required`;
        return false;
    }
    
    if (!nameValue.match(/^[A-Za-z]+\s+[A-Za-z]+$/)) {
        nameError.innerHTML = `Write full name`;
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validatePhone() {
    let phoneValue = phoneInput.value;

    if (phoneValue.length === 0) {
        phoneError.innerHTML = `Phone is required`;
        return false;
    }

    if (phoneValue.length !== 11) {
        phoneError.innerHTML = `Phone no should be 11 digits`;
        return false;
    }
    
    if (!phoneValue.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = `Only digits please`;
        return false;
    }

    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateEmail() {
    let emailValue = emailInput.value;

    if (emailValue.length === 0) {
        emailError.innerHTML = `Email is required`;
        return false;
    }

    if (!emailValue.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = `Email Invalid`;
        return false;
    }

    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateMessage() {
    let messageValue = messageInput.value;
    let required = 30;
    var left = required - messageValue.length;

    if(left > 0) {
        messageError.innerHTML = `${left} more characters required`;
        return false;
    }

    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = `please fix error to submit`;
        setTimeout(function(){submitError.style.display = "none";},3000);
        return false;
    }
}

nameInput.addEventListener('keyup', validateName);
phoneInput.addEventListener('keyup', validatePhone);
emailInput.addEventListener('keyup', validateEmail);
messageInput.addEventListener('keyup', validateMessage);
submitBtn.onclick = validateForm;