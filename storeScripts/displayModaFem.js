import {modaFeminina} from "../produtos/moda/modaFeminina";

function inicializarLoja() {
  var modaFem = document.querySelector('.displayModaFem');
  modaFeminina.map((val) => {
    modaFem.innerHTML += `
    
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