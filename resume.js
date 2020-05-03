var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

console.log(navMenuAnchorTags.length);

for(var i = 0; i < navMenuAnchorTags.length-1; i++){
  navMenuAnchorTags[i].addEventListener('click', function(event){
  event.preventDefault();
  var targetSectionId =  this.textContent.trim().toLowerCase();
  var targetSection = document.getElementById(targetSectionId);

  var interval = setInterval(function(){
    var targetSectionCordinates = targetSection.getBoundingClientRect();
    if(targetSectionCordinates.top <= 0){
      clearInterval(interval);
      return;
    }
     window.scrollBy(0,50);
  },50);
  });
}
//handle on scroll animation for skill section
//check skill section container is visible or not
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialisedBars(){
  for(let bar of progressBars){
    bar.style.width = 0 + '%';
  }
}

initialisedBars();

function fillBars(){
 for(let bar of progressBars){
   let targetWidth = bar.getAttribute('data-bar-width');
   let currentWidth = 0;
   let interval = setInterval(function(){
     if(currentWidth>targetWidth){
       clearInterval(interval);
       return;
     }
     currentWidth++;
     bar.style.width = currentWidth + '%';
   },5);
 }
}

function checkScroll(){
  var coordinates = skillsContainer.getBoundingClientRect();
  if(!animationDone && coordinates.top < window.innerHeight){
    animationDone = true;
    console.log('skill-section is visible');
    fillBars();
  }
  else if(coordinates.top > window.innerHeight){
    animationDone = false;
    initialisedBars();
  }
}
