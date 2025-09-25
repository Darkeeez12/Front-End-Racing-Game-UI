let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let date = document.getElementById("birthDate");
let terms = document.getElementById("terms");

document.getElementById("birthDate").max = "2018-01-01";


document.getElementById("subscriptionForm").addEventListener("submit", Register);

function Register(event)
{
    event.preventDefault();
    console.log("Submit");

    let isComplete = true;

    // Validation FULLNAME
    let fullNameInput = fullName.value;

    if(fullNameInput.length < 6)
    {
        document.getElementById("nameError").innerText = "FULLNAME must be at least 6 characters long";
        isComplete = false;
    }
    else
    {
        document.getElementById('nameError').innerText = "";
    }

    // Validation EMAIL
    let emailInput = email.value;

    if(!emailInput.endsWith("@gmail.com") && !emailInput.endsWith("@yahoo.com"))
    {
        document.getElementById("emailError").innerText = "EMAIL must include '@gmail.com' or '@yahoo.com'";
        isComplete = false;
    }
    else
    {
        document.getElementById('emailError').innerText = "";
    }

    // Validation BIRTHDAY
    let dateInput = date.value;

    if(dateInput.length == 0 || dateInput < 2)
    {
        document.getElementById("dateError").innerText = "Please input your BIRTHDAY";
        isComplete = false;
    }
    else
    {
        document.getElementById('dateError').innerText = "";
    }

    // Validation GENDER
    let gender = document.querySelector("input[name=gender]:checked");

    if(!gender)
    {
        document.getElementById("genderError").innerText = "GENDER must be selected";
        isComplete = false;
    }
    else
    {
        document.getElementById('genderError').innerText = "";
    }

    // Validation TERMS
    let termsCheck = terms.checked;

    if(!termsCheck)
    {
        document.getElementById("termsError").innerText = "You must agree to the Terms and Conditions";
        isComplete = false;
    }
    else
    {
        document.getElementById('termsError').innerText = "";
    }

    if(isComplete)
    {
        alert("Congratulations, you have subscribed to our news!");
    }   
    else
    {
        alert("Please fill all the form or complete all the requirements first");
    }
}