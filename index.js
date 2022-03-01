var a=document.querySelectorAll(".drum");
var k=document.querySelectorAll("audio");
for(let i=0; i<8; i++)
{
  a[i].addEventListener("click",function () {
    k[i].play();
    a[i].classList.add("pressed");
    setTimeout(function () {
      a[i].classList.remove("pressed"),2000
    });
  });
}


document.addEventListener("keydown",function (event) {
    drumsound(event.key);
});


function drumsound(key)
{
  switch(key)
  {
    case 'a':
      var n=new Audio("sounds/snare.mp3");
      n.play();
    case 's':
      var n1=new Audio("sounds/tom-1.mp3");
      n1.play();
    case 'd':
      var n2=new Audio("sounds/tom-2.mp3");
      n2.play();
    case 'j':
      var n3=new Audio("sounds/tom-3.mp3");
      n3.play();
    case 'k':
      var n4=new Audio("sounds/tom-4.mp3");
      n4.play();
    case 'w':
      var n5=new Audio("sounds/kick-bass.mp3");
      n5.play();
    case 'l':
      var n6=new Audio("sounds/crash.mp3");
      n6.play();
  }
}
