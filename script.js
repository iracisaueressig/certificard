function mudaTema() {
  document.body.classList.toggle("dark");
  var textoBotao = document.getElementById("botao").innerHTML;
  if (textoBotao == "Ligth Tema") {
    document.getElementById("botao").innerHTML = "Dark Tema";
  } else {
    document.getElementById("botao").innerHTML = "Ligth Tema";
  }
}