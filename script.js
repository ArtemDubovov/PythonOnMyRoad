const buttonToMenu = document.getElementById("menuTopButton")
let objMoveToMenu = {
  top: 0,
  left: 0,
  behavior: "smooth"
}

const button_list = document.getElementsByClassName('section')

for (let i  = 1; i <= button_list.length; i++) {
    const btn = document.getElementById(`menuButton-${i}`);

    btn.onclick = function () {
        section = document.getElementById(`section-${i}`);
        window.scrollTo({
        top: section.offsetTop - 20,
        left: 0,
        behavior: "smooth"
        });
    }
}

buttonToMenu.onclick = () => window.scrollTo(objMoveToMenu);