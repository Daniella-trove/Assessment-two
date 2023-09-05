function toggleImage() {
  // Get the current image source.
  const currentImageSrc = document.getElementById("product-image").src;

  // Get the other image source.
  const otherImageSrc = "image/7.jpg";

  // Set the new image source.
  document.getElementById("product-image").src = otherImageSrc;
}

document.getElementById("toggle-image").addEventListener("click", toggleImage);




// Functionality
let input = document.getElementById("input");
function toggleFeature() {
  console.log(input.value); 
  if(input.type == "text"){
    input.type="password";
    add.innerHTML = "<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>"
  }else{
    input.type="text"; 
    add.innerHTML = "<i class=\"fa fa-eye-slash\" aria-hidden=\"true\"></i>"
  }
}
let add = document.getElementById("add");
add.addEventListener("click",toggleFeature);




let long = "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod gdsjhsdgbhgf sdf dfbmsfjsfjsfj"
let short = "A short description"
let description = document.getElementById("description");
description.innerText = "Short Description";

let showMore = document.getElementById("showMore");

showMore.addEventListener("click",()=>{
  if(description.innerText == short){
    description.innerText = long;
    showMore.innerHTML = "Show Less"
  }else{
    description.innerText = short;
    showMore.innerHTML = "Show More"
  }
})