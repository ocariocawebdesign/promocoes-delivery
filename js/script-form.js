"use strict";

//Script para pegar cep

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  //document.getElementById("cidade").value = "";
  //document.getElementById("uf").value = "";
  //document.getElementById("nome").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    //document.getElementById("cidade").value = conteudo.localidade;
    //document.getElementById("uf").value = conteudo.uf;
    //document.getElementById("ibge").value = conteudo.ibge;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  let cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    let validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      //document.getElementById("cidade").value = "...";
      //document.getElementById("uf").value = "...";
      //document.getElementById("ibge").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

/*-----------------------------------------------------*/


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
      dados["enderecoComplemento"] = document.querySelector("#complemento").value;
      dados["saborEscolhido"] = select.options[select.selectedIndex].value;
      //dados["pagamentoEscolhido"] = formaPagamento;

      console.log(dados);
      btn1.addEventListener("click", () => {
        swal("Dados confirmados!", "Clique em enviar pedido!", "success");
        confirmacao.innerHTML = "Dados confirmados! Clique em enviar pedido.";
      });

      dadosCliente = dadosCliente.replace(/[ ]/g, "\n");
      document.getElementById("whatsapp-share-btt").href = encodeURI(
        `https://api.whatsapp.com/send?phone=5521998549958&text=Olá! Acessei a página Promoção Strogonoff da PrimoCappo: Meu nome é: ${dados.nomeCliente} | Telefone: ${dados.telefoneCliente} | Email: ${dados.emailCliente} | Cep: ${dados.cepCliente} | Rua: ${dados.enderecoRua} | Bairro: ${dados.enderecoBairro} | Complemento: ${dados.enderecoComplemento} | Sabor escolhido: ${dados.saborEscolhido}.`
      );
    },
    false
  );
}

dadosFormClienteEnvio();
