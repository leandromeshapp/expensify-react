import uuid from "uuid"
import database from "../firebase/firebase"



// ADD EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense,
})


export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const { uid } = getState().auth
        const {
            description = "", 
            note = "", 
            amount = 0, 
            createdAt = 0 
        } = expenseData
        const expense = { description, note, amount, createdAt }
        return database.ref(`users/${uid}/expenses`).push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense,
            }))
        })
    }
}


// REMOVE EXPENSE
    export const removeExpense = id => ({
    type: "REMOVE_EXPENSE",
    id,
})


export const startRemoveExpense = id => {
    return (dispatch, getState) => {
        const { uid } = getState().auth
        return database.ref(`users/${uid}/expenses/${id}`)
        .remove().then(() => {
            dispatch(removeExpense(id))
        })
    }
}




// EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})


export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const { uid } = getState().auth
        return database.ref(`users/${uid}/expenses/${id}`)
        .update(updates)
        .then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}


// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})


export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const { uid } = getState().auth
        return database.ref(`users/${uid}/expenses`)
        .orderByKey()
        //.limitToFirst(5)
        //.endAt("amount")
        
        // Order By will order by Date Creation (January)
        // Limit To First 5 will only show first 5 of Order By
        // End At will Order the 5 ASC OR DESC?


        .once('value', function(snapshot) {
            console.log('Snap: ', snapshot.val())
        })

        .then((snapshot) => {
            const expenses = []

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })    
    }
}