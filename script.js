

/* ---------------- DARK MODE TOGGLE ---------------- */
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
});
