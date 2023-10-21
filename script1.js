// script1.js

document.addEventListener("DOMContentLoaded", function() {
    // Change header text color every 3 seconds
    const header = document.querySelector('header');
    setInterval(changeHeaderColor, 3000);

    // Display greeting based on the time of day
    displayGreeting();

    // Add functionality to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(addSectionFunctionality);
});

// Function to change header text color
function changeHeaderColor() {
    const header = document.querySelector('header');
    const colors = ["red", "blue", "green", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.color = randomColor;
}

// Function to display a greeting
function displayGreeting() {
    const date = new Date();
    const hour = date.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    console.log(greeting);
}

// Function to add functionality to each section
function addSectionFunctionality(section) {
    if (section.id === 'Education') {
        section.addEventListener('click', function() {
            alert('Education section clicked!');
        });
    } else if (section.id === 'Internship') {
        section.addEventListener('click', function() {
            const internshipDetails = this.querySelector('ul');
            internshipDetails.classList.toggle('visible');
        });
    }
    // Add more conditions and functionality as necessary
}

// You can continue to add more modular and professional JavaScript code here to enhance the functionality of your webpage.
// script1.js

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    // Changing header text color on mouseover
    header.addEventListener('mouseover', function() {
        header.style.color = getRandomColor();
    });

    // Adding a shadow effect to each section on hover
    sections.forEach(section => {
        section.addEventListener('mouseover', function() {
            section.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.2)';
        });
        section.addEventListener('mouseout', function() {
            section.style.boxShadow = 'none';
        });
    });

    // Displaying a welcome message with typewriter effect
    const welcomeMessage = "Welcome to my Resume Portfolio!";
    displayWelcomeMessage(welcomeMessage);
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to display a welcome message with typewriter effect
function displayWelcomeMessage(message) {
    const targetElement = document.querySelector('header');
    let index = 0;
    const displayInterval = setInterval(() => {
        targetElement.textContent += message[index];
        index++;
        if (index === message.length) {
            clearInterval(displayInterval);
        }
    }, 100);
}

// You can continue to add more innovative JavaScript code here to further enhance the interactivity and functionality of your web page.

