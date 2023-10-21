const buttonForm = document.querySelector("#formGoogle");
const buttonUbicacion = document.querySelector("#ubicacion")

buttonForm.addEventListener("click",(e)=>{
    let ventana = window.open("https://forms.gle/Huj4FgwJ1dgkWVgt8","_blank")
})

buttonUbicacion.addEventListener("click",(e)=>{
    let ventana = window.open("https://maps.app.goo.gl/cwxKdMbJmg7kBgF39","_blank")
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides(slideIndex = n);
}

function currentSlide(n) {
 showSlides(slideIndex = n);
}

let slideInterval = setInterval(() => {
 plusSlides(1);
}, 3000);

let slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
slideshowContainer.addEventListener('mouseenter', () => {
 clearInterval(slideInterval);
});

slideshowContainer.addEventListener('mouseleave', () => {
 slideInterval = setInterval(() => {
 plusSlides(1);
 }, 3000);
});

function showSlides(n) {
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let dots = document.getElementsByClassName("demo");
 let captionText = document.getElementById("caption");
 if (n > diapositivas.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i ) {
 slides<x><x>[i]</x></x>.style.display = "none";
 }
 for (i = 0; i < dots.length; i ) {
 dots<x><x>[i]</x></x>.className = dots<x><x>[i]</x></x>.className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className = " active";
 captionText.innerHTML = dots[slideIndex-1].alt;
}

  