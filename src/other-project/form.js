const fieldEmptyError = "field can't be empty";
const passwordError = "password must be longer than 8 characters";
const emailError = "enter valid email";
const checkboxError = "check at leats 3 box";

document.getElementById("btn").addEventListener("click", handleSubmit);;

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function valid(){
    let valid = true;

    const elements = document.querySelectorAll(".error");
    elements.forEach(e => e.remove());

    let checkedNum = 0;
    
    document.querySelectorAll("input").forEach(element => {
        if(element.type == "checkbox" && element.checked){
            checkedNum++;
        }
        
        if(element.id == "password" && element.value.length < 8){
            createErrorParagraph(passwordError, element.parentElement);
            valid = false;
        }
        else if(element.id == "email" && !isValidEmail(element.value)){
            createErrorParagraph(emailError, element.parentElement);
            valid = false;
        }else if (element.value.length == 0){
            createErrorParagraph(fieldEmptyError, element.parentElement);
            valid = false;
        }
    });
    
    if (checkedNum < 3){
        createErrorParagraph(checkboxError, document.getElementById("checkboxes").parentElement);
        valid = false;
    }

    return valid;
}

function createErrorParagraph(text, element){
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error");
    errorMessage.innerText = text;
    element.appendChild(errorMessage);
}

function handleSubmit(e){
    e.preventDefault();
    if(valid()){
        window.location.href = "midterm.html";
    }
}