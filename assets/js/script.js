$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".menus").slideToggle();
        $(this).toggleClass("cross");
    });
});

let firstnameerror = document.querySelector('.firstnameerror'),
    lastnameerror = document.querySelector('.lastnameerror'),
    positionerror = document.querySelector('.positionerror'),
    companyerror = document.querySelector('.companyerror'),
    companytypeerror = document.querySelector('.companytypeerror'),
    countryerror = document.querySelector('.countryerror'),
    emailerror = document.querySelector('.emailerror'),
    checkboxerror = document.querySelector('.checkboxerror');


// function validate(e) {
//     e.preventDefault();
//     let firstname = document.querySelector('.firstname').value,
//         lastname = document.querySelector('.lastname').value,
//         position = document.querySelector('.position').value,
//         company = document.querySelector('.company').value,
//         email = document.querySelector('.email').value,
//         checked_boxes = document.querySelectorAll('input[type="checkbox"]:checked');
//     firstnameerror.innerText = "";
//     lastnameerror.innerText = "";
//     positionerror.innerText = "";
//     companyerror.innerText = "";
//     companytypeerror.innerText = "";
//     countryerror.innerText = "";
//     emailerror.innerText = "";
//     checkboxerror.innerText = "";

//     if (firstname === "") {
//         firstnameerror.innerText = "please enter firstname";
//     } else if (!firstname.match(name_pattern)) {
//         firstnameerror.innerText = "name can include alphabates only and characters between 1 to 20";
//     } else if (lastname === "") {
//         lastnameerror.innerText = "please enter lastname";
//     } else if (!lastname.match(name_pattern)) {
//         lastnameerror.innerText = "name can include alphabates only and characters between 1 to 20";
//     } else if (position === "") {
//         positionerror.innerText = "please enter position";
//     } else if (!position.match(position_pattern)) {
//         positionerror.innerText = "position name can include alphabates only and characters between 1 to 20";
//     } else if (company === "") {
//         companyerror.innerText = "enter your company";
//     } else if (!company.match(company_pattern)) {
//         companyerror.innerText = "company name can include alphabates or numericals only and characters between 1 to 20";
//     } else if (company_type.selectedIndex === 0) {
//         companytypeerror.innerText = "select company type";
//     } else if (country.selectedIndex === 0) {
//         countryerror.innerText = "select country";
//     } else if (email === "") {
//         emailerror.innerText = "enter your email";
//     } else if (!email.match(email_pattern)) {
//         emailerror.innerText = "email is not valid";
//     } else if (checked_boxes.length !== 1) {
//         checkboxerror.innerText = "select one option"
//     } else {
//         alert("form filled successfully");
//     }
// }

let name_pattern = /^[A-Za-z]{1,20}$/,
    position_pattern = /^[A-Za-z]{1,20}$/,
    company_pattern = /^[A-Za-z0-9]{1,20}$/,
    email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    company_type = document.querySelector('.company-type'),
    country_type = document.querySelector('.country-type'),
    form = document.querySelector('form');

const allInputs = document.querySelectorAll('form input');
const select_element = document.querySelectorAll('.select-element');

const validateInputField = (input, errorField) => {
    console.log('input1', input.getAttribute('class'), errorField);
    if (input.getAttribute('class') === 'firstname' && input.value === '') {
        errorField.innerHTML = 'please enter firstname';
    } else if (
        input.getAttribute('class') === 'firstname' &&
        !input.value.match(name_pattern)
    ) {
        errorField.innerText =
            'name can include alphabates only and characters between 1 to 20';
    } else if (input.getAttribute('class') === 'lastname' && input.value === '') {
        errorField.innerText = 'please enter lastname';
    } else if (
        input.getAttribute('class') === 'lastname' &&
        !input.value.match(name_pattern)
    ) {
        errorField.innerText =
            'name can include alphabates only and characters between 1 to 20';
    } else if (input.getAttribute('class') === 'position' && input.value === '') {
        errorField.innerText = 'please enter position';
    } else if (
        input.getAttribute('class') === 'position' &&
        !input.value.match(position_pattern)
    ) {
        errorField.innerText =
            'position name can include alphabates only and characters between 1 to 20';
    } else if (input.getAttribute('class') === 'company' && input.value === '') {
        errorField.innerText = 'enter your company';
    } else if (
        input.getAttribute('class') === 'company' &&
        !input.value.match(company_pattern)
    ) {
        errorField.innerText =
            'company name can include alphabates or numericals only and characters between 1 to 20';
    } else if (input.getAttribute('id') === 'company-type' && input.selectedIndex === 0) {
        errorField.innerText = 'please select company';
    } else if (input.getAttribute('id') === 'country' && input.selectedIndex === 0) {
        errorField.innerText = 'please select country';
    } else if (input.getAttribute('class') === 'email' && input.value === '') {
        errorField.innerText = 'enter your email';
    } else if (
        input.getAttribute('class') === 'email' &&
        !input.value.match(email_pattern)
    ) {
        errorField.innerText = 'email is not valid';
    } else {
        errorField.innerText = '';
    }
};

for (let input of allInputs) {
    input.addEventListener('blur', function () {
        if (input.type !== 'checkbox' && input.type !== 'submit') {
            validateInputField(input, input.nextSibling.nextSibling);
        }
    });
}


for (let select of select_element) {
    select.addEventListener('blur', function () {
        validateInputField(select, select.nextSibling.nextSibling);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let input of allInputs) {
        if (input.type !== 'checkbox' && input.type !== 'submit') {
            validateInputField(input, input.nextSibling.nextSibling);
        }

    }

    for (let select of select_element) {
        validateInputField(select, select.nextSibling.nextSibling);
    }


})