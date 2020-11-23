//selector

const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const pass1= document.getElementById('pass1');
const pass2= document.getElementById('pass2');
const small= document.querySelector('small');

//event handler

form.addEventListener('submit',function(e){
    e.preventDefault();  //stops data submission to server because we want to validate it first
    checkInput();
});
//functions

function checkInput()
{
    const usernameValue = username.value.trim();  //trim so that if only whitespace given as input then it should eliminate those spaces so that valid input only considered
    const emailValue = email.value.trim();
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();

    // console.log(usernameValue);
    if(usernameValue === '')
    {
        showError(usernameValue,"Username can't be blank");
    }
    else{
        showSuccess(usernameValue);
    }

    if(emailValue === '')
    {
        showError(email,"Emailid can't be blank");
    }
    else{
        showSuccess(emailValue);
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email,"Emailid is not valid");
    }

    if(pass1Value === '')
    {
        showError(pass1Value,"Password can't be blank");
    }
    else{
        showSuccess(pass1);
    }
    
    if(pass2Value === '')
    {
        showError(pass2Value,"Password can't be blank");
    }
    else if(pass2Value != pass1Value)
    {
        showError(pass2Value,"Passwords not matched");
    }
    else{
        showSuccess(pass2);
    }

}

function  showError(input,msg)
{
    const formControl= input.parentNode;
    formControl.className= 'form-control error';
    const small= formControl.querySelector('small');
    small.innerHTML = 

}
function  showSuccess(input,msg)
{
    const formControl= input.parentNode;
    formControl.className= 'form-control success';

}
function isEmailValid(email)
{
    return /^([A-Za-z0-9_\.\-]+)@([A-Za-z0-9]+)\.([A-Za-z]{2,3})$/.test(email);  //2 for in , 3 for com
}

//Practical-19 username can't be capital letter and can't contain special symbols 