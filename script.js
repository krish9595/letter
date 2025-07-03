function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

window.addEventListener("DOMContentLoaded", () => {
  const mover = document.querySelector("#move-random");
  if (mover) {
    mover.addEventListener("mouseenter", function (e) {
      moveRandomEl(e.target);
    });
  }

  // Rain hearts on letter page
  if (document.body.classList.contains("hearts-bg")) {
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(heart);
    }
  }
});
