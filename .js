window.onscroll = function() {
    var navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
