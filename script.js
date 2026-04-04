const roles = [
"Full Stack Developer",
"Python Developer",
"Java Developer",
"UI/UX Designer"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){

currentText = roles[i];

if(!isDeleting){
document.getElementById("typing").innerHTML =
currentText.substring(0,j++);
}else{
document.getElementById("typing").innerHTML =
currentText.substring(0,j--);
}

if(j == currentText.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(j == 0){
isDeleting = false;
i++;
if(i == roles.length) i = 0;
}

setTimeout(type,100);
}

type();

function hireMe(){
alert("Thanks for visiting Daksh Kumawat's Portfolio!");
}