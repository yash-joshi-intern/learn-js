// Number Check

const checkNumber = (userInputt) =>{
    if(userInputt>0){
        return "POSITIVE"
    }else if(userInputt==0){
        return "Zero"
    }else{
        return "NEGATIVE"
    }
}

const userInput = prompt("Enter The Number to check P/N:");
alert(checkNumber(userInput))
// console.log(checkNumber(userInput))

//Even/Odd in Range

for(var i = 1 ; i <=20 ; i++){
    if(i%2==0){
        console.log("EVEN")
        continue
    }
   console.log("ODD")
}
alert("check in console various output of the 2nd problem")

//Role Access using switch-case

const checkRole = (userRolee) =>{
    const temp = userRolee.toUpperCase();
    switch(temp){
        case 'ADMIN':
            alert("Access Granted")
            break
        case 'USER':
            alert("Limited Access")
            break
        case 'MANAGER':
            alert("Moderate Access")
            break
        default:
            alert("Try Letter")
            break
    }
}

const userRole = prompt("Enter Role:")
alert(checkRole(userRole))

//Total Price Function

const priceCalculator = (totalPrice, totalQuantity) => {
    return totalPrice * totalQuantity;
}

const totalPrice = prompt("Enter Price");
const totalQuantity = prompt("Enter Quantity");

alert(priceCalculator(totalPrice, totalQuantity))

//Coupon Discount Function

const calFinalPrice = (couponCode,initialPrice) =>{
    if(couponCode=="SAVE10"){
        return initialPrice - (initialPrice * 10)/100;
    }else if(couponCode=="SAVE20"){
        return initialPrice - (initialPrice * 20)/100;
    }else{
        return initialPrice
    }
}

const couponCode = prompt("Enter the coupon code:")
const initialPrice = prompt("Enger the price:")

alert(calFinalPrice(couponCode,initialPrice))