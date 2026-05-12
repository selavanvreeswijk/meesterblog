// Thema wisselen en opslaan in localStorage

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeButtons(theme);
}

function updateThemeButtons(theme) {
    const btnStandaard = document.getElementById('btn-standaard');
    const btnUnderworld = document.getElementById('btn-underworld');

    if (!btnStandaard || !btnUnderworld) return;

    btnStandaard.classList.toggle('active-theme', theme !== 'underworld');
    btnUnderworld.classList.toggle('active-theme', theme === 'underworld');
}

// Actieve staat bijwerken op inladen
const savedTheme = localStorage.getItem('theme') || 'default';
updateThemeButtons(savedTheme);
