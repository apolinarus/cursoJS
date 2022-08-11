//variaveis
let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//função que exibe mensagem de erro
function numInvalido () {
    return alert(`ERRO - Valor inválido ou já informado!`)
}
//função que valida se um número informado está no intervalo entre 1 e 100
function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

//função que verifica se o array está vazio.
function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    res.innerHTML = ''
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado!`
    lista.appendChild(item)

    } else {
        numInvalido ()
    }
    num.value = ''
    num.focus()
}


function finalizar () {
    if ( valores.length == 0 ){
        alert(`Adicione valores antes de finalizar!`)
    } else {
        //variáveis
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
       
        //percorre o array para encontrar o maior valor e menor valor informado.
        for (pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            //Registra a soma de todos os valores informados.
            soma += valores[pos]
        }
        //Executa a média
        media = soma / valores.length

        //Retorna resultados no HTML
        res.innerHTML = ''
        res.innerHTML += (`<p>Ao todo, temos ${total} números cadastrados.</p>`)
        res.innerHTML += (`<p> O maior número foi: ${maior}</p>`)
        res.innerHTML += (`<p>O menor número foi: ${menor}</p>`)
        res.innerHTML += (`<p>A soma de todos valores digitados é: ${soma}</p>`)
        res.innerHTML += (`<p>A média de todos os valores digitados é: ${media}</p>`)      
                
    }
}