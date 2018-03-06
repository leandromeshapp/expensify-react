import { createStore, combineReducers } from "redux"
import uuid from "uuid"


// ADD EXPENSE
const addExpense = ( 
    { 
        description = "", 
        note = "", 
        amount = 0, 
        createdAt = 0 
    } = { } 
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

// EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})


// SET TEXT FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})



// SORT BY DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
})


// SORT BY AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})


// SET START DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})


// SET END DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})



// EXPENSES REDUCERS
const expensesReducerDefaultState = [] 

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE" :
            return state.filter(({ id }) => id !== action.id)
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}


// FILTERS REDUCER
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

//
// timestamp (milliseconds)
// january 1st 1970 (unix epoch)
// 


//GET Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate != "number" || expense.createdAt >= startDate
        const endDateMatch = typeof endDate != "number" || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDate && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === "amount" ) {
            return a.amount < b.amount ? 1 : -1
        }
    })
}



// STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)


store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)  
    console.log(store.getState())    
})

const expenseOne = store.dispatch(addExpense({ description: "Rent January", amount: 120, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({ description: "Rent February", amount: 120, createdAt: -2000 }))

store.dispatch(removeExpense({
    id: expenseOne.expense.id
}))

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }))

store.dispatch(setTextFilter("rent"))
store.dispatch(setTextFilter(""))


store.dispatch(sortByAmount())
store.dispatch(sortByDate())


store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))

console.log(expenseOne)

const demoState = {
    expenses: [{
        id: "1",
        description: "January Rent",
        notes: "Payment for January",
        amount: 450,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", // Date or amount
        startDate: undefined,
        endDate: undefined
    }
}

console.log(demoState.filters)
console.log("t3ok")



const user = {
    name: "leandroSDDS",
    age: 24
}

console.log({
    ...user,
    location: "Portugal",
    age: 18
})