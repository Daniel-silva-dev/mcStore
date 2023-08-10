import {modaMasculina} from "../produtos/moda/modaMasculina";

function inicializarLoja() {
  var modaMasc = document.querySelector('.displayModaMasc');
  modaMasculina.map((val) => {
    modaMasc.innerHTML += `
    
    <div class="produtoSingle">
    <img src="` + val.img + `">
    <p class='buy'> R$` + val.price + `</p>
    <p>` + val.name + `</p>
    <a class='comprar' href="#">Comprar</a> <a class='car' href="#">Adicionar ao Carrinho</a>
    </div>
    
    `;

  })

};
inicializarLoja();