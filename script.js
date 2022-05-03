const arrayNumeros = [-8, -5, -3, -2, -1, -1, 0, 1, 1, 2, 3, 5, 8, 13, 18, 23, 34, 43, 55]
const apenasNumero = 21
const frase = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe eius omnis in, aut illo dicta ipsa veniam cupiditate quidem!"
const fraseArray = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"]

// EXERCÍCIO 1
function quantosNegativos(parametro) {
    let negativos = []
    for (let i = 0; i < parametro.length; i++) {
        if (parametro[i] < 0) {
            negativos++
        }
    }
    return negativos
}
console.log(quantosNegativos(arrayNumeros));

// EXERCÍCIO 2
function somaNegativos(parametro) {
    let somaNegativos = 0
    for (let i = 0; i < parametro.length; i++) {
        if (parametro[i] < 0) {
            somaNegativos += parametro[i]
        }
    }
    return somaNegativos
}
console.log(somaNegativos(arrayNumeros));

// EXERCÍCIO 3
function numerosEntre() {
    let numerosEntre = []
    for (let i = 0; i <= apenasNumero; i++) {
        numerosEntre.push(i)
    }
    return numerosEntre
}
console.log(numerosEntre(apenasNumero));

// EXERCÍCIO 4
function numerosNegativos(parametro) {
    let negativos = []
    for (let i = 0; i < parametro.length; i++) {
        if (parametro[i] < 0) {
            negativos.push(parametro[i])
        }
    }
    return negativos
}
console.log(numerosNegativos(arrayNumeros));

// EXERCÍCIO 5
function somaNumeros(parametro) {
    let somaNumeros = 0
    for (let i = 0; i < parametro.length; i++) {
        somaNumeros += parametro[i]
        if (somaNumeros > parametro.length) {
            somaNumeros = true
        }
        else {
            somaNumeros = false
        }
    }
    return somaNumeros
}
console.log(somaNumeros(arrayNumeros));

// EXERCÍCIO 6
function maisCinco(parametro) {
    let maisCinco = []
    for (let i = 0; i < parametro.length; i++) {
        maisCinco.push(parametro[i] + 5)
    }
    return maisCinco
}
console.log(maisCinco(arrayNumeros));

// EXERCÍCIO 7 --> não estão aparecendo apenas os números maiores que a média
function calcularMedia(parametro) {
    let soma = 0
    let media = 0
    let maiorqMedia = []
    for (let i = 0; i < parametro.length; i++) {
        soma += parametro[i]
    }
    media =  soma / parametro.length
    for (let j = 0; j < parametro.length; j++) {
        if (parametro[j] > media) {
            maiorqMedia.push(parametro[j])
        }
    }
    return maiorqMedia
}
console.log(calcularMedia(arrayNumeros));

// EXERCÍCIO 8
function quantasLetrasA(parametro) {
    let quantasLetras = ""
    for (let i = 0; i < parametro.length; i++) {
        if (parametro[i] == "a" || parametro[i] == "A") {
            quantasLetras++
        }
    }
    return quantasLetras
}
console.log(quantasLetrasA(frase));

// EXERCÍCIO 9
function somaComprimento(parametro) {
    let somaStrings = 0
    for (let i = 0; i < parametro.length; i++) {
        somaStrings += parametro[i].length
    }
    return somaStrings
}
console.log(somaComprimento(fraseArray));

// EXERCÍCIO 10 --> já está recebendo cada letra como um índice do array, daí aparece tudo
function comprimentoImpar(parametro) {
    let stringArray = parametro.split(" ")
    let palavrasImpar = []
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length % 2 != 0) {
            palavrasImpar.push(stringArray[i])
        }
    }
    return palavrasImpar
}
console.log(comprimentoImpar(frase));

// EXERCÍCIO 11
function zeroNoO(parametro) {
    let mudarO = parametro.replace(/o/gi, "0")
    return mudarO
}
console.log(zeroNoO(frase));

// EXERCÍCIO 12
function pMaiusculo(parametro) {
    let mudarP = parametro.replace(/p/g, "P")
    return mudarP
}
console.log(pMaiusculo(frase));