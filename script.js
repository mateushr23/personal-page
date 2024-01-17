function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/img2.png")
  } else {
    img.setAttribute("src", "./assets/img1.png")
  }
}
