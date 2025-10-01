const buttonToMenu = document.getElementById("menuTopButton")
console.log(buttonToMenu)

function smoothToTopWindow() {
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
});
}

buttonToMenu.onclick = smoothToTopWindow;