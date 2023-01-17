let initial_slide_deck = 1; 
showSlides(initial_slide_deck); /* shows hte first slide*/




function currentSlide(n) {
    showSlides(initial_slide_deck = n); 
}

function nextSlide() {
    showSlides(initial_slide_deck + 1); 
}

function prevSlide(){
    showSlides(initial_slide_deck - 1); 

}

function plusSlides(n) {
    showSlides(initial_slide_deck += n);
  }
  



function showSlides(n) {     /*shows the current or next slides one at atime */
    let i; 
    let slides = document.getElementsByClassName("Slides");


    /*n is the current slide index we ar at */

    if (n < 1) {
        {initial_slide_deck = slides.length;}

    }

    if (n > slides.length) {initial_slide_deck = 1;}

    for (i=0; i< slides.length; i++) {
        slides[i].style.display = "none";   /*otherwsie all slides will be displayed at the same time if we don't
        do this */
    }

    slides[initial_slide_deck-1].style.display = "block"; 

/* slides is now an array --- at lsdie 1 -- the acc index is 0 --- current slide deck - 1 -- and display it */



    
 
}

