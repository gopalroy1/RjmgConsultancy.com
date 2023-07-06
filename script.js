function reload(){
  
    location.reload();
}





const submitBtn = document.getElementById("form-submit");
const name = document.getElementById("name")
const phone = document.getElementById("number")
const email = document.getElementById("email")
let connectContainer = document.getElementById("connect-container");
const para = document.getElementById("form-submit-para");
// const menuItems = document.querySelector("menu-mobile-items");
const menuItems = document.getElementById("menu-mobile-items");

submitBtn.addEventListener("click",submitFun);
var counter=0;
let clicked =1;
menuItems.style.display="none";


// const slides = document.querySelectorAll(".slides");

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

//logic for sliding of images

//for making images come one  after another in x direction
// and then making their overflow hidden using parent 
// slides.forEach(
//     (slide,index)=>{
//         slide.style.left = `${index  * 100}%`;
//     }
// )

// const goNext=()=>{
//     if(counter==slides.length-1){
//         counter=0;
//     }
//     else{

//         counter++;
//     }
//     slideImage();
//     console.log("nexr");
// }
// const goPrev=()=>{
//     if(counter==0){
//         counter=slides.length-1;
//     }
//     else{

//         counter--;
//     }
//     slideImage();
// }

// const slideImage=()=>{
//     slides.forEach(
//         (slide)=>{
//             slide.style.transform = `translateX(-${counter * 100}%)`
//         }
//     )
    
// }

//logic for menu clicked 
const menuClicked=()=>{
    if (clicked===0) {
        clicked=1;
        menuItems.style.display="none";
    }
    else{
        clicked=0;
        menuItems.style.display="block";
    }
}
// setInterval(goNext,2000 );



// for testimonials styling scrolling 

const reviewContainer = document.getElementById("review-container");
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow");

reviewContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    reviewContainer.style.scrollBehavior="smooth";
    reviewContainer.scrollLeft += event.deltaY;

})

leftArrow.addEventListener("click",()=>{
 
    reviewContainer.style.scrollBehavior="smooth";
    reviewContainer.scrollLeft-= 750;
})
rightArrow.addEventListener("click",()=>{

    reviewContainer.style.scrollBehavior="smooth";
    reviewContainer.scrollLeft+= 750;
})

