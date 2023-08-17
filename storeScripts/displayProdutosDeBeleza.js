import {produtosDeBeleza} from "../produtos/skinCare/produtosDeBeleza";

function inicializarLoja() {
  var produDeBele = document.querySelector('.displayProdutosDeBeleza');
  produtosDeBeleza.map((val) => {
    produDeBele.innerHTML += `
    
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