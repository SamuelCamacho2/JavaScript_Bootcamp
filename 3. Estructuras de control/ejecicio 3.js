//for de factorial de 10

let total = 1
for(let i=1; i<=10; i++){
    total = total * i
}

console.log(total)

// while factorail de 10
let idx = 1
let total2 = 1
while(idx <=10 ){
    total2 = total2 * idx
    idx++
}
console.log(total2)

// 

let total3 = 1
let idx2 = 1

while(true){
    total3 = total3 * idx2
    if(idx2 === 10){
        break
    }
    idx2++
}

console.log(total3)