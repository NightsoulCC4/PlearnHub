document.addEventListener('init', function(event) {
  var page = event.target;
  console.log(page.id);

  if (page.id === 'Tab1') {
    var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actived", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " actived";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
    //JS of tab1
  } else if (page.id === 'Tab2') {
    // JS of tab2
    // document.getElementById("tab2alert").onclick = function () {
    //   ons.notification.alert('Alert in Tab 2');
    // }
  }
});