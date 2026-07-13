// TOGGLE MENU
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");

});

//FORM VALIDATION
const form = document.getElementById("contact-form");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {

    // Stop the browser from submitting the form
    event.preventDefault();
    successMessage.textContent = "";

    // Phone Validation
    if (phone.value.trim() === "") {
        alert("Please enter your phone number.");
        return;
    }

    // Email Validation
    if (email.value.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    // Input Message Validation
    if (messageInput.value.trim() === "") {
        alert("Please enter your message.");
        return;
    }

    if(!email.value.includes("@") || !email.value.includes(".")){
        alert("Please enter a valid email address.");
        return;
    }

    // Everything is valid
    successMessage.textContent =
    "Thank you! Your message has been received.";

    form.reset();

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


let current = 0;
const message = document.getElementById("testimonial-message");
const name = document.getElementById("testimonial-name");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

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