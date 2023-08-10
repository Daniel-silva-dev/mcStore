import {modaMasculina} from "../produtos/moda/modaMasculina";

function inicializarLoja() {
  var containerProdutos = document.querySelector('.container04');
  modaMasculina.map((val) => {
    containerProdutos.innerHTML += `
    
    <div class="produtos-single">
    <img src="` + val.img + `">
    <p class='buy'> R$` + val.price + `</p>
    <p>` + val.name + `</p>
    </div>
    
    `;

  })

};
inicializarLoja();
