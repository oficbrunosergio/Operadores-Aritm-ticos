

/*  Functions / Funções
        Trecho de código que é executado
        SOMENTE quando solicitado (O Parente gente boavel
*/

//const variavel = "pitomba"

//console.log(variavel)

//function nomeNaTela(name) {
//    console.log(`O nome é: ${name}`)

//}

//nomeNaTela("Pitomba")

/*----------------------------------------------------------------*/
//Podemos colocar vario resultados. quanto nos quizermos.

function sum(value, value2){
    console.log(value + value2)

}

sum(20, 30)
sum(25, 54)

/*--------------------------------------------------------------- */
//Temos tbm a opição de deixar um resultado padrão digitando (name = "BRUNO")
//dessa forma sempre que não for mandado nenhuma informação, o codigo tera uma resposta "fixa".

function sayMyName(name = "Bruno"){
    console.log(name)

}

sayMyName()

/*--------------------------------------------------------------- */
//Podemos fazer calculos e adicionar mais de 1 valor, ou melhor, quantos valores quisermos, pondo uma virgula (,) ao lado
//e tambem valor padrão ou criar uma variavel com o valor padrão -> const myNumber = "O NUMERO PADRÃO" <-

const myNumber = 30

function sum(number1 = myNumber, number2 = 1){
    console.log(number1 + number2)

}

sum()