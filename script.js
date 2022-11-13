document.querySelector(".toggel").addEventListener("click", () => {
  navbar();
});

function navbar() {
  for(let i=0;i<4;i++){ var navitem = document.querySelectorAll(".nav-item")[i].style.display="block"}
 ;
  document.querySelector(".toggel").style.display="none"
  // var navitem = document.querySelectorAll(".nav-item")[1].style.display="block";
 
  // var navitem = document.querySelectorAll(".nav-item")[2].style.display="block";

  document.querySelector(".cross").style.display="block";
  
}

var check = (document.querySelector("#mobile").checked = true);

document.querySelector("#email").addEventListener("click", () => {
  document.querySelector(".email").style.display = "block";
  document.querySelector(".mobile").style.display = "none";
  document.querySelector("#select").style.display = "none";
});

document.querySelector("#mobile").addEventListener("click", () => {
  document.querySelector(".email").style.display = "none";
  document.querySelector(".mobile").style.display = "block";
  document.querySelector("#select").style.display = "block";
});

document.querySelector(".isro").addEventListener("click", force);
function force() {
  document.querySelector(".key").style.display = "block";
  document.querySelector(".tisro").style.display = "block";
  document.querySelector(".isro").style.display = "none";
}

document.querySelector(".tisro").addEventListener("click", () => {
  document.querySelector(".key").style.display = "none";
  document.querySelector(".isro").style.display = "block";
  document.querySelector(".tisro").style.display = "none";
});

document.querySelector(".isro-1").addEventListener("click", force1);
function force1() {
  document.querySelector(".key-1").style.display = "block";
  document.querySelector(".tisro-1").style.display = "block";
  document.querySelector(".isro-1").style.display = "none";
}

document.querySelector(".tisro-1").addEventListener("click", () => {
  document.querySelector(".key-1").style.display = "none";
  document.querySelector(".isro-1").style.display = "block";
  document.querySelector(".tisro-1").style.display = "none";
});

document.querySelector(".isro-2").addEventListener("click", force2);
function force2() {
  document.querySelector(".key-2").style.display = "block";
  document.querySelector(".tisro-2").style.display = "block";
  document.querySelector(".isro-2").style.display = "none";
}

document.querySelector(".tisro-2").addEventListener("click", () => {
  document.querySelector(".key-2").style.display = "none";
  document.querySelector(".isro-2").style.display = "block";
  document.querySelector(".tisro-2").style.display = "none";
});
