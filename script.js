document.getElementById("throwBtn").addEventListener("click", function () {
  const die = document.getElementById("die");
  const dieFace = document.getElementById("die-face");
  // Animate die
  die.classList.remove("animate");
  void die.offsetWidth; // trigger reflow
  die.classList.add("animate");
  // Generate a random number between 1 and 6
  const result = Math.floor(Math.random() * 6) + 1;
  setTimeout(() => {
    dieFace.innerHTML = renderDieFace(result);
  }, 200);
});

function renderDieFace(n) {
  // Each die face is a 3x3 grid, dots are placed according to value
  const dot = '<div class="dot"></div>';
  const empty = '<div class="dot empty"></div>';
  const faces = [
    // 1
    [empty, empty, empty, empty, dot, empty, empty, empty, empty],
    // 2
    [dot, empty, empty, empty, empty, empty, empty, empty, dot],
    // 3
    [dot, empty, empty, empty, dot, empty, empty, empty, dot],
    // 4
    [dot, empty, dot, empty, empty, empty, dot, empty, dot],
    // 5
    [dot, empty, dot, empty, dot, empty, dot, empty, dot],
    // 6
    [dot, empty, dot, dot, empty, dot, dot, empty, dot],
  ];
  return `<div class="die-grid">${faces[n - 1].join("")}</div>`;
}
