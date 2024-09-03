document.addEventListener('DOMContentLoaded', function () {
    // About section toggle
    const aboutText = document.getElementById('about-text');
    const aboutToggle = document.getElementById('about-toggle');
    let isExpanded = false;

    aboutToggle.addEventListener('click', function () {
        if (isExpanded) {
            aboutText.classList.remove('expanded');
            aboutToggle.textContent = 'Show More';
        } else {
            aboutText.classList.add('expanded');
            aboutToggle.textContent = 'Show Less';
        }
        isExpanded = !isExpanded;
    });

    // Portfolio section toggle
    const projectToggles = document.querySelectorAll('.project-toggle');

    projectToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const description = this.previousElementSibling;
            if (description.style.display === 'block') {
                description.style.display = 'none';
                this.textContent = 'More Info';
            } else {
                description.style.display = 'block';
                this.textContent = 'Less Info';
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
            formResponse.style.color = 'green';
            contactForm.reset();
        } else {
            formResponse.textContent = 'Please fill out all fields.';
            formResponse.style.color = 'red';
        }
    });
});