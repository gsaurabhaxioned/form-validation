$(document).ready(function(){
    $(".hamburger").click(function(){
         $(".menus").slideToggle();
        $(this).toggleClass("cross");
    });
});

let firstname = document.querySelector('.firstname').value,
lastname = document.querySelector('.lastname').value,
position = document.querySelector('.position').value,
company = document.querySelector('.company').value,
company_type = document.querySelector('.company-type'),
country = document.querySelector('.country'),
email = document.querySelector('.email').value,
check = document.querySelectorAll('input[type="checkbox"]'),
firstname_pattern = /^[A-Za-z]{1,20}$/,
lastname_pattern = /^[A-Za-z]{1,20}$/,
position_pattern = /^[A-Za-z]{1,20}$/,
company_pattern = /^[A-Za-z0-9]{1,20}$/,
email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
inputs = document.querySelectorAll('input');

inputs.forEach(i => {
    i.addEventListener('blur',function(){
        if(firstname === ""){
            
        }
    })
})














