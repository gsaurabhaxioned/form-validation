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
    checkboxerror = document.querySelector('.checkboxerror'),
    name_pattern = /^[A-Za-z]{1,20}$/,
    position_pattern = /^[A-Za-z]{1,20}$/,
    company_pattern = /^[A-Za-z0-9]{1,20}$/,
    email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    company_type = document.querySelector('.company-type'),
    country_type = document.querySelector('.country-type');

function validate(e) {
    e.preventDefault();
    let firstname = document.querySelector('.firstname').value,
        lastname = document.querySelector('.lastname').value,
        position = document.querySelector('.position').value,
        company = document.querySelector('.company').value,
        email = document.querySelector('.email').value,
        checked_boxes = document.querySelectorAll('input[type="checkbox"]:checked');
    firstnameerror.innerText = "";
    lastnameerror.innerText = "";
    positionerror.innerText = "";
    companyerror.innerText = "";
    companytypeerror.innerText = "";
    countryerror.innerText = "";
    emailerror.innerText = "";
    checkboxerror.innerText = "";

    if (firstname === "") {
        firstnameerror.innerText = "please enter firstname";
    } else if (!firstname.match(name_pattern)) {
        firstnameerror.innerText = "name can include alphabates only and characters between 1 to 20";
    } else if (lastname === "") {
        lastnameerror.innerText = "please enter lastname";
    } else if (!lastname.match(name_pattern)) {
        lastnameerror.innerText = "name can include alphabates only and characters between 1 to 20";
    } else if (position === "") {
        positionerror.innerText = "please enter position";
    } else if (!position.match(position_pattern)) {
        positionerror.innerText = "position name can include alphabates only and characters between 1 to 20";
    } else if (company === "") {
        companyerror.innerText = "enter your company";
    } else if (!company.match(company_pattern)) {
        companyerror.innerText = "company name can include alphabates or numericals only and characters between 1 to 20";
    } else if (company_type.selectedIndex === 0) {
        companytypeerror.innerText = "select company type";
    } else if (country.selectedIndex === 0) {
        countryerror.innerText = "select country";
    } else if (email === "") {
        emailerror.innerText = "enter your email";
    } else if (!email.match(email_pattern)) {
        emailerror.innerText = "email is not valid";
    } else if (checked_boxes.length !== 1) {
        checkboxerror.innerText = "select one option"
    } else {
        alert("form filled successfully");
    }
}

firstname.addEventListener('blur', function () {
    let firstname = document.querySelector('.firstname').value;
    if (firstname === "") {
        firstnameerror.innerText = "please enter firstname";
    } else if (!firstname.match(name_pattern)) {
        firstnameerror.innerText = "name can include alphabates only and characters between 1 to 20";
    } else {
        firstnameerror.innerText = "";
    }
})

lastname.addEventListener('blur', function () {
    let lastname = document.querySelector('.lastname').value;
    if (lastname === "") {
        lastnameerror.innerText = "please enter lastname";
    } else if (!lastname.match(name_pattern)) {
        lastnameerror.innerText = "name can include alphabates only and characters between 1 to 20";
    } else {
        lastnameerror.innerText = "";
    }
})

position.addEventListener('blur', function () {
    let position = document.querySelector('.position').value;
    if (position === "") {
        positionerror.innerText = "please enter position";
    } else if (!position.match(position_pattern)) {
        positionerror.innerText = "position name can include alphabates only and characters between 1 to 20";
    } else {
        positionerror.innerText = "";
    }
})

company.addEventListener('blur', function () {
    let company = document.querySelector('.company').value;
    if (company === "") {
        companyerror.innerText = "enter your company";
    } else if (!company.match(company_pattern)) {
        companyerror.innerText = "company name can include alphabates or numericals only and characters between 1 to 20";
    } else {
        companyerror.innerText = "";
    }
})

email.addEventListener('blur', function () {
    let email = document.querySelector('.email').value;
    if (email === "") {
        emailerror.innerText = "enter your email";
    } else if (!email.match(email_pattern)) {
        emailerror.innerText = "email is not valid";
    } else {
        emailerror.innerText = "";
    }
})

company_type.addEventListener('blur', function () {
    if (company_type.selectedIndex === 0) {
        companytypeerror.innerText = "please select company";
    } else {
        companytypeerror.innerText = "";
    }
})

country.addEventListener('blur', function () {
    if (country.selectedIndex === 0) {
        countryerror.innerText = "please select country";
    } else {
        countryerror.innerText = "";
    }
})
