const pizza_sabores = new Object();

pizza_sabores["alho"] = "Mussarela alho e orégano (Mossarella, garlic and oregano).";
pizza_sabores["calabresa"] = "Mussarela, calabresa, cebola,azeitonas e orégano.(Mossarella, calabresa, onions, olives and oregano)";
pizza_sabores["cappo"] = "Mussarela, calabresa fatiada, bacon, tomate e orégano. (Mossarella, sliced calabresa, bacon, tomato and oregano)";
pizza_sabores["champignon"] = "Mussarela, champignon, azeitonas e orégano. (Mossarella, champignon, olives and oregano)";
pizza_sabores["frango_catupiry"] = "Mussarela, frango desfifado com catupiry e orégano. (Mossarella, shredded chicken, catupiry and oregano)";
pizza_sabores["margherita"] = "Mussarela, tomates frescos, manjericão e orégano. (Mossarella, fresh tomatos, basil and oregano)";
pizza_sabores["napolitana"] = "Mussarela, parmesão, tomates frescos manjerição e orégano. (Mossarella, fresh tomatos, basil and oregano)";
pizza_sabores["pepperoni"] = "Mussarela, pepperoni e orégano.(Mossarella, pepperoni and oregano)";
pizza_sabores["presunto"] = "Mussarela, presunto, azeitonas e orégano. (Mossarella, ham, olives and oregano)";
pizza_sabores["quatro_quejos"] = "Mussarela, provolone, catupiry, parmesão e orégano. (Mossarella, provolone, catupiry, parmesan and oregano)";
pizza_sabores["veneza"] = "Mussarela, champignon, presuntoe orégano. (Mossarella, champignon, ham and oregano)";
pizza_sabores["bambina"] = "Mussarela, calabresa, champignon, pimentão, azeitonas e orégano.(Mossarella, calabresa, champignon, pepper, olives and oregano)";


const saboresPizzas = document.querySelector("#sabores");
const pizzaSabores01 = [

  "Muzzarela",
  "Alho e óleo",
  "Presunto",
  "Bambina",
  "Calabresa",
  "Califórnia",
  "Cappo",
  "Carne seca com abóbora",
  "Champignon",
  "Francesa",
  "Frango com catupiry",
  "Genova",
  "Margherita",
  "Napolitana",
  "Palmito",
  "Pepperoni",
  "Portuguesa",
  "Primo",
  "Quatro queijos",
  "Tomate seco com rúcula",
  "Veneza",
];

const buttonApp = document.querySelector("#botaoApp");
const resultButton = document.querySelector("#resultButton");

buttonApp.addEventListener("click", () => {
  resultButton.innerHTML = `<h6>Esse é o sabor:</h6> <p>${pizzaSabores01[10]}</p>`;
});

