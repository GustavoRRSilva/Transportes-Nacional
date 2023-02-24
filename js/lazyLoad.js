var cartoes = document.querySelector(".cartao");
console.log(cartoes)
var cartao2 = cartoes.style.height;
console.log(cartao2);
var teste = Number(cartao2.toFixed(0));
cartoes.forEach((element) => {
    element.style.height = `${cartao2}px !important`;
});
