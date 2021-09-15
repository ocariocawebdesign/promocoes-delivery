//Imagem galeria

//Remover classes ativas
function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll(".images button");
  console.log(buttons);
  //Essa função removeu a classe active
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  button.classList.add("active");

  const image = button.children[0];
  const imageContainer = document.querySelector(".galeria > img");

  imageContainer.src = image.src;
}



//Selecionar a imagem clicada
