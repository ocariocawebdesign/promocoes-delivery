/*-----------------------------------------------------*/
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

const resul = document.querySelector("#resul");
const form = document.querySelector("#form02");
const btn1 = document.querySelector("#btn1");
const botaoWhatsApp = document.querySelector("#whatsapp-share-btt");

let cliente = document.querySelector("#cliente").value;
let telefone = document.querySelector("#telefone").value;
let email = document.querySelector("#email").value;
let cep = document.querySelector("#cep").value;
let rua = document.querySelector("#rua").value;
let bairro = document.querySelector("#bairro").value;
let complemento = document.querySelector("#complemento").value;

function dadosFormClienteEnvio() {
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM analisado");
  });

  form.addEventListener(
    "submit",
    function (event) {
      let form = new FormData(form);
      let output = "";
      for (const entry of form) {
        output = `${output} ${entry[0]}: ${entry[1]}`;
      }

      let dadosCliente = output;
      event.preventDefault();
      //console.log(dadosCliente);

      let dados = [
        cliente,
        telefone,
        email,
        cep,
        rua,
        bairro,
        complemento,
      ];

      resul.innerHTML = `Nome do cliente: ${dados[0]}, <br> 
            Telefone: ${dados[1]}<br>
            Email: ${dados[2]}<br>
            Cep: ${dados[3]}<br>
            Rua: ${dados[4]}<br>
            Bairro: ${dados[5]}<br>
            Complemento: ${dados[6]}
            
            `;

      btn1.addEventListener("click", () => {
        swal("Dados confirmados!", "Clique em enviar pedido!", "success");
        confirmacao.innerHTML = "Dados confirmados! Clique em enviar pedido.";
      });

      dadosCliente = dadosCliente.replace(/[ ]/g, "\n");
      document.getElementById("whatsapp-share-btt").href = encodeURI(
        `https://api.whatsapp.com/send?phone=5521998549958&text=Olá! Acessei a página Promoções Delivery da PrimoCappo: Meu nome é: ${dadosCliente} ${dados[0]}, | ${dados[1]} `
      );
    },
    false
  );
}

dadosFormClienteEnvio();

//let dadosCliente = [cliente, telefone, email, cep, rua, bairro, complemento];

/*resul.innerHTML = `Nome do cliente: ${dadosCliente[0]}, <br> 
    Telefone: ${dadosCliente[1]}<br>
    Email: ${dadosCliente[2]}<br>
    Cep: ${dadosCliente[3]}<br>
    Rua: ${dadosCliente[4]}<br>
    Bairro: ${dadosCliente[5]}<br>
    Complemento: ${dadosCliente[6]}
    
    `;*/
/*function dadosPedido() {
  //btn1.addEventListener("click", () => {});

  botaoWhatsApp.addEventListener("click", () => {

    let dadosCliente = [cliente, telefone, email, cep, rua, bairro, complemento];

    resul.innerHTML = `Nome do cliente: ${dadosCliente[0]}, <br> 
        Telefone: ${dadosCliente[1]}<br>
        Email: ${dadosCliente[2]}<br>
        Cep: ${dadosCliente[3]}<br>
        Rua: ${dadosCliente[4]}<br>
        Bairro: ${dadosCliente[5]}<br>
        Complemento: ${dadosCliente[6]}
        
        `;
    //window.location.href = `https://web.whatsapp.com/send?phone=5521971025148&text=Olá! Acessei a página Promoções Delivery da PrimoCappo: Meu nome é: ${dadosCliente[0]}, | ${dadosCliente[2]}, | ${dadosCliente[3]} `;
    botaoWhatsApp.href = `https://web.whatsapp.com/send?phone=5521971025148&text=Olá! Acessei a página Promoções Delivery da PrimoCappo: Meu nome é: ${dadosCliente[0]}, | ${dadosCliente[2]}, | ${dadosCliente[3]} `;
  });
}

dadosPedido();
*/
