var button = document.querySelector('input#button')
button.style.width = '100%'


function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert(`[ERRO] - Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './images/homem-bebe.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', './images/homem-jovem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './images/homem-adulto.jpg')
            } else {
                //senior
                img.setAttribute('src', './images/homem-senior.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './images/mulher-bebe.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', './images/mulher-jovem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './images/mulher-adulto.jpg')
            } else {
                //senior
                img.setAttribute('src', './images/mulher-senior.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
  
}