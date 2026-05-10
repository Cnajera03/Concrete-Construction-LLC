document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});


// EMAILJS FORM SUBMIT

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_hhb5qni",
    "template_wlpi71o",
    this
  )
  .then(() => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch((error) => {
    console.error("FAILED...", error);
    alert("Failed to send message.");
  });
});
 
 

  // IMAGE SLIDERS

const residentialImages = [
  "images/residential1.jpg",
  "images/residential2.jpg",
  "images/residential3.jpg",
  "images/residential4.jpg"

];

const commercialImages = [
  "images/commercial1.jpg",
  "images/commercial2.jpg",
  "images/commercial3.jpg",
  "images/commercial4.jpg"

];

const customImages = [
  "images/custom1.jpg",
  "images/custom2.jpg",
  "images/custom3.jpg",
  "images/custom4.jpg",
  "images/custom5.jpg",
  "images/custom6.jpg"
];

let resIndex = 0;
let comIndex = 0;
let cusIndex = 0;

setInterval(() => {
  resIndex = (resIndex + 1) % residentialImages.length;

  document.getElementById("residential-slider").src =
    residentialImages[resIndex];

}, 3000);

setInterval(() => {
  comIndex = (comIndex + 1) % commercialImages.length;

  document.getElementById("commercial-slider").src =
    commercialImages[comIndex];

}, 3500);

setInterval(() => {
  cusIndex = (cusIndex + 1) % customImages.length;

  document.getElementById("custom-slider").src =
    customImages[cusIndex];

}, 4000);

startSlider("residential-slider", residentialImages, 2000);

startSlider("commercial-slider", commercialImages, 2300);

startSlider("custom-slider", customImages, 2600);