import {modaMasculina} from "../produtos/moda/modaMasculina";


function inicializarLoja() {
  var containerProdutos = document.querySelector('.modaMasculina');
  modaMasculina.map((val) => {
    containerProdutos.innerHTML += `
    
    <div class="produtos-single">
    <img src="` + val.img + `" class="produtoImg">
    <p>` + val.name + `</p>
    </div>
    `;

  })

};
inicializarLoja();
