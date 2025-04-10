// form validation 
function validate() {
    var userName = document.getElementById("UserName"); 
    var userEmail = document.getElementById("UserEmail"); 
    var userPhone = document.getElementById("userPhone");
    var zipCode = document.getElementNyId("ZipCode");
    var comment = document.getElementNyId("comment");
    var msg = document.getElementById("ValidateMsg"); 
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userPhone.checkValidity() || !zipCode.checkValidity() || !comment.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)"; 
    }
}

// <------------------------carousel------------------------------------>
//citation: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
let slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// only turn on carousel functions on cupcake and cakes page
var L = window.location.href;
console.log(L);

if (L.includes("cupcakes.html")) {
  showSlides(slideIndex);
}

if (L.includes("cakes.html")) {
  showSlides(slideIndex);
}
/*--------------accordion--------------*/
$(document).ready(function(){
  accordionToggle(); 
})

function accordionToggle() {

  $('.accordion .block:first-child').addClass('active');
  $('.accordion .block:first-child').find('.content').show();  

  $('.accordion .trigger').click(function(){
    // add active class to current block 
    // remove active class from sibling 
    $(this).closest('.block').siblings().removeClass('active'); 
    $(this).closest('.block').toggleClass('active'); 

    //toggle current 
    //collapse siblings that were previously opened 
    $(this).closest('.block').siblings().find('.content').stop().hide(); 
    $(this).closest('.block').find('.content').stop().toggle();  
  })
}

function showList() {
    document.getElementById("AllFlav").style.display = "block"; 
    document.getElementById("SeeMoreBTN").style.display = "none"; 
  }

/*-------geolocation API ------------------*/
/*referencing https://www.w3schools.com/js/tryit.asp?filename=tryjs_api_geo_coordinates */
const x = document.getElementById("location"); 

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " +
  position.coords.longitude;
}