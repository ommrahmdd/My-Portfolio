// Replace any <img> that fails to load with the site icon.
const FALLBACK = `${process.env.PUBLIC_URL}/logo192.png`;

window.addEventListener(
  "error",
  (e) => {
    const t = e.target as HTMLImageElement | null;
    if (!t || t.tagName !== "IMG") return;
    const src = t.getAttribute("src");
    if (!src || src === FALLBACK || t.dataset.fallbackApplied) return;
    t.dataset.fallbackApplied = "1";
    t.src = FALLBACK;
    t.style.objectFit = "contain";
    t.style.background = "#000";
  },
  true
);

export {};
