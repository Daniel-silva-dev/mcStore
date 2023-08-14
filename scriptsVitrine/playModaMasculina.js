import {modaMasculina} from "../produtos/moda/modaMasculina";

var index = 0;

function inicializarLoja() {
  var containerProdutos = document.querySelector('.container01');
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

// function adicionarAoCarrinho() {
//   var containerCarrinho = document.querySelector('.carrinho');
//   containerCarrinho.innerHTML = '';
//   items.map((val) => {
//     if(val.quantidade > 0){
//     containerCarrinho.innerHTML += `
      
// <p>`+val.name+` | quantidade: `+val.quantidade+`
//       <hr>
//       `;
//     }
//   })
  
// }

// var links = document.getElementsByTagName('a');

// for(var i = 0; i < links.length; i++){
//   links[i].addEventListener('click', function(){
//     let key = this.getAttribute('key');
//     items[key].quantidade++
//     adicionarAoCarrinho();
//     return false;
//   })
// }
