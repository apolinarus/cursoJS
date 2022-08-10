function gerarTabuada() {
    let num = document.querySelector('input#txtnumero')
    let result = document.querySelector('select#seltab')
    
    result.innerHTML = ''
    if (num.value.length == 0) {
        alert(`Por favor, digite um número!`)
    } else {        
        //gera a tabuada        
        for (let i = 1; i <=10; i++) {
            let item = document.createElement('option')
            item.text = `${num.value} x ${i} = ${num.value * i} \n` 
            item.value = `tab${i}`
            result.appendChild(item)             
        }
    }    
}
