"use strict";
//Promoções

$(window).load(function () {
  $("#myModal").modal("show");
});

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

//Formulário

let form = document.querySelector("form");
let log = document.querySelector("#resRad");
let opcoes;
let btn1 = document.querySelector("#btn1");
let confirmacao = document.querySelector("#confirmacao");
let select = document.querySelector("#pagamento");
let pagamento = select.options[select.selectedIndex].value;

function dadosFormClienteEnvio() {
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM analisado");
  });

  form.addEventListener(
    "submit",
    function (event) {
      let form = new FormData(form01);
      let output = "";
      for (const entry of form) {
        output = `${output} ${entry[0]}: ${entry[1]}`;
      }

      let dadosCliente = output;
      event.preventDefault();
      //console.log(dadosCliente);

      let dados = new Object();
      //Esse objeto pega as informações do formulário
      dados["enderecoRua"] = document.querySelector("#rua").value;
      dados["enderecoBairro"] = document.querySelector("#bairro").value;
      dados["enderecoComplemento"] = document.querySelector(
        "#complemento"
      ).value;
      dados["pagamentoEscolhido"] = pagamento; //document.querySelector("#pagamento").value;
      dados["nomeCliente"] = document.querySelector("#cliente").value;
      dados["telefoneCliente"] = document.querySelector("#telefone").value;
      dados["emailCliente"] = document.querySelector("#email").value;
      dados["obsevacaoCliente"] = document.querySelector("#obsevacao").value;
      //dados["adicionalOpcoes"] = document.querySelectorAll("[name=Adicional]");

      btn1.addEventListener("click", () => {
        swal("Dados confirmados!", "Clique em enviar pedido!", "success");
        confirmacao.innerHTML = "Dados confirmados! Clique em enviar pedido.";
      });

      dadosCliente = dadosCliente.replace(/[ ]/g, "\n");
      document.getElementById("whatsapp-share-btt").href = encodeURI(
        `https://api.whatsapp.com/send?phone=5521998549958&text=Olá! Acessei a página Promoções Delivery da PrimoCappo: Meu nome é: ${dados.nomeCliente} | Promoção do dia: ${diaPromocao} | Bairro: ${dados.enderecoBairro} | ${dadosCliente}.`
      );
    },
    false
  );
}

dadosFormClienteEnvio();

//----------------------------------------
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
