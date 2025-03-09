document.addEventListener('DOMContentLoaded', function() {
    // Glide.js - Carousel Initialization
    new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        autoplay: 3000
    }).mount();

    // AOS - Animate on Scroll Initialization
    AOS.init();

    // Leaflet Map
    var map = L.map('map').setView([43.651070, -79.347015], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([43.651070, -79.347015]).addTo(map)
        .bindPopup('Explore Toronto - Your Next Destination!')
        .openPopup();

    // Footer Animation
    anime({
        targets: '#footer',
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 500
    });

    // Navbar Animation
    anime({
        targets: '#nav ul li',
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: anime.stagger(100)
    });
});

