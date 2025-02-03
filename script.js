// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Simple form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to handle the form data, like sending it to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Thank you for your message!');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Find the target section

        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Aligns the top of the section with the top of the viewport
            });
        }
    });
});

// Expandable Project Cards with Modal
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h2').textContent;
        const image = card.querySelector('img').src;
        const description = card.querySelector('p').textContent;
        const expandContent = card.querySelector('.expand-content').innerHTML;

        // Populate modal content
        modalContent.querySelector('.modal-body').innerHTML = `
            <img src="${image}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
            ${expandContent}
        `;

        // Show modal
        modal.style.display = 'flex';
    });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Typing Animation
const textArray = ["Data Science", "Machine Learning", "Artificial Intelligence"];
const typingTextElement = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;

// Reset the text element to empty on page load
typingTextElement.textContent = "";

function type() {
    typingTextElement.classList.add("typing"); // Enable caret animation
    if (charIndex < textArray[textIndex].length) {
        typingTextElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Typing speed (100ms per character)
    } else {
        setTimeout(erase, 2000); // Wait 2 seconds before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typingTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Erasing speed (50ms per character)
    } else {
        typingTextElement.classList.remove("typing"); // Disable caret animation
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0; // Loop back to the first text
        setTimeout(type, 500); // Wait 0.5 seconds before typing the next text
    }
}

// Start the typing animation
type();

const form = document.getElementById('contact-form');
         form.addEventListener('submit', function (e) {
             e.preventDefault();
             fetch(this.action, {
                 method: 'POST',
                 body: new FormData(this),
                 headers: {
                     'Accept': 'application/json'
                 }
             }).then(response => {
                 if (response.ok) {
                     alert('Thank you! Your message has been sent.');
                     form.reset();
                 } else {
                     alert('Oops! Something went wrong.');
                 }
             });
         });