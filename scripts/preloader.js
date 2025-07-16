// Preloader
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector(".preloader");
    const animatedElements = document.querySelectorAll(".fade-in");
    const courseBoxes = document.querySelectorAll(".content .box");

    setTimeout(() => {
        preloader.classList.add("fade-out");

        animatedElements.forEach((el) => {
            el.classList.add("appear");
        });
        
        courseBoxes.forEach((box) => {
            box.classList.add("open");
        });
    }, 1000);
});


// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});