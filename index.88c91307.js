var slides = document.querySelectorAll(".slide");
var botones = document.querySelectorAll(".btn");
let currentSlide = 1;
// Para la navegacion Manual
var manualNav = function(manual) {
    slides.forEach((slide)=>{
        slide.classList.remove("active");
        botones.forEach((btn)=>{
            btn.classList.remove("active");
        });
    });
    slides[manual].classList.add("active");
    botones[manual].classList.add("active");
};
botones.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i;
    });
});
// Autoplay
var repeat = function(activeClass) {
    let active = document.getElementsByClassName("active");
    let i = 1;
    var repeater = ()=>{
        setTimeout(function() {
            [
                ...active
            ].forEach((activeSlide)=>{
                activeSlide.classList.remove("active");
            });
            slides[i].classList.add("active");
            botones[i].classList.add("active");
            i++;
            if (slides.length == i) i = 0;
            if (i >= slides.length) return;
            repeater();
        }, 7000);
    };
    repeater();
};
repeat(); /** 
let idNav = document.getElementById('nav-Id');
 let slider = document.querySelector('.slider');
 let currentIndex = 0;
 let slideInterval;

 function changeSlide() {
   // Ocultar todas las imágenes
   let slides = slider.querySelectorAll('img');
   for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = 'none';
   }

   // Mostrar la imagen correspondiente al índice actual
   slides[currentIndex].style.display = 'block';

   // Incrementar el índice actual y volver a 0 si alcanza el límite
   currentIndex = (currentIndex + 1) % slides.length;
 }

 function startSlideInterval() {
   slideInterval = setInterval(changeSlide, 5000);
 }

 function stopSlideInterval() {
   clearInterval(slideInterval);
 }

 // Agregar eventos click a los enlaces
 let slideLinks = idNav.querySelectorAll('a');
 slideLinks.forEach((link) => {
   link.addEventListener('click', (event) => {
     // Detener la animación temporalmente cuando se hace clic en un enlace
     stopSlideInterval();
     // Lógica para cambiar la imagen al que corresponde el enlace aquí (si es necesario)
     // ...

     // Volver a iniciar la animación después de procesar el clic
     setTimeout(startSlideInterval, 5000);
   });
 });

 // Ejecutar la función changeSlide inicialmente para mostrar la primera imagen
 changeSlide();
 // Iniciar el intervalo de animación
 startSlideInterval();
 */ 

//# sourceMappingURL=index.88c91307.js.map
