import {acessorios} from "../produtos/acessorios/acessorio";

var index = 0;

function inicializarLoja() {
  var containerProdutos = document.querySelector('.container03');
  acessorios.map((val) => {
    if(index <= 3){

    containerProdutos.innerHTML += ` 
    <div class="produtos-single">
    <img src="` + val.img + `">
    <p class='buy'> R$` + val.price + `</p>
    <p>` + val.name + `</p>
    </div>
    `;
    index++
  };
  })
}
inicializarLoja();
