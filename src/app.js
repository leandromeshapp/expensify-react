//import validator from "validator"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"


//Components
import AppRouter from "./routers/AppRouter"


//Store
import configureStore from "./store/configureStore"


//Actions
import { startSetExpenses } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"


//Selectors
import getVisibleExpenses from "./selectors/expenses"


//Styles
import "normalize.css/normalize.css";
import "./styles/styles.scss"
import "react-dates/lib/css/_datepicker.css"



//Firebase
import { firebase } from "./firebase/firebase"


const store = configureStore()

const jsx = (
    <Provider store = { store }> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p> Loading ... </p>, document.getElementById("app"))

store.dispatch(startSetExpenses())
.then(() => {
    ReactDOM.render(jsx, document.getElementById("app"))
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("Log In")
    } else {
        console.log("Log Out")
    }
})