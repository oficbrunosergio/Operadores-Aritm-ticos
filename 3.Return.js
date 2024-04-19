/*
    Calcula Desconto:
    Todos os Produtos acima de R$ 30,00 tem desonto de 10%
*/

const cart = [10, 244, 99, 2, 20, 33, 250]; 
let semDesconto = 0;                        
let finalValueWithDiscount = 0;


cart.forEach((value) => {                   /*<<Resultado sem desconto*/
    semDesconto += value
});


function calculateDiscount(price, discount) {   /*<<multiplicação do resultado por 100*/
  const result = (price * discount) / 100;
  return result;
}

cart.forEach((value) => {
  if (value > 30) {                                     /*<<Verificando valores ascima de 30 e adicionando 10% neles*/
    const discount = calculateDiscount(value, 10);
    finalValueWithDiscount += value - discount;
  } else {
    finalValueWithDiscount += value;
  }
});

let desconto = semDesconto - finalValueWithDiscount;           


console.log(`O Valor final da compra foi de R$ ${semDesconto},
Porem vc vai pagar apenas R$ ${finalValueWithDiscount}
Vc economisou R$ ${desconto.toFixed(2)}`);


 /*O Rodolfo deixou um desafio para encontrar e por na tela o resultaro 
 sem desconto e o desconto adiquirido, para encontrar o valor sem desconto fiz uma soma la em cima
 usando o forEach e para o valor de desconto fiz o let aqui em baixo relatando que o
 Desconto é = a semDesconto - finalValueWithDiscount. assim consegui o resultado do desconto.*/
