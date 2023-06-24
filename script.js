function toggleMode() {
  //Altera o modo dark ou light ao clicar no botao
  const html = document.documentElement

  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //Altera a imagem de acordo com o modo (dark or light)
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Lucas Light Mode")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Lucas Dark Mode")
  }
}
