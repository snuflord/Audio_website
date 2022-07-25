document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; // email address RE. 

    if(!re.test(email.value)) { 
       email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid'); 
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/; // phone RE. ? allows optional characters etc

    if(!re.test(phone.value)) { 
       phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid'); 
    }
}