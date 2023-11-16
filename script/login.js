let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

loginBtn.onclick = function(){
    nameField.style.maxHeight = "0"; //skjuler feltet 
    title.innerHTML = "Login"; 
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");

}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px"; //skjuler feltet 
    title.innerHTML = "Sign up"; 
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");

}