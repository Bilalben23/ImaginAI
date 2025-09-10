const themeToggleBtn = document.querySelector(".theme-toggle");


// Set theme based on saved preference or system default
(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPreferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPreferDark);
    document.body.classList.toggle("dark-theme", isDarkTheme);
    themeToggleBtn.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
})();


// switch between light and dark themes
const toggleTheme = () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    themeToggleBtn.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

themeToggleBtn.addEventListener("click", toggleTheme);


