"use strict";
//Promoções

let promocao01 = document.querySelector("#promocao01");
let promocao02 = document.querySelector("#promocao02");
let promocao03 = document.querySelector("#promocao03");
let indisponivel01 = document.querySelector("#indisponivel01");
let indisponivel02 = document.querySelector("#indisponivel02");
let indisponivel03 = document.querySelector("#indisponivel03");
let botoesPromocao01 = document.querySelector("#botoesPromocao01");
let botoesPromocao02 = document.querySelector("#botoesPromocao02");
let botoesPromocao03 = document.querySelector("#botoesPromocao03");

let data = new Date();
let diaDaSemana = new Array(7);

diaDaSemana[0] = "Domingo";
diaDaSemana[1] = "Segunda-Dose-Dupla";
diaDaSemana[2] = "Terça-Ganhe-1-brotinho-doce";
diaDaSemana[3] = "Quarta-Dose-Dupla";
diaDaSemana[4] = "Quinta-Ganhe-1-brotinho-doce";
diaDaSemana[5] = "Sexta-Ganhe-1-refri-2-litros";
diaDaSemana[6] = "Sabado-Ganhe-1-refri-2-litros";

var diaPromocao = diaDaSemana[data.getDay()];
console.log(diaPromocao);

if (
  diaPromocao === "Segunda-Dose-Dupla" ||
  diaPromocao === "Quarta-Dose-Dupla"
) {
  indisponivel02.innerHTML = "Promoção indisponível";
  indisponivel03.innerHTML = "Promoção indisponível";
  botoesPromocao02.style.display = "none";
  botoesPromocao03.style.display = "none";
  promocao02.style.background = "#FAFAFA";
  promocao02.style.borderRadius = "2px";
  promocao03.style.background = "#FAFAFA";
  promocao03.style.borderRadius = "2px";
} else if (
  diaPromocao === "Terça-Ganhe-1-brotinho-doce" ||
  diaPromocao === "Quinta-Ganhe-1-brotinho-doce"
) {
  indisponivel01.innerHTML = "Promoção indisponível";
  indisponivel03.innerHTML = "Promoção indisponível";
  botoesPromocao01.style.display = "none";
  botoesPromocao03.style.display = "none";
  promocao01.style.background = "rgba(44, 42, 44, 0.3)";
  promocao03.style.background = "rgba(44, 42, 44, 0.3)";
} else if (
  diaPromocao === "Sexta-Ganhe-1-refri-2-litros" ||
  diaPromocao === "Sabado-Ganhe-1-refri-2-litros"
) {
  indisponivel01.innerHTML = "Promoção indisponível";
  indisponivel02.innerHTML = "Promoção indisponível";
  botoesPromocao01.style.display = "none";
  botoesPromocao02.style.display = "none";
  promocao01.style.background = "rgba(44, 42, 44, 0.3)";
  promocao02.style.background = "rgba(44, 42, 44, 0.3)";
} else {
  indisponivel01.innerHTML = "Promoção indisponível";
  indisponivel02.innerHTML = "Promoção indisponível";
  indisponivel03.innerHTML = "Promoção indisponível";

  botoesPromocao01.style.display = "none";
  botoesPromocao02.style.display = "none";
  botoesPromocao03.style.display = "none";
  promocao01.style.background = "rgba(44, 42, 44, 0.3)";
  promocao02.style.background = "rgba(44, 42, 44, 0.3)";
  promocao03.style.background = "rgba(44, 42, 44, 0.3)";
}

/*-----------------------------------------------------*/

//Função formata a data e hora
function formatDate() {
  const formatNum = (num) => {
    return num >= 10 ? num : `0${num}`;
  };
  const dia = formatNum(data1.getDate());
  const mes = formatNum(data1.getMonth());
  const ano = formatNum(data1.getFullYear());
  const hora = formatNum(data1.getHours());
  const min = formatNum(data1.getMinutes());
  const seg = formatNum(data1.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data1 = new Date();
const dataBrasil = formatDate(data1);

//Função pega dados do form
function pegaDados() {
  let form = document.querySelector("form");
  let log = document.querySelector("#resRad");
  let opcoes;
  let btn1 = document.querySelector("#btn1");
  let confirmacao = document.querySelector("#confirmacao");
  let select = document.querySelector("#pagamento");
  //let pagamento = select.options[select.selectedIndex].value;

  //Exemplo de link de pagamento
  /*prodPrecosUrl = [
    "1 - https://pag.ae/7W9MR8W66",
    "2 - https://pag.ae/7W9MR8W66",
    "3 - https://pag.ae/7W9MR8W66",
    "4 - https://pag.ae/7W9MR8W66",
    "5 - https://pag.ae/7W9MR8W66",
    "6 - https://pag.ae/7W9MR8W66",
  ];*/

  //Evento quando o botão é clicado pega os valores e retona para o objeto
  btn1.addEventListener("click", () => {
    let dados = new Object();
    //Esse objeto pega as informações do formulário
    dados["enderecoRua"] = document.querySelector("#rua").value;
    dados["enderecoBairro"] = document.querySelector("#bairro").value;
    dados["enderecoComplemento"] = document.querySelector("#complemento").value;
    dados["pagamentoEscolhido"] = select.options[select.selectedIndex].value;
    dados["nomeCliente"] = document.querySelector("#cliente").value;
    dados["telefoneCliente"] = document.querySelector("#telefone").value;
    dados["emailCliente"] = document.querySelector("#email").value;
    dados["obsevacaoCliente"] = document.querySelector("#obsevacao").value;

    //dados["urlPagamento"] = prodPrecosUrl[0]; // URL de pagamento do primeiro produto da array

    //Abri outra página com as informações para msg no WhatsApp
    window.open(
      `https://api.whatsapp.com/send?phone=5521971025148&text=Olá! Acessei a página Promoções Delivery da PrimoCappo promoção do dia:| Meu nome é: ${dados.nomeCliente} | Meu telefone: ${dados.telefoneCliente} | Email: ${dados.emailCliente} | Rua: ${dados.enderecoRua} | Complemento: ${dados.enderecoComplemento} Bairro: ${dados.enderecoBairro} | Pagamento: ${dados.pagamentoEscolhido} | Horário do pedido: ${dataBrasil}| Obs: ${dados.obsevacaoCliente}`
    );
  });
}

pegaDados();


// Sabores de pizza

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
  