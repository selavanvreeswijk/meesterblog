// Creeper explosie animatie bij 'Quit game'

function quitGame() {
    const btn = document.getElementById('quit-btn');
    btn.disabled = true;

    // Audio direct afspelen bij klik
    const audio = new Audio('./sounds/creeper-explosion.mp3');
    audio.volume = 0.8;
    audio.play().catch(() => {});

    // Creeper aanmaken
    const creeper = document.createElement('img');
    creeper.src = './images/creeper.png';
    creeper.className = 'creeper-overlay';
    document.body.appendChild(creeper);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            creeper.classList.add('charging');
        });
    });

    // Direct: explosie-animatie
    setTimeout(() => {

        // Explosie-animatie
        creeper.classList.remove('charging');
        creeper.classList.add('exploding');

        const flash = document.createElement('div');
        flash.className = 'explosion-flash';
        document.body.appendChild(flash);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                flash.classList.add('active');
            });
        });

        // Navigeer nadat het geluid klaar is, of na 1s als fallback
        const goToQuit = () => { window.location.href = 'quit.html'; };
        audio.addEventListener('ended', goToQuit);
        setTimeout(goToQuit, 1000);

    }, 2000);
}
