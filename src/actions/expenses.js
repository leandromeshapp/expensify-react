import uuid from "uuid"
import database from "../firebase/firebase"


// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes



// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the hability to dispatch other action
// and do whatever it wants)




// ADD EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})


export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = "", 
            note = "", 
            amount = 0, 
            createdAt = 0 
        } = expenseData
        const expense = { description, note, amount, createdAt }
        return database.ref("expenses").push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}


// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})


// EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})