document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Nav Handling (Optional - CSS handles basic sticky) ---
    // You could add more complex behavior here if needed, like shrinking
    // the nav on scroll, but for now, CSS `position: sticky` is efficient.

    // --- Dropdown Accessibility & Mobile Handling (Optional Enhancement) ---
    // Basic hover dropdowns work via CSS. For click-based or more accessible
    // dropdowns, especially on mobile, you'd add JS here.
    // Example for click (would require CSS changes to hide initially):
    /*
    const dropbtns = document.querySelectorAll('.dropbtn');
    dropbtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            // Close other open dropdowns
            document.querySelectorAll('.dropdown-content.show').forEach(openDropdown => {
                if (openDropdown !== this.nextElementSibling) {
                    openDropdown.classList.remove('show');
                }
            });
            this.nextElementSibling.classList.toggle('show');
        });
    });

    // Close dropdown if clicking outside
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
            document.querySelectorAll('.dropdown-content.show').forEach(openDropdown => {
                openDropdown.classList.remove('show');
            });
        }
    }
    */


    // --- Scroll Animations ---
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) { // Trigger when 80% of the element is in view
                displayScrollElement(el);
            }
            // Optional: To re-hide elements when they scroll out of view (for repeated animations)
            // else {
            //     hideScrollElement(el);
            // }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    // Trigger on load for elements already in view
    handleScrollAnimation();


    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Smooth Scroll for Nav Links ---
    // (Handled by CSS `scroll-behavior: smooth;`, but this is an alternative JS way)
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a local link and not just "#" or javascript:void(0)
            if (href.length > 1 && href.startsWith('#') && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    */

    // --- Search Bar Functionality (Placeholder) ---
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}\n(Actual search functionality not implemented in this demo)`);
                // In a real application, you would redirect to a search results page
                // or filter content on the current page.
            } else {
                alert("Please enter a search term.");
            }
        });
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

});