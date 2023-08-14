import {modaMasculina} from "../produtos/moda/modaMasculina";

var index = 0;

function inicializarLoja() {
  var containerProdutos = document.querySelector('.container02');
  modaMasculina.map((val) => {
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
