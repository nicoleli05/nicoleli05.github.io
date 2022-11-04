
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){
    name.Error.innerHTML = "Name is required";
    return false
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Please write full name";
    return false;
  }
  nameError.innerHTML = 'Valid!';
  return true;
}


function validateEmail(){

  var email = document.getElementById('contact-email').value;

  console.log(email)
  if(email.length == 0){
    emailError.innerHTML = 'Email is required'
    return false;
  }
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    emailError.innerHTML = 'Email is invalid'
    return false;
  }

  emailError.innerHTML = 'Valid!';
  return true;
}

function validateForm(){
  if(!validateName() || !validateEmail()){
    submitError.innerHTML = "Please fix error to submit";
    return false
  }
}
