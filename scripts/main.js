// main.js
// JS for UTSAVIA landing page interactivity and animations will go here.

// Simple testimonials carousel
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonial(idx) {
  testimonials.forEach((card, i) => {
    card.classList.toggle('active', i === idx);
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

if (testimonials.length > 0) {
  showTestimonial(currentTestimonial);
  setInterval(nextTestimonial, 4000);
} 