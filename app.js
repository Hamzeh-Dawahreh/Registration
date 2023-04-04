let array =[];

let form = document.getElementById("studentsForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let username = event.target.username.value;
  let password = event.target.password.value;
  let email = event.target.email.value;
  

  if( usernameValidation(username) &&  passwordValidation(password) && emailValidation(email)){
    array.push(username);
    sessionStorage.setItem('array',JSON.stringify(array) );
  }
  form.reset();
});

function usernameValidation(username){
  const usernameRegex = /^\S+$/;

  if (usernameRegex.test(username)) {
    return true;
  } else {
    return false;
  }
}

function passwordValidation(password){
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  if (passwordRegex.test(password)) {
    return true;
  } else {
    alert("Insert more than 8 characters, with at least 1 number, uppercase, and special characters.")

    return false;
  }
}

function emailValidation(email) {
  
  let re = /\S+@\S+\.\S+/;
  if (emailValidation(email)) {
    alert("Email is valid");
  } else {
    alert("Email is invalid");
  }
  return re.test(email);


}

 
