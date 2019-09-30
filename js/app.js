/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const pageSectionList = document.querySelectorAll('.page__section');
const viewportHeight = document.documentElement.clientHeight;
const navItemList = [];
const offset = 150;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const handleNavLinkClick = (event) => {

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildNav = () => {
    const navList = document.querySelector('#navbar__list');

    pageSectionList.forEach((e, idx) => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.addEventListener('click', handleNavLinkClick);
        navLink.innerText = pageSectionList[idx].dataset.nav;
        navItem.classList.add('menu__item');
        navLink.classList.add('menu__link');
        navLink.setAttribute('href', `#${pageSectionList[idx].id}`)
        navItem.appendChild(navLink);
        navLink.innerText = pageSectionList[idx].dataset.nav;
        navList.appendChild(navItem);
        navItemList.push(navItem);

        if (idx === 0) {
            navItem.classList.add('active');
        }
    });
}

// Add class 'active' to section when near top of viewport

const handleScroll = (event) => {
    pageSectionList.forEach((section, idx) => {
        navItemList[idx].classList.remove('active');
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop <= (viewportHeight / 2 + offset) && sectionBottom >= (viewportHeight / 2 + offset)) {
            navItemList[idx].classList.add('active');
        }
    });
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('scroll', handleScroll);

// Build menu 

buildNav();
// Scroll to section on link click

// Set sections as active

