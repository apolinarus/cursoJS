function contar() {
    // recebe os dados
    let start = document.querySelector('input#txtstart').value
    let end = document.querySelector('input#txtend').value
    let passo = document.querySelector('input#txtpasso').value    
    let res = document.querySelector('div#res')  

    //validação de campos    
    if (start === '' || end === '' || passo === '' ) {
        alert(`ERRO - Informe todos os campos!`)
    } else if (passo == "0") {
        passo = 1
        alert(`Passo inválido! Considerando PASSO = 1`)
    }        
    //validando Início >< que FIm
    if (start < end) {
        res.innerHTML = `Contando: <br>`
        //contagem crescente
        for (var c = Number(start); c <= Number(end); c += Number(passo)) {
            res.innerHTML += `${c} \u{1F449} ` }
    } else {
        res.innerHTML = `Contando: <br>`
        //contagem regressiva
        for (var c = Number(start); c >= Number(end); c -= Number(passo)) {
            res.innerHTML += `${c} \u{1F448} ` }
    }
    //add bandeira fim
    res.innerHTML += `\u{2705}`
}
