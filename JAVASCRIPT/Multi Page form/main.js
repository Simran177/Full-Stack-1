//selector
const form1= document.getElementById('form1');
const form2= document.getElementById('form2');
const form3= document.getElementById('form3');

const next1= document.getElementById('next1');
const next2= document.getElementById('next2');
const back1= document.getElementById('back1');
const back2= document.getElementById('back2');

const progress= document.getElementById('progress');
 //event handler

 next1.onclick= function(){
     form1.style.left="-450px";
     form2.style.left="40px";
     progress.style.width= "292px";
 }
 back1.onclick= function(){
    form1.style.left="40px";
    form2.style.left="450px";
    progress.style.width= "146px";
}

next2.onclick= function(){
    form3.style.left="40px";
    form2.style.left="-450px";
    progress.style.width= "440px";
}

back2.onclick= function(){
    form2.style.left="40px";
    form3.style.left="450px";
    progress.style.width= "292px";
}


const fname= document.getElementById('fname');
const lname= document.getElementById('lname');
const email= document.getElementById('email');
const pass1= document.getElementById('pass1');
const pass2= document.getElementById('pass2');
const small= document.querySelector('small');
const cellno= document.getElementById('cellno');
//event handler

form1.addEventListener('submit',function(e){ //anonymous function
    e.preventDefault();  //stops data submission to server because we want to validate it first
    checkInput();
});
form3.addEventListener('submit',function(e){ //anonymous function
    e.preventDefault();  //stops data submission to server because we want to validate it first
    checkInput();
});
//functions

function checkInput()
{
    const emailValue = email.value.trim();
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();
    const fnameValue = fname.value.trim(); 
    const lnameValue = lname.value.trim(); 
    const cellnoValue= cellno.value.trim();

    if(emailValue === '')
    {
        showError(email,"Emailid can't be blank");
    }
    else if(!isEmailValid(emailValue))
    {
        showError(email,"Emailid is not valid");
    }
    else{
        showSuccess(email);
    }
    if(pass1Value === '')
    {
        showError(pass1,"Password can't be blank");
    }
    else{
        showSuccess(pass1);
    }
    
    if(pass2Value === '')
    {
        showError(pass2,"Password can't be blank");
    }
    else if(pass2Value != pass1Value)
    {
        showError(pass2,"Passwords not matched");
    }
    else{
        showSuccess(pass2);
    }

    if(fnameValue === '' )
    {
        showError(fname,"Username can't be blank");
    }
    else if(lnameValue === '' )
    {
        showError(lname,"Sirname can't be blank");
    }
    else if(!isUsernameValid(fname))
    {
        showError(fname,"Username is not valid");
    }
    else if(!isUsernameValid(lname))
    {
        showError(lname,"Sir name is not valid");
    }
    else{
        showSuccess(fname);
        showSuccess(lname);
    }

    if(cellnoValue === '')
    {
        showError(cellno, "Contact no. can't be blank");
    }
    else if(!iscellnoValid(cellno)){
        showError(cellno, "Invalid contact no.");
    }
    else{
        showSuccess(cellno);
    }

}

function  showError(input,msg)
{
    const formControl= input.parentNode;
    formControl.className= 'form-control error';
    const small= formControl.querySelector('small');
    small.innerHTML = msg;

}
function  showSuccess(input)
{
    const formControl= input.parentNode;
    formControl.className= 'form-control success';
}
function isEmailValid(email)
{
    return /^([A-Za-z0-9_\.\-]+)@([A-Za-z0-9]+)\.([A-Za-z]{2,3})$/.test(email);  //2 for in , 3 for com
}

function isUsernameValid(username)
{
    return /^([a-z]+)$/.test(username);
}

function iscellnoValid(cellno)
{
    return /^[9876]\d{9}$/.test(cellno);
}