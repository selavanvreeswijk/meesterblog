// Thema wisselen en opslaan in localStorage

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeButtons(theme);
}

function updateThemeButtons(theme) {
    document.querySelectorAll('.theme-card').forEach(card => {
        card.classList.toggle('active-theme', card.dataset.theme === theme);
    });
}

// Actieve staat bijwerken op inladen
const savedTheme = localStorage.getItem('theme') || 'default';
updateThemeButtons(savedTheme);
