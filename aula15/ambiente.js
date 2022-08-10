let num = [2,4,1,6,8,7]

num.push(0)


console.log(num.length)
console.log(`O array tem ${num.length} posições. \nSão elas ${num}`)
/*
for (let i = 0; i < num.length; i++) {
    console.log(`O valor da posição ${i} é: ${num[i]}`)
}
*/
num.sort()
for ( let pos in num ) {
    console.log(`O valor da posição ${pos} é: ${num[pos]}`)
}
