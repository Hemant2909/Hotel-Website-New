//Automatic slider Code

 var slider = document.getElementsByClassName('slides')
 
 var sliderContaine= document.getElementsByClassName('slides-cover')[0]
 
 var j= 0;
 var i = 0;
 var firstFunction = 
function (){
 setIntervalOne= window.setInterval(function(){ 
     j++
  i=i-100
  
  sliderContaine.style.left= i+ '%'

  
    
if(j>slider.length-1){

  i=i-i

  sliderContaine.style.left= 0+ '%'
  j=0;
 
}
},2500)}

firstFunction()

 
 //typewriter effect ;
var typewriter= document.getElementsByClassName('typewriter')[0].children[0]

  
 var textTypewriter = " '' This is Only an Elegent destination for Vacation ,Choose best from best Hotels of your Choice'' "
 var countNumber=0
 var typer= Array.from(textTypewriter)
 
var intervalTwo =setInterval(
 function typewritere(){
   
   if (countNumber<typer.length) {
     typewriter.innerHTML+=textTypewriter.charAt(countNumber)
     countNumber++
   } 
   if (countNumber==typer.length) {
     clearInterval(intervalTwo)
     
   }
   
 },50)
 
 //Button Slider
var outSliderCarrier= document.getElementsByClassName('outletSlideCarrier')[0]
var outSlide= document.getElementsByClassName('outletSlides')
var slideCounter=0
var slidecountertwo= 1
var nextButton= document.getElementsByClassName('next')[0]
var previousButton = document.getElementsByClassName('previous')[0]


nextButton.removeAttribute("disabled")

function next(){slideCounter++
 outSliderCarrier.style.left= -100*slideCounter +"%"
 
  if (slideCounter==outSlide.length-1) {
  previousButton.removeAttribute('disabled')
  nextButton.setAttribute('disabled', 'true')
  slidecountertwo= 1
  
  }}

function previous(){ 
  outSliderCarrier.style.left= -(outSlide.length-1)*100+100*slidecountertwo +"%"
  slidecountertwo++
  
  if(slidecountertwo==outSlide.length){
      previousButton.setAttribute('disabled','true')
  nextButton.removeAttribute('disabled')
  slideCounter=0
  
  }
}

// slider menu---------++++++===>>


var menu = document.getElementById('menu')
var cross = document.getElementById('cross')
var body=document.getElementById('body')
var slidermenu= document.getElementsByClassName('slidermenuslide')[0]

function Menu(){
  
  if(menu.style.display="block"){
menu.style.display='none'
cross.style.display="block"
slidermenu.style.left=0+'%'
body.style.overflow='hidden'

}
  
  
}
 
 function Cross(){
   if(menu.style.display="none"){
menu.style.display='block'
cross.style.display="none"

slidermenu.style.left=-100+'%'
body.style.overflow='auto'
 }
 

 }
//slider menu

