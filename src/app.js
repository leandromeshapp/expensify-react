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

    // if (user) {
    //     console.log('User logged in with firebase ID: ', user.uid);
    //     const { currentUser } = firebase.auth();
    //     currentUser.providerData.forEach((profile) => {
    //     console.log(`Sign-in provider:  ${profile.providerId}`);
    //     console.log(`Provider-specific UID: ${profile.uid}`);
    //     console.log(`Name: ${profile.displayName}`);
    //     console.log(`Email: ${profile.email}`);
    //     console.log(`Photo URL: ${profile.photoURL}`);
    // });
    //     if (user.providerId == "password") {
    //         store.dispatch(login(user.uid, user.currentUser));
    //     } else {
    //         store.dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
    //     }
        
    //     store.dispatch(startSetExpenses()).then(() => {
    //         renderApp();
    //     });
    //         if (history.location.pathname === '/') {
    //           history.push('/dashboard');
    //         }



        if (user) {

        user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);

            store.dispatch(login( profile.uid, profile.providerId, profile.displayName, profile.email, profile.photoURL ))
        });

        //const { uid, displayName, email, photoURL } = user
        //store.dispatch(login( uid, displayName, email, photoURL ))
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