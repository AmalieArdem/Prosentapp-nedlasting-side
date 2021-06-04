// for å fikse at siden ikke loader i midten
// $(document).ready(function(){
//   $(this).scrollTop(0);
// });

//når du scroller ned så blir bakgrunnen sort ved å gi .test class til background id'en.

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    document.getElementById("background").className = "test";
    document.getElementById("bildeskjermer").className = "skjermeranimasjon";
    document.getElementById("download").className = "headlinebox";
  
  } else {
    document.getElementById("background").className = "";
    document.getElementById("bildeskjermer").className = "";
    document.getElementById("download").className = "";
  }
}

// window.onscroll = function() {flyttFunksjon()};

// function flyttFunksjon() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//      document.getElementsById("downloadBox").className = "test2";
//   } else {
//  document.getElementById("downloadBox").className = "test3";
//   }
// }

function moveTorch(event){
  var torch = document.getElementsByClassName("torch")[0];
  torch.style.clipPath = `circle(80px at ${event.offsetX}px ${event.offsetY}px)`;
}