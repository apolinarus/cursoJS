


function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    
    msg.innerHTML = `Agora são ${hora}:${minutos} mins.`

    if (hora >= 0 && hora < 12) {
            //bom dia!
            img.src = "./images/manha.jpg"
            document.body.style.background = 'red'
    } else if (hora >= 12 && hora < 18) {
            //boa tarde
            img.src = "./images/tarde.jpg"
            document.body.style.background = '#b9846f'
    } else {
            //boa noite!!
            img.src = "./images/noite.jpg"
            document.body.style.background = '#515154'
        }

    }
