const diaResult = document.querySelector(".diaDaSemana");

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
const pratos = new Array();

pratos[0] = {
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

console.log(pratos);

//Função contrutora de pratos
function PratoDoDia(dia, pratos_do_dia, descricao, codigo) {
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



  function diaDaSemanaFuncao() {
    diaDaSemana.forEach((i) => {
      //console.log(i)
      if (diaPromocao === i) {
        console.log(`Hoje é ${i}`);
        diaResult.innerHTML = `Hoje é ${i}! dia de ${pratos[0].Prato}`;
      } else {
        return false;
      }
    });
  }
  
  diaDaSemanaFuncao();
  

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
