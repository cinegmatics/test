// Sticky Header Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.padding = '15px 8%';
        navbar.style.borderBottom = '1px solid #222';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.padding = '25px 8%';
        navbar.style.borderBottom = 'none';
    }
});

// Click interaction for cards
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        alert("You could link this to a Vimeo or YouTube URL!");
    });
});