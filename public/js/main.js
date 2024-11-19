$(document).ready(() => {
    // Set active nav item
    const currentPage = window.location.pathname;
    $(`.nav-link[href="${currentPage}"]`).addClass('active');

    // Initialize tooltips and popovers
    $('[data-bs-toggle="tooltip"]').tooltip();
    $('[data-bs-toggle="popover"]').popover();

    // Initialize auth state
    Auth.init();

    // Add scroll behavior to navbar
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar-custom').addClass('navbar-scrolled');
        } else {
            $('.navbar-custom').removeClass('navbar-scrolled');
        }
    });
});