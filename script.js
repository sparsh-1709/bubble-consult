// TOGGLE MENU


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");

});


































// All testimonials

const testimonials = [
{
    name: "Mr. John Geller",
    message:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},

{
    name: "Mrs. Emma Watson",
    message:
    "Working with Bubble Consult was an amazing experience. Their team was professional and delivered everything on time.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},

{
    name: "Mr. David Smith",
    message:
    "Highly recommended. The support team was friendly, responsive, and helped our business grow.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
];


// Current testimonial
let current = 0;

// Select HTML elements
const message = document.getElementById("testimonial-message");
const name = document.getElementById("testimonial-name");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Function
function showTestimonial(index){
    message.textContent = testimonials[index].message;
    name.textContent = "- " + testimonials[index].name;
}


// Show first testimonial
showTestimonial(current);

// Next button
next.addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
});


// Previous button
prev.addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
});

setInterval(() => {
    current++;
    if(current >= testimonials.length){
        current = 0;
    }
    showTestimonial(current);
},3000);