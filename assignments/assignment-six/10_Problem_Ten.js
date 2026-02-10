// 10) Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.

function simulateTask(name, delay){

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(`${name}`)
            resolve(name)
        }, delay);
    })

}

async function seq() {
    console.log("Seq START")

    await simulateTask("task1", 1000)
    await simulateTask("task2", 1000)
    await simulateTask("task3", 1000)

    console.log("Seq END")
}

// seq()


async function par() {
    console.log("Parallel START")

    await Promise.all([
        simulateTask("Task1", 1000),
        simulateTask("Task2", 1000),
        simulateTask("Task3", 1000)
    ])

    console.log("Parallel END")
}

par()

// | Sequential               | One after another | ~3000 ms   |
// | Parallel (`Promise.all`) | Together          | ~1000 ms   |
