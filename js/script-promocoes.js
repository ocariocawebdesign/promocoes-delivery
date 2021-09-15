
//"use strict";
const result = document.getElementById("result");
const botaoPromocao = document.querySelector('#botao-promocao');
console.log(botaoPromocao);

const data = new Date();
const diaDaSemana = new Array();

diaDaSemana[0] = "Domingo";
diaDaSemana[1] = "Segunda-Feira";
diaDaSemana[2] = "Terça-Feira";
diaDaSemana[3] = "Quarta-Feira";
diaDaSemana[4] = "Quinta-Feira";
diaDaSemana[5] = "Sexta-Feira";
diaDaSemana[6] = "Sabado";

console.log(diaDaSemana[0]);

const diaPromocao = diaDaSemana[data.getDay()];
//console.log(typeof diaPromocao);


/*const pratos = [
  "Filé a parmegina",
  "Nhoque de carne",
  "Macarrão a bolonhesa",
  "Carne assada",
  "Lasanha ao 4 queijos",
  "Bifé a cavalo"
];*/

//Array com os pratos cadastrados:
/*const pratos = new Array();

pratos[0] = {
  //Dia: diaDaSemana[0],
  Prato: "Filé a parmegina",
  Descricao: "File a parmegina acompanhado de arroz e fritas",
  codigo: "001",
};
pratos[1] = {
  Prato: "Nhoque de carne",
  Descricao: "Nhoque de carne acompanhado de arroz e fritas",
  codigo: "002",
};
pratos[2] = {
  Prato: "Macarrão a bolonhesa",
  Descricao: "Macarrão a bolonhesa com bastante sugo",
  codigo: "003",
};
pratos[3] = {
  Prato: "Carne assada",
  Descricao: "Carne assada de arroz e fritas",
  codigo: "004",

};
pratos[4] = {
  Prato: "Lasanha ao 4 queijos",
  Descricao: "Lasanha ao 4 queijos",
  codigo: "005",
};
pratos[5] = {
  Prato: "Bifé a cavalo",
  Descricao: "Bifé a cavalo acompanhado de arroz e fritas",
  codigo: "006",
};

pratos[6] = {
  Prato: "Filé de salmão com batatas",
  Descricao: "Filé de salmão com batatas acompanhado de arroz a la grega",
  codigo: "007",
};

console.log(pratos);
*/
//Função contrutora de pratos
//Aqui criei uma função construtora modelo para os pratos do dia.
function PratoDoDia(dia, prato, descricao, codigo, disponivel, img ) {
      this.dia = dia;
      this.prato = prato;
      this.descricao = descricao;
      this.codigo = codigo;
      this.disponivel = disponivel;
      this.img = img;
   
}
//Prato 1
const prato_1 = new PratoDoDia(
  diaDaSemana[0],
  "Filé a parmegina",
  "File a parmegina acompanhado de arroz e fritas",
  "001",
  true,
  img = "img/prato_1.png",
);



//Prato 2
const prato_2 = new PratoDoDia(
  diaDaSemana[1],
  "Nhoque de carne",
  "Nhoque de carne acompanhado de arroz e fritas",
  "002",
  true,
  img = "img/prato_2.png",

);

//Prato 3
const prato_3 = new PratoDoDia(
  diaDaSemana[2],
  "Macarrão a bolonhesa",
  "Macarrão a bolonhesa com bastante sugo",
  "003",
  true,
  img = "img/prato_3.png",
);

const prato_4 = new PratoDoDia(
  diaDaSemana[3],
  "Strogonofe de carne",
  "Strogonofe de carne com arroz e fritas",
  "004",
   true,
   img = "img/prato_4.png",

);


const prato_5 = new PratoDoDia(
  diaDaSemana[4],
  "Carne assada",
  "Carne assada de arroz e fritas",
  "005",
   true,
   img = "img/prato_5.png",
);

const prato_6 = new PratoDoDia(
  diaDaSemana[5],
  "Lasanha ao 4 queijos",
  "Lasanha ao 4 queijos gratinada",
  "006",
   true,
   img = "img/prato_6.png",

);


const prato_7 = new PratoDoDia(
  diaDaSemana[6],
  "Lasanha ao 4 queijos",
  "Lasanha ao 4 queijos gratinada",
  "006",
   true,
   img = "img/prato_7.png",
);

console.log(PratoDoDia)

//Aqui criei a array cardapio de pratos e com o push inclui todos os pratos
const cardapioDePratos = [];
cardapioDePratos.push(prato_1, prato_2, prato_3, prato_4, prato_5, prato_6, prato_7);
//console.log(cardapioDePratos);
//se o dia da semana for igual ao dia da semnana do prato do dia mostrar o prato

cardapioDePratos.forEach((prato)=>{
  //console.log(prato.dia)
  const pratoDia = prato.dia;
  //console.log(prato.img)  
  let foto = document.createElement("IMG");
    foto.src = prato.img;
  if (pratoDia === diaPromocao){
    result.innerHTML = `<h4> Hoje é ${diaPromocao}! <br>Prato do dia:<strong> ${prato.prato}</strong>. </h4> `;
    foto.classList.add("img-thumbnail", "img-fluid", "imgagem_produto");
    foto.addEventListener('mouseenter', ()=>{
      foto.classList.toggle("efeito-pulse");
      //alert('É UM SHOWWWWW DE PIROCA!!!!')

    })
    document.querySelector('#result').appendChild(foto);
    //inserir botao da promocao
    //result.innerHTML =  botaoPromocao;
  }else{
    return false;
  }
})

function diaDaSemanaFuncao() {
  diaDaSemana.forEach((i) => {
    //console.log(i)
    if (diaPromocao === i) {
      console.log(`Hoje é ${i}`);
    } else {
      return false;
    }
  });
}

diaDaSemanaFuncao();






/*"Filé a parmegina",
  "Filé a parmegina acompanhado de arroz e fritas",
  "102"
);
*/

/*const pratoDoDia = new Array();
  //["Filé a parmegina", "Nhoque de carne", "Carne Assada"]
  pratoDoDia[0] = ["Filé a parmegina", "Nhoque de carne", "Carne Assada"];
  */

/*--------------------------------*/
const sabores = [
  "Alho e óleo",
  "Calabresa",
  "Cappo",
  "Champignon",
  "Frango com catupiry",
  "Marguerita",
  "Napolitana",
  "Pepperoni",
  "Presunto",
  "Quatro queijos",
  "Veneza",
  "Bambina",
  "Califórnia",
  "Carne seca com abóbora",
  "Francesa",
  "Genova",
  "Muzzarela",
  "Palmito",
  "Portuguesa",
  "Primo",
  "Tomate seco com rúcula",
];

sabores.forEach((i) => {
  //console.log(i);
});

/*const pratosDaSemana = [{
  dia:diaPromocao,
  prato: [sabores[0], sabores[1]],
  img: "../img/file.png",
  codigo:"002",
  descricao: "Filé a parmegina acompanhado de arroz e fritas"
}];*/

//Efeito pulse
const imgsDestaques = document.querySelectorAll("#container-destaques img");
//console.log(imgsDestaques);

imgsDestaques.forEach((item) => {
  const estado01 = item.classList.contains("efeito-pulse");
  if (estado01 === false) {
    item.addEventListener("mouseenter", () => {
      item.classList.toggle("efeito-pulse");
    });
  }
});
