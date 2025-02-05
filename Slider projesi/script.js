const nextIcon = document.querySelector(".next");
const imageContainer = document.querySelector(".imageContainer");
const imgs=document.querySelectorAll('img');
const prevIcon = document.querySelector(".prev");

let timeout;
let currentImg = 1;

prevIcon.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});


nextIcon.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  if(currentImg>imgs.length){
    currentImg=1;
  }
  else if(currentImg<1){
    currentImg=imgs.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
  imageContainer.style.transition = "transform 0.5s ease-in-out";
timeout=setTimeout(()=>{
  currentImg++;
  updateImg();
},3000)

}


updateImg();

const menuIcon = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeIcon = document.querySelector(".fa-xmark");

menuIcon.addEventListener("click", () => {
  sidebar.classList.add("showSidebar");
});

closeIcon.addEventListener("click", () => {
  sidebar.classList.remove("showSidebar");
});