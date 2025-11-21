/*
let tal = []
for(let i=1; i<=3; i+=1) {
    let talen = +await read("Tal "+i+":")
    tal.push(talen)
}
function sum(nummer) {
    let summa = 0
    for(let i=0; i<nummer.length; i++) {
        summa += nummer[i]
    }
    return summa
}
write("Summan är: "+sum(tal))
*/
/*
let tal = []
for(let i=1; i<=2; i+=1) {
    let talen = +await read("Tal "+i+":")
    tal.push(talen)
}
function sum(nummer) {
    let summa = 0
    let första = nummer[0]
    if(första > nummer[1]) {
        summa = första - nummer[1]
    } else {
        summa = nummer[1] - första
    }
    return summa
}
write("Absolutbeloppet: "+sum(tal))
*/
/*
let kordi = []
let x1 = +await read("X 1: ")
kordi.push(x1)
let y1 = +await read("Y 1: ")
kordi.push(y1)
let x2 = +await read("X 2: ")
kordi.push(x2)
let y2 = +await read("Y 2: ")
kordi.push(y2)
function sum(distans) {
    let summa = Math.sqrt((distans[0]-distans[2])**2 + (distans[1]-distans[3])**2)
    return summa
}
write("Avstånd: "+sum(kordi))
*/
export{}