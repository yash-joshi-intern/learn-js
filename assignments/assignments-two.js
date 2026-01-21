//First One
const lowerCaseThenArray = "JavaScript For Beginners".toLocaleLowerCase().split(" ").join("-");
alert(lowerCaseThenArray);

//Second One

const sliecedString = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(3,6);
alert(sliecedString);

//Third One

const arrayThree = [10, 20, 30];
const operationThree = arrayThree.map(
    p=>{
        return "$"+p
    }
);
alert(operationThree);

//Fourth One 

const arrayFour = [25, -5, 18, 0, 40];
const operationFour = arrayFour.filter(
    p=>{
        return p>=5;
    }
);
alert(operationFour)

//Fifth One

const arrayFive =  [-10, 20, 50, -5];
const operationFive = arrayFive.filter(
    a=>{
        return a>=0;
    }
).map(
    b=>{
        return b*2;
    }
)
alert(operationFive)

//six One

const arraySix = [100, 200, 50]
const operationSix = arraySix.reduce(
    (acc,curr)=>{
        return acc + curr;
    },0
);
alert(operationSix)

//seventh one

const operationSeven = {
    namee: "Alex",
    greet: () => {
        alert(`Hello, ${operationSeven.namee}`);
        console.log(`Hello,` ,operationSeven.namee)
    }
};
operationSeven.greet();

const operationSevenTwo = {
    nameeTwo: "Alex",
    tempFunction: function(){
        greetTwo = ()=>{
            alert(`Hello ${this.nameeTwo}`)
            console.log(`Hello ${this.nameeTwo}`)
        }
        greetTwo();
    }
};
operationSevenTwo.tempFunction();

//Eight One

//Theory
const user = {
    name:"Yash",
    email:"yash@gmail.com",
    settings:{
        theme:'light'
    },
    printInfo: function(){
        console.log(`User ${this.name} uses ${this.settings.theme} theme`);
    },
}

const updatedUser = {...user, name:"adminbb"}

user.printInfo();
updatedUser.printInfo();

//Answers

userEight = {theme:"light", notifications:true}
const newSettings = {...userEight, theme:"dark"} 
console.log(newSettings)

console.log(userEight.theme)

//Nine One

const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const operationNine = inventory.filter(
    a =>{
        return a.stock>0
    }
).map(
    b=>{
        return b.price * b.stock
    }
).reduce(
    (total,pointer)=>{
        return total + pointer
    },0
)


console.log(operationNine)