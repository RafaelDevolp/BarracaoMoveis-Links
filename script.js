function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/barracao-moveis-1.png")
  } else {
    //se tiver sem o light mode, manter a imagem normal
    img.setAttribute(
      "src",
      "./assets/assets/fotor_2023-6-27_22_31_34-fotor-20230627223212.png"
    )
  }
}
