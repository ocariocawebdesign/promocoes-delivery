const result = document.getElementById("result");

const data = new Date();
const diaDaSemana = new Array();

diaDaSemana[0] = "Domingo";
diaDaSemana[1] = "Segunda-Feira";
diaDaSemana[2] = "Terça-Feira";
diaDaSemana[3] = "Quarta-Feira";
diaDaSemana[4] = "Quinta-Feira";
diaDaSemana[5] = "Sexta-Feira";
diaDaSemana[6] = "Sabado";

const diaPromocao = diaDaSemana[data.getDay()];
//console.log(typeof diaPromocao);

function diaDaSemanaFuncao() {
  diaDaSemana.forEach((i) => {
    //console.log(i)
    if (diaPromocao === i) {
      //console.log(`Hoje é ${i}`);
      //result.innerHTML = `<h1>Aqui vai aparecer os pratos de ${i}</h1>`;
    } else {
      return false;
    }
  });
}

diaDaSemanaFuncao();

/*const pratos = [
  "Filé a parmegina",
  "Nhoque de carne",
  "Macarrão a bolonhesa",
  "Carne assada",
  "Lasanha ao 4 queijos",
  "Bifé a cavalo"
];*/

//Array com os pratos cadastrados:
const pratos = [
  {
    diaDaSemana: diaDaSemana[0],
    Prato: "Filé a parmegina",
    Descricao: "File a parmegina acompanhado de arroz e fritas",
    codigo: "001",
  },
  {
    diaDaSemana: diaDaSemana[1],
    Prato: "Nhoque de carne",
    Descricao: "Nhoque de carne acompanhado de arroz e fritas",
    codigo: "002",
  },
  {
    diaDaSemana: diaDaSemana[2],
    Prato: "Macarrão a bolonhesa",
    Descricao: "Macarrão a bolonhesa com bastante sugo",
    codigo: "003",
  },
  {
    diaDaSemana: diaDaSemana[3],
    Prato: "Carne assada",
    Descricao: "Carne assada de arroz e fritas",
    codigo: "004",
  },
  {
    diaDaSemana: diaDaSemana[4],
    Prato: "Lasanha ao 4 queijos",
    Descricao: "Lasanha ao 4 queijos",
    codigo: "005",
  },
  {
    diaDaSemana: diaDaSemana[5],
    Prato: "Bifé a cavalo",
    Descricao: "Bifé a cavalo acompanhado de arroz e fritas",
    codigo: "006",
  },

  {
    diaDaSemana: diaDaSemana[6],
    Prato: "Bifé a francesa",
    Descricao: "Bifé a Francesa acompanhado de arroz e fritas",
    codigo: "007",
  },
];

//console.log(pratos);

pratos.forEach((i) => {
  if (diaDaSemana === diaPromocao) {
    console.log(`Hoje é dia ${diaPromocao} prato ${i.descricao}`);
  } else {
    console.log("Hoje não tem promocao")
  }
});

//Função contrutora de pratos
/*function PratoDoDia(dia, pratos_do_dia, descricao, codigo) {
  diaDaSemana.forEach((i) => {
    pratos.forEach((prato_unico) => {
      //console.log(i)
      this.dia = i;
      this.prato = prato_unico;
      this.descricao = prato_unico.Descricao;
      this.codigo = prato_unico.codigo;
    });
  });
}

//PratoDoDia();

const prato_1 = new PratoDoDia(
  diaDaSemana[0],
  pratos[0].Prato,
  pratos[0].Descricao,
  pratos[0].codigo
);

const prato_2 = new PratoDoDia(
  diaDaSemana[1],
  pratos[1].Prato,
  pratos[1].Descricao,
  pratos[1].codigo
);
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
  console.log(i);
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
