import {acessorios} from "../produtos/acessorios/acessorio";

function inicializarLoja() {
  var acesso = document.querySelector('.displayAcessorios');
  acessorios.map((val) => {
    acesso.innerHTML += `
    
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