import {modaFeminina} from "../produtos/moda/modaFeminina";

var index = 0;

function inicializarLoja() {
  var containerProdutos = document.querySelector('.container02');
  modaFeminina.map((val) => {
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
