import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"


//Components
import AppRouter, { history } from "./routers/AppRouter"
import LoadingPage from "./components/LoadingPage"


//Store
import configureStore from "./store/configureStore"


//Actions
import { startSetExpenses } from "./actions/expenses"
import { login, logout } from "./actions/auth"


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

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById("app"))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const { uid, displayName, email, photoURL } = user
        store.dispatch(login( uid, displayName, email, photoURL ))
        console.log("log in with ")

        //store.dispatch(login(user))
        
        store.dispatch(startSetExpenses())
        .then(() => {
            renderApp()
            if (history.location.pathname === "/") {
                history.push("/dashboard")
            }
        })
    } else {
        console.log('log out');
        store.dispatch(logout())
        renderApp()
        history.push("/")
    }
})