const loader = document.getElementById("loader");

window.addEventListener("load", function () {
  setTimeout(function () {
    if (loader) {
      loader.classList.add("hide");
    }
  }, 1200);
});
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const header = document.getElementById("header");
const scrollProgress = document.getElementById("scrollProgress");
const cursorGlow = document.getElementById("cursorGlow");

if (menuBtn && nav) {
menuBtn.addEventListener("click", function () {
nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(function (link) {
link.addEventListener("click", function () {
nav.classList.remove("active");
});
});
}

window.addEventListener("scroll", function () {
const scrollTop = window.scrollY;
const docHeight = document.documentElement.scrollHeight - window.innerHeight;
const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

if (scrollProgress) {
scrollProgress.style.width = progress + "%";
}

if (header) {
header.classList.toggle("scrolled", scrollTop > 30);
}
});

window.addEventListener("mousemove", function (event) {
if (cursorGlow) {
cursorGlow.style.left = event.clientX + "px";
cursorGlow.style.top = event.clientY + "px";
}
});

const slides = document.querySelectorAll(".hero-slider .slide");
const dots = document.querySelectorAll(".slider-dots button");
let currentSlide = 0;
let slideTimer;

function showSlide(index) {
if (!slides.length || !dots.length) return;

slides.forEach(function (slide) {
slide.classList.remove("active");
});

dots.forEach(function (dot) {
dot.classList.remove("active");
});

slides[index].classList.add("active");
dots[index].classList.add("active");
currentSlide = index;
}

function startSlider() {
slideTimer = setInterval(function () {
const nextSlide = (currentSlide + 1) % slides.length;
showSlide(nextSlide);
}, 4300);
}

if (slides.length && dots.length) {
dots.forEach(function (dot, index) {
dot.addEventListener("click", function () {
clearInterval(slideTimer);
showSlide(index);
startSlider();
});
});

startSlider();
}

document.querySelectorAll("[data-tilt]").forEach(function (card) {
card.addEventListener("mousemove", function (event) {
const rect = card.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;

```
const rotateX = ((y / rect.height) - 0.5) * -7;
const rotateY = ((x / rect.width) - 0.5) * 7;

card.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-8px)";
```

});

card.addEventListener("mouseleave", function () {
card.style.transform = "";
});
});
