// const transactions = [
//   { userId: 1, type: "credit", amount: 500 },
//   { userId: 2, type: "debit", amount: 200 },
//   { userId: 1, type: "debit", amount: 1000 },
//   { userId: 3, type: "credit", amount: 700 },
//   { userId: 2, type: "credit", amount: 300 },
//   { userId: 1, type: "credit", amount: 200 }
// ];

// const answerCredit = transactions.filter(
//     fil=>{
//         return fil.type=="credit"
//     }
// )

// const answerDebit = transactions.filter(
//     fil=>{
//         return fil.type=="debit"
//     }
// )
// console.log(answerCredit)
// console.log(answerDebit)

// const answerTotalCredit = transactions.reduce(
//     (acc,current)=>{
//         // acc.push(current)
//         var tempValues = current.type=="credit"? current.amount : -current.amount
//         let temp = acc.filter(obj => obj.userId == current.userId);

//         if (temp.length>0){
//             temp.balance += tempValues
//         }else{
//             acc.push({
//                 userId: current.userId,
//                 balance : tempValues
//             })
//         }    
//         return acc   
//     },[]
// )

// console.log(answerTotalCredit)

// const answerTotalDebit = answerDebit.reduce(
//     (acc,current)=>{
//         if (acc.find(obj => obj.userId === current.userId)){
//             obj.amount -= current.amount
//         }else{
//             return acc.push(current)
//         }       
//     },[]
// )

// console.log(answerTotalDebit)



// console.log(answerTotalCredit)
// console.log(answer)


const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "A", salary: 5000 },
      { name: "B", salary: 7000 }
    ]
  },
  {
    name: "HR",
    employees: [
      { name: "C", salary: 4000 },
      { name: "D", salary: 6000 }
    ]
  }
];

const asnwer = departments.map(
    e =>{
        const total = e.employees.reduce(
           (acc,current)=>{
            return acc + current.salary
           },0
        )
        console.log(total)
        const avg = total/e.employees.length
        return e.name + ": " + avg
    }
)

console.log(asnwer)

console.log("thired ONe")

const text = "JS is great and JS is powerful and JS is fun";

const andd = text.toLowerCase().split(" ").filter(
    a =>{
        return a.length>=3
    }
).reduce(
    (acc,current)=>{

        let temp = acc.filter(obj => obj[0] == current);

        if (temp.length>0){
            temp[0][1] += 1
        }else{
            acc.push([
                current,1
            ])
        } 
        return acc   
    },[]
)


console.log(andd)

// const answerTotalCredit = transactions.reduce(
//     (acc,current)=>{
//         // acc.push(current)
//         var tempValues = current.type=="credit"? current.amount : -current.amount
//         let temp = acc.filter(obj => obj.userId == current.userId);

//         if (temp.length>0){
//             temp.balance += tempValues
//         }else{
//             acc.push({
//                 userId: current.userId,
//                 balance : tempValues
//             })
//         }    
//         return acc   
//     },[]
// )