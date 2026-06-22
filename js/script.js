// Custom scrollbar Spin
// Ik heb tijdens de Hackaton al leren werken met een custom scrollbar maar nu aan Claude gevraagd hoe ik de scrollbar kan laten verschijnen en verdwijnen zoals een normale scrollbar dat doet.
// Prompt: is het alleen mogelijk om de koe te laten verschijnen wanneer er gescrollt wordt? bij een normale scrollbar staat hij ook niet al rechtsbovenin te wachten maar komt hij pas tevoorschijn wanneer de gebruiker scrollt en gaat hij weg wanneer de gebruiker niet meer scrollt

const scrollbar = document.querySelector(".scrollbar");
const list = document.querySelector(".worlds-list");
const wrap = document.querySelector(".scroll-wrap");

let scrollTimeout;

list.addEventListener("scroll", () => {
    const progress = list.scrollTop / (list.scrollHeight - list.clientHeight);

    scrollbar.style.transform = `translateY(${progress * (wrap.clientHeight - 60)}px)`;
    scrollbar.classList.add("visible");

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => scrollbar.classList.remove("visible"), 1000);
});

// Op wereld klikken en openen
const radios = document.querySelectorAll("input[name='wereld']");
const openBtn = document.getElementById("open-btn");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        openBtn.href = radio.value;
    });
});
