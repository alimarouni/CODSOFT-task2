document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
