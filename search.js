const form = document.getElementById("search-form");
const input = document.getElementById("query");

function runSearch(q) {
  const query = q.trim();
  if (!query) return;
  // Navigating this same tiny window to Google's results page — no new tab,
  // no switching away from whatever you were doing.
  window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&prmd=m";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  runSearch(input.value);
});

document.querySelectorAll(".quick-actions button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const prefill = btn.dataset.query;
    input.value = prefill;
    input.focus();
    // Move cursor to the end so the user can just type and hit enter.
    input.setSelectionRange(prefill.length, prefill.length);
  });
});
