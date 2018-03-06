//import validator from "validator"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"


//Components
import AppRouter from "./routers/AppRouter"


//Store
import configureStore from "./store/configureStore"


//Actions
import { addExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"


//Selectors
import getVisibleExpenses from "./selectors/expenses"


//Styles
import "normalize.css/normalize.css";
import "./styles/styles.scss"
import "react-dates/lib/css/_datepicker.css"


const store = configureStore()

store.dispatch(addExpense({ description: "Water Bill" , amount: 4500}))
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }))
store.dispatch(addExpense({ description: "Rent" , amount: 104500}))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)


console.log(visibleExpenses)
// console.log(store.getState())


const jsx = (
    <Provider store = { store }> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))
