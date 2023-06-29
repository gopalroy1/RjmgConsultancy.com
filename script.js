const submitBtn = document.getElementById("form-submit");
const name = document.getElementById("name")
const phone = document.getElementById("number")
const email = document.getElementById("email")
let connectContainer = document.getElementById("connect-container");
const para = document.getElementById("form-submit-para");
submitBtn.addEventListener("click",submitFun);

function submitFun(){
    if (name.value.length<=0) {
        alert("Please enter your name");
        return;
    }
    else if(phone.value===null || phone.value.length!=10){
        alert("Enter proper phone number");
        return;
    }
    else if(email.value.length<=0 || !email.value.includes("@") || !email.value.includes(".")){
        alert("Enter valid email");
        return;
    }
    
    para.innerText ="Hello "+name.value+" form submitted sucessfully";
    


}