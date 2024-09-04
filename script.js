// GSAP Animations
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0 });
gsap.from(".header-section .title", { duration: 1.2, opacity: 0, x: -50, delay: 0.5 });
gsap.from(".header-section .subtitle", { duration: 1.5, opacity: 0, x: 50, delay: 0.8 });
gsap.from(".section", { duration: 1.5, opacity: 0, y: 50, stagger: 0.5 });
// Smooth scrolling for anchor links
$(document).ready(function(){
    // Select all links with class "nav-link"
    $("a.nav-link").on('click', function(event) {
        // Check if the link has a hash (i.e., #section)
        if (this.hash !== "") {
            // Prevent the default anchor click behavior
            event.preventDefault();

            // Store the hash
            var hash = this.hash;

            // Use jQuery animate() to add smooth page scrolling
            // The number 800 specifies the duration in milliseconds (0.8 seconds)
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling
                window.location.hash = hash;
            });
        } // End if
    });
});
