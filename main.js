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
video1.onmouseenter = function() {
    video1.setAttribute("controls", "controls")
}
video1.onmouseleave = function() {
    video1.removeAttribute("controls", "controls")
}
video2.onmouseenter = function() {
    video2.setAttribute("controls", "controls")
}
video2.onmouseleave = function() {
    video2.removeAttribute("controls", "controls")
}
video3.onmouseenter = function() {
    video3.setAttribute("controls", "controls")
}
video3.onmouseleave = function() {
    video3.removeAttribute("controls", "controls")
}
play_button.onmouseenter = function() {
    play_button.setAttribute("controls", "controls")
}
play_button.onmouseleave = function() {
    play_button.removeAttribute("controls", "controls")

}