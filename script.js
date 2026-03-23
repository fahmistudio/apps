// JavaScript for interactivity and animations for the portfolio website

// Example of a simple interactive function
function animateElement(element) {
    element.style.transition = 'transform 0.5s';
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 500);
}

// Example usage
const exampleElement = document.getElementById('portfolio-item');
animateElement(exampleElement);