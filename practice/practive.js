var varOne = 3
var varTwo = 4;
console.log(varOne + varTwo + 3)

console.log('hi'.toUpperCase())
console.log(typeof null)
console.log(typeof "43")
console.log(typeof 43)


function calculate(amount, tax){
    return amount+tax*2
}

const total = (amount, tax) => {
    return amount +tax*2
}

console.log(calculate(2,10))
console.log(total(2,10))

for(var i = 0; i<1 ; i++){
    console.table(i)
    // const r = i;
}
const tempFunction = () => {
    const dd = 200;
    return dd;
}
console.log(tempFunction())