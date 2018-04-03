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
import { setLanguage } from './actions/lang'

//Selectors
import getVisibleExpenses from "./selectors/expenses"


//Styles
import "normalize.css/normalize.css"
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


//Sets Default Language
const defaultLanguage = navigator.language || navigator.userLanguage || 'en-US'

if(defaultLanguage == 'en'){
  store.dispatch(setLanguage(defaultLanguage))
}else{
  store.dispatch(setLanguage('en'))
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('User logged in with firebase UID: ',user.uid)
        console.log('SIGN IN PROVIDER ID: ',user.providerId)
        const { currentUser } = firebase.auth()
        //var { user } = firebase.auth().currentUser
        currentUser.providerData.forEach((profile) => {
            console.log(`Sign-in provider: ${profile.providerId}`)
            console.log(`Provider-specific UID: ${profile.uid}`)
            console.log(`Name: ${profile.displayName}`)
            console.log(`Email: ${profile.email}`)
            console.log(`Photo URL: ${profile.photoURL}`)

            store.dispatch(login(user.uid, profile.providerId, currentUser,  user.displayName, user.email, user.photoURL))
        })
        // store.dispatch(login(user.uid, currentUser, profile.photoURL))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
        })
        console.log("logged in with ")
            if (history.location.pathname === "/") {
                history.push("/dashboard")
            }
    } else {
        console.log('log out')
        store.dispatch(logout())
        renderApp()
        history.push("/")
    }
})