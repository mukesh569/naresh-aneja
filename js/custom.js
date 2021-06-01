const play = document.getElementById("play");
 const music = document.querySelector("audio");
  const img = document.getElementById("img");

 let isPlay = false;
 //play functiom
 const playMusic= ()=>{
    isPlay = true;
     music.play();
     play.classList.replace("fa-play","fa-pause");
     img.classList.add("anime");
 };
 //pause function
 const pauseMusic= ()=>{
    isPlay = false;
     music.pause();
     play.classList.replace("fa-pause","fa-play");
     img.classList.remove("anime");
 };
 play.addEventListener("click",()=>{
     isPlay ? pauseMusic() : playMusic();
 });



$(function() {
    $('.gallery-slideshow').slideshow({
      interval: 2000,
      width: 600,
      height: 450
    });
      $(".scroll-up").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".scroll-up").css("display","block");
        
      
    } else {
      $(".scroll-up").css("display","none");
    }
  });
 $(".mobile-menu").click(function(){
   $(".menu").toggle("slow");
 })
  });
  filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("Pic-column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-photo");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("myactive");
    current[0].className = current[0].className.replace(" myactive", "");
    this.className += " myactive";
  });
}
//zoom 
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.childNodes[1].childNodes[1].src; 
  expandImg.parentElement.style.display = "block";
}






 
