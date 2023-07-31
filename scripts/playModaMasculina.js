import {modaMasculina} from "../produtos/moda/modaMasculina";

console.log(modaMasculina.name)

function inicializarLoja() {
  var containerProdutos = document.querySelector('.modaMasculina');
  modaMasculina.map((val) => {
    containerProdutos.innerHTML +=`
    <div class="produtos-single">
    <img src="${val.img}" class="produtoImg" />
    </div>
    `;

  })

};
inicializarLoja();
