// Geluiden: klikgeluid op elke knop en Steve-geluid bij het poppetje

// Direct bij het laden van de pagina inladen, zodat het geluid bij de eerste klik
// al klaarstaat en niet nog van schijf/netwerk opgehaald moet worden
const clickSound = new Audio("./sounds/minecraft_click.mp3");
clickSound.preload = "auto";
clickSound.volume = 0.6;
clickSound.load();

// Capture phase, zodat dit eerder afgaat dan een eventuele navigatie van de knop zelf
document.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const sound = clickSound.cloneNode();
    sound.volume = 0.6;
    sound.play().catch(() => {});

    // Als de knop in een link zit: navigatie even uitstellen zodat het geluid kan starten
    const link = btn.closest("a[href]");
    if (link && link.target !== "_blank") {
        e.preventDefault();
        const href = link.href;
        setTimeout(() => { location.href = href; }, 300);
    }
}, true);

// Steve-poppetje op index.html maakt geluid bij klikken
const steve = document.querySelector(".sela-bounce");
if (steve) {
    steve.addEventListener("click", () => {
        const hurt = new Audio("./sounds/steve-hurt.mp3");
        hurt.volume = 0.8;
        hurt.play().catch(() => {});
    });
}
