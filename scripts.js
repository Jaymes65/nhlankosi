// Toggle hamburger menu for mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Sticky Header
window.onscroll = function() {
    const header = document.querySelector("header");
    const sticky = header.offsetTop;
    
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
// Scroll-triggered animations
const scrollElements = document.querySelectorAll('.fade-in');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('fade-in-visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('fade-in-visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
});
// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        
        // Toggle active class
        parent.classList.toggle('active');
        
        // Close others
        document.querySelectorAll('.accordion-item').forEach(child => {
            if (child !== parent) {
                child.classList.remove('active');
            }
        });
    });
});


function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');

document.querySelector('.next-btn').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    document.querySelector('.carousel-slide').style.transform = `translateX(${-slideIndex * 100}%)`;
}
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

let currentSlideIndex = 0;
const lightboxSlides = document.querySelectorAll('.lightbox-slide');

function currentSlide(n) {
    showSlides(currentSlideIndex = n);
}

function changeSlide(n) {
    showSlides(currentSlideIndex=0)
}