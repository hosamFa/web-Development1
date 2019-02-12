function myFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("toppar").className = "test";
    } else {
        document.getElementById("toppar").className = "top-par";
    }
}

window.onscroll = function() {myFunction()};


//start countar textarea 

var count = document.getElementById('count'),
    textarea = document.getElementById('text'),
    max_lin = textarea.getAttribute('maxlength');


textarea.oninput = function(){
    count.innerHTML = max_lin - this.value.length;
    
    if (count.innerHTML == 0){
        count.classList.add('red')
    }else{
        count.classList.remove('red')
    }
}


//end countar textarea 


var myInput = document.getElementById('text');
//افراغ الحقل 
myInput.onfocus = function(){
    
    // copy placeholder
    this.setAttribute('placeholderBakup', this.getAttribute('placeholder'));
    
    // افراخ الحقل
    this.setAttribute('placeholder','');
    
}
//اعادة الحقل
myInput.onblur = function(){
    
    // copy placeholder
    this.setAttribute('placeholder', this.getAttribute('placeholderBakup'));
    
    // افراخ الحقل
    this.setAttribute('','placeholder');
    
}





//end countar textarea


//start placeholder 


//feld 1


var myInput = document.getElementById('my_input1');
//افراغ الحقل 
myInput.onfocus = function(){
    
    // copy placeholder
    this.setAttribute('placeholderBakup', this.getAttribute('placeholder'));
    
    // افراخ الحقل
    this.setAttribute('placeholder','');
    
}

//اعادة الحقل
myInput.onblur = function(){
    
    // copy placeholder
    this.setAttribute('placeholder', this.getAttribute('placeholderBakup'));
    
    // افراخ الحقل
    this.setAttribute('','placeholder');
    
}

//feld 2

var myInput = document.getElementById('my_input2');

myInput.onfocus = function(){
    
    // copy placeholder
    this.setAttribute('placeholderBakup', this.getAttribute('placeholder'));
    
    // افراخ الحقل
    this.setAttribute('placeholder','');
    
}

myInput.onblur = function(){
    
    // copy placeholder
    this.setAttribute('placeholder', this.getAttribute('placeholderBakup'));
    
    // افراخ الحقل
    this.setAttribute('','placeholder');
    
}

//feld 3

var myInput = document.getElementById('my_input3');

myInput.onfocus = function(){
    
    // copy placeholder
    this.setAttribute('placeholderBakup', this.getAttribute('placeholder'));
    
    // افراخ الحقل
    this.setAttribute('placeholder','');
    
}

myInput.onblur = function(){
    
    // copy placeholder
    this.setAttribute('placeholder', this.getAttribute('placeholderBakup'));
    
    // افراخ الحقل
    this.setAttribute('','placeholder');
    
}
//end placeholder 



//start validate Form 

function validateForm() {
  var x = document.forms["forme"]["my_input1"].value;
  if (x == "") {
    alert("جميع الحقول مطلوبة");
    return false;
  }
}


//end validate Form 



//start slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//end slideshow