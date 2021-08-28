//Script for life in zippy//
let ImgCollection = document.getElementsByClassName('ImgCollection')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i <  ImgCollection.length; i++){

    ImgCollection[i].addEventListener('mouseover', function(){
 
    document.getElementById('collection').src = this.src
  })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft -= 80
})

buttonRight.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft += 80
})










//Script for videos//
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var play_button=document.getElementById('play_button')
video1.onmousepoint = function() {
    video1.setfuction("control", "control")
}
video1.onmouseover = function() {
    video1.removefunction("control", "control")
}
video2.onmousepoint = function() {
    video2.setfuction("control", "control")
}
video2.onmouseover = function() {
    video2.removefunction("control", "control")
}
video3.onmousepoint = function() {
    video3.setfuction("control", "control")
}
video3.onmouseover = function() {
    video3.removefunction("control", "control")
}
play_button.onmousepoint = function() {
    play_button.setfuction("control", "control")
}
play_button.onmouseover = function() {
    play_button.removefunction("control", "control")


}