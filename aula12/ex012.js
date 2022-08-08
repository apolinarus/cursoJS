var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora< 12) {
    console.log(`São ${agora}.\nBom dia!`)
} else if (hora <= 18) {
    console.log(`São ${agora}. \nBoa tarde!`)
    }
    else {
        console.log(`São ${agora}.\nBoa noite!`)
    }