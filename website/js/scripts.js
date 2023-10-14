/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

async function updateVisitorCount() {
    try {
        // Make a fetch request to your Google Cloud Function
        const response = await fetch('https://us-east1-gcp-resume-challenge-401923.cloudfunctions.net/cloudresume-visitors ');

        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Parse the JSON response
            const data = await response.json();

            // Update  your HTML
            document.getElementById('current_number').textContent = data.new_number;
        } else {
            console.error('Failed to fetch visitor count:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error.message);
    }
}
// Call the updateVisitorCount function when the page loads
window.onload = updateVisitorCount;