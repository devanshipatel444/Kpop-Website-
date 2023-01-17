

function myFunction(event) {
    var modal= document.getElementById("Jin-modal"); 
    modal.style.display= "block"; 
   /* var modalImg = document.getElementById("smallerImg"); &/

   /* modalImg.src = event.target.src; */

   /* modalImg.setAttribute('src', event.target.getAttribute('src')); */
    
    document.getElementById("smallerImg").setAttribute('src', event.target.getAttribute("src"));
    document.getElementById("paca-1");

    /*event.target gets the element that triggeredf a speicfic event */

}

function jhopeFunction(event){

    var modal= document.getElementById("Jhope-modal"); 
    modal.style.display= "block"; 

    document.getElementById("smallerJImg").setAttribute('src', event.target.getAttribute("src"));


}

function sugaFunction(event) {
    var modal= document.getElementById("Suga-modal"); 
    modal.style.display= "block"; 

    document.getElementById("smallerSImg").setAttribute('src', event.target.getAttribute("src"));
}

function vFunction(event) {
    var modal= document.getElementById("V-modal"); 
    modal.style.display= "block"; 

    document.getElementById("smallerVImg").setAttribute('src', event.target.getAttribute("src"));

}

function JiminFunction(event) {
    var modal= document.getElementById("Jimin-modal"); 
    modal.style.display= "block"; 

    document.getElementById("smallerJMImg").setAttribute('src', event.target.getAttribute("src"));

}

function JKFunction(event) {
    var modal= document.getElementById("Jk-modal"); 
    modal.style.display= "block"; 

    document.getElementById("smallerJKImg").setAttribute('src', event.target.getAttribute("src"));

}
function closeModal(event) {
    var modal = document.getElementById("Jin-modal"); 
    modal.style.display = "none"; 

    var hoseokmodal = document.getElementById("Jhope-modal"); 
    hoseokmodal.style.display="none"; 

    var namModal = document.getElementById("Namjoon-modal");
    namModal.style.display="none";  

    var Sugmodal = document.getElementById("Suga-modal");
    Sugmodal.style.display="none";  

    var vmodal = document.getElementById("V-modal");
    vmodal.style.display="none";  

    var JMmodal = document.getElementById("Jimin-modal");
    JMmodal.style.display="none";  

    var JKmodal = document.getElementById("Jk-modal");
    JKmodal.style.display="none";  


}

function namjoonFunction(event){
    var modal= document.getElementById("Namjoon-modal"); 
    modal.style.display= "block"; 

    document.getElementById("smallerNImg").setAttribute('src', event.target.getAttribute("src"));

}


