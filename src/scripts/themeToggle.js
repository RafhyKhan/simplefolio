const STORAGE_KEY = "theme";

export default function initThemeToggle() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";

    if (next === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Storage unavailable (private browsing, etc) - theme just won't persist.
    }
  });
}
