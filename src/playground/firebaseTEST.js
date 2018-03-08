
// EVENT CHILD_REMOVED
database.ref("expenses").on("child_removed", (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})


// EVENT CHILD_CHANGED
database.ref("expenses").on("child_changed", (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})


// EVENT CHILD_ADDED
database.ref("expenses").on("child_added", (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})





// database.ref("expenses")
//     .on("value", (snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })



// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })



// database.ref("expenses").push({
//     amount: "350",
//     createdAt: "january",
//     description: "January Rent",
//     note: "Paid"
// })










// database.ref("expenses").push({
//     amount: "350",
//     createdAt: "february",
//     description: "Febuary Rent",
//     note: "Paid"
// })


database.ref("expenses").push({
    amount: "350",
    createdAt: "march",
    description: "March Rent",
    note: "Not Paid"
})




// database.ref("notes/-L74GOyw3UoZwgtPYXvU").update({
//     body: "Run 10Km"
// })


// database.ref("notes").push({
//     title: "Udemy Course",
//     body: "ReactJS"
// })


// const firebaseNotes = {
//     notes: {
//         id1: {
//             title: "first note",
//             body: "my note"
//         },
//         id2: {
//             title: "second note",
//             body: "second note"
//         }
//     }
// }
// const notes = [{
//     id: "1234mar",
//     title: "First note",
//     body: "this is my note"
// }, {
//     id: "12feb",
//     title: "Another note",
//     body: "this is my note222"
// }]

//database.ref("notes").set(firebaseNotes)
// database.ref().on("value", (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })


// database.ref().set({
//     name: "Leandro Almeida",
//     job: {
//             title: "Frontend Developer",
//             company: "Google"
//     }
// }



// const onValueChange = database.ref()
//     .on("value", (snapshot) => {
//         console.log(snapshot.val())
// }, (e) => {
//     console.log("error with data fecthing ",e)
// })


// setTimeout(() => {
//     database.ref("age").set(32)
// }, 4500)


// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 6500)


// setTimeout(() => {
//     database.ref("age").set(34)
// }, 9500)
// database.ref("location/city")
// .once("value")
// .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// })
// .catch((e) => {
//     console.log("error fetching data ",e)
// })
///////////////////////////////////////
// database.ref().set({
//     name: "Leandro Almeida",
//     age: 18,
//     stressLevel: 3,
//     job: {
//         title: "Frontend Developer",
//         company: "N/A"
//     },
//     isHuman: true,
//     location: {
//         city: "Lisbon",
//         country: "Portugal"
//     }
// }).then(() => {
//     console.log("data saved!")
// }).catch((e) => {
//     console.log("this failed",e)
// })


// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Google",
//     "location/city": "Lisboa"
// })
////////////////////////////////////
//database.ref().set("This is a string")

// database.ref("age").set(28)
// database.ref("location/city").set("Lisboa")


// database.ref("attributes").set({
//     height: 70 ,
//     weight: 180
// }).then(() => {
//     console.log("second data saved!!")
// }).catch((e) => {
//     console.log("this failed dude. see the error: ",e)
// })


// database.ref()
//     .remove()
//     .then(() => {
//         console.log("data removed")
//     }).catch((e) => {
//         console.log("not removed")
//     })