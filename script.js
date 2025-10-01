const buttonToMenu = document.getElementById("menuTopButton")
let objMoveToMenu = {
  top: 0,
  left: 0,
  behavior: "smooth"
}

for (let i  = 1; i <= 7; i++) {
    const btn = document.getElementById(`menuButton-${i}`);
    section = document.getElementById(`section-${i}`);
    let top = section.offsetTop - 100;
    btn.onclick = function () {
        console.log("Click")
        window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth"
        });
    }
}

buttonToMenu.onclick = () => window.scrollTo(objMoveToMenu);