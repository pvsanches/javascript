let valores = [3, 12, 9, 6, 2, 5, 1]
valores.sort()

/*
let maior = Math.max.apply(null, valores)
console.log(`O maior valor informado é: ${maior}`)

let menor = Math.min.apply(null, valores)
console.log(`O menor valor informado é: ${menor}`)
*/

let maior = 0
for(let pos = 0; pos < valores.length; pos++) {
    if (valores[pos] > maior) {
        maior = valores[pos]
    }
}
console.log(`O maior valor informado é: ${maior}`)
