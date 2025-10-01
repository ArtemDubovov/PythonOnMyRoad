const buttonToMenu = document.getElementById("menuTopButton")
let objMoveToMenu = {
  top: 0,
  left: 0,
  behavior: "smooth"
}

for (let i  = 1; i <= 7; i++) {
    const btn = document.getElementById(`menuButton-${i}`);

    btn.onclick = function () {
        section = document.getElementById(`section-${i}`);
        window.scrollTo({
        top: section.offsetTop - 120,
        left: 0,
        behavior: "smooth"
        });
    }
}

buttonToMenu.onclick = () => window.scrollTo(objMoveToMenu);