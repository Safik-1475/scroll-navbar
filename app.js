// Desktop mode when window scroll down then will be add a class of nav 
// Getting element form document object
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

// Window scroll
window.addEventListener('scroll', () => {
    // get window scroll height here
    const scrollHeight = window.pageYOffset;
    // getting navbar height
    const navbarHeight = navbar.getBoundingClientRect().height;

    // checking scroll height vs navbar height,
    // if scrollHeight more then navbarHeight that will be add fixed-nav class
    if (scrollHeight > navbarHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    };
    /*
        Checking another statement, if scrollHeight more than 500
        Then show a top link button if click this button it's goes to home page 
    */
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link')
    };
});

// Toggling large screen display 
// Get element 
const toggleNavbar = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// Handle toggle btn 
toggleNavbar.addEventListener('click', () => {
    // toggle 
    // linksContainer.classList.toggle('show-links');
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // Check container height 
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    };
});

// Smooth scroll and get element scroll-link
const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach(link => {
    link.addEventListener('click', e => {
        // remove default reload
        e.preventDefault();
        const navbarHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;


        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navbarHeight;

        // Check
        if (!fixedNav) {
            position -= navbarHeight;
        } else {
            position += containerHeight;
        };
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

// Add dynamic year 
const fullYear = document.getElementById('date');
fullYear.textContent = new Date().getFullYear();