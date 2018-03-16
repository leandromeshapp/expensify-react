import React from "react"
import { Router, Route, Switch, Link, NavLink } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'

//Components
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import NotFoundPage from "../components/NotFoundPage"
import LoginPage from "../components/LoginPage"
import Register from "../components/Register"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
//import RegisterPage from "../components/RegisterPage";
import LoginT from "../components/LoginT"


export const history = createHistory()


const AppRouter = () => (
 <Router history={history}>
    <div>
        <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            
            <Route exact path="/register" component={Register} />
            <Route exact path="/logint" component={LoginT} />
            
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />

            <Route component={NotFoundPage} />
        </Switch>
    </div>
</Router>
)

export default AppRouter