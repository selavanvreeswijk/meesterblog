// Custom scrollbar (spin) voor projectpagina's

const scrollbar = document.querySelector(".scrollbar");
const panel = document.querySelector("main");
const wrap = document.querySelector(".scroll-wrap");

let scrollTimeout;

panel.addEventListener("scroll", () => {
    const progress = panel.scrollTop / (panel.scrollHeight - panel.clientHeight);

    scrollbar.style.transform = `translateY(${progress * (wrap.clientHeight - 60)}px)`;
    scrollbar.classList.add("visible");

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => scrollbar.classList.remove("visible"), 1000);
});
