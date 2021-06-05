var hamburger = document.getElementById("hamburger");
var navbarUl  = document.getElementById("navbarUl");

hamburger.addEventListener("click" ,()=>{
    navbarUl.classList.toggle("show");
})

// student box 
let box1 =document.getElementById("box1")
let box2 =document.getElementById("box2")
 
btn1.addEventListener("click" , fun)
function fun(event){
     box1.style.display = "block";
     box2.style.display = "none";
}
btn2.addEventListener("click" , fun1)
function fun1(event){
     box1.style.display = "none";
     box2.style.display = "block";
}

// scroll function
var scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.addEventListener("click" , fn)

function fn(event){
    document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


