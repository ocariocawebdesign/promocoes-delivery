//Lógica para form de sopas

//Sabores

/*
Creme de aipim
Creme de aipim 2 opções > Camarão ou carne seca
Creme de abóbora 2 opções > Camarão ou carne seca
Sopa de ervilha

const sopas = {
  sabores: [
    "Aipim",
    "Aipim com camarão",
    "Aipim com carne seca",
    "Creme de abóbora com camarão",
    "Creme de abóbora com carne seca",
    "Sopa de ervilha",
  ],
};

console.log(sopas);

sopas.sabores.forEach((item, index) => {
  // console.log(item, index);
});

//console.log(listaSabores);

listaSaboresArray = Array.from(listaSabores);
console.log(listaSaboresArray);

listaSaboresArray.forEach((item, index) => {
  console.log(item);
});

//let value = select.options[select.selectedIndex].value;
*/
/*
const cliente = {

    Nome: document.querySelector("#cliente"),
    Telefone: document.querySelector("#telefone"),
    Email: document.querySelector("#email")
}


const nomeCliente = document.querySelector("#cliente");

const select = document.querySelector("#listaSabores");
let saborEscolhido = select.options[select.selectedIndex].value;

function saborDaSopa() {
  console.log(saborEscolhido);
}

saborDaSopa();
*/

"use strict";


let form = document.querySelector("#form01");
let btn1 = document.querySelector("#btn1");
let confirmacao = document.querySelector("#confirmacao");
let select = document.querySelector("#sabores");
let value = select.options[select.selectedIndex].value;
//let pagamento = document.querySelector("#pagamento");
//let formaPagamento = pagamento.options[pagamento.selectedIndex].value;

function dadosFormClienteEnvio() {
  console.log("script carregou");
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

      let dados = new Object();

      dados["nomeCliente"] = document.querySelector("#cliente").value;
      dados["telefoneCliente"] = document.querySelector("#telefone").value;
      dados["emailCliente"] = document.querySelector("#email").value;
      dados["cepCliente"] = document.querySelector("#cep").value;
      dados["enderecoRua"] = document.querySelector("#rua").value;
      dados["enderecoBairro"] = document.querySelector("#bairro").value;
      dados["enderecoComplemento"] = document.querySelector(
        "#complemento"
      ).value;
      dados["saborEscolhido"] = select.options[select.selectedIndex].value;
      //dados["pagamentoEscolhido"] = formaPagamento;

      console.log(dados);
      btn1.addEventListener("click", () => {
        swal("Dados confirmados!", "Clique em enviar pedido!", "success");
        confirmacao.innerHTML = "Dados confirmados! Clique em enviar pedido.";
      });

      dadosCliente = dadosCliente.replace(/[ ]/g, "\n");
      document.getElementById("whatsapp-share-btt").href = encodeURI(
        `https://api.whatsapp.com/send?phone=5521998549958&text=Olá! Acessei a página Promoção Sopas da PrimoCappo: Meu nome é: ${dados.nomeCliente} | Telefone: ${dados.telefoneCliente} | Email: ${dados.emailCliente} | Cep: ${dados.cepCliente} | Rua: ${dados.enderecoRua} | Bairro: ${dados.enderecoBairro} | Complemento: ${dados.enderecoComplemento} | Sabor escolhido: ${dados.saborEscolhido}.`
      );
    },
    false
  );
}

dadosFormClienteEnvio();
