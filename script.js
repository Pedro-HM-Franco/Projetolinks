function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tivert lightmode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar2.png")
    img.setAttribute("alt", "foto Pedro 2")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto Pedro")
  }
}
