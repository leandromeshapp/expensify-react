const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "leandro",
            age: 18
        })
        // reject("reject Data")
    }, 2500)
})

console.log("before")

promise.then((data) => {
    console.log("1 ",data)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("my other promisse")
        }, 2500)
    })
}).then((str) => {
    console.log("does this run? ", str)
}).catch((error) => {
    console.log("error: ", error)
})

console.log("after")