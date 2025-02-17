// Simple functionality for interactions

// "Listen Now" button click action
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Welcome to SoundWave! Start streaming music now!');
});

// Album card click actions
const albumCards = document.querySelectorAll('.album-card');

albumCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on: ' + card.querySelector('h3').textContent);
    });
});
