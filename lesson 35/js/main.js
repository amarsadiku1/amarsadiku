var slideindex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementByIdClassName("slide");

    for( i = 0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    if(n> slides.length)  {
        slideIndex = 1; 
    }
    if(n<1) {
        slideindex = slides.length;
    }
    slides[slideIndex - 1 ].style.display = "block";

 }

 showSlides(1);

 function plusSlides (n) {
    slideIndex += n;
    showSlides(slideIndex);
 }   

 setInterval(plusSlides, 3000, 1);  











    