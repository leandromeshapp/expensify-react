import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import Header from "../components/Header"
import Profile from "../components/Profile"
import Footer from "../components/Footer"

export const PrivateRoute = ({ 
    isAuthenticated, 
    userProvider,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
                <Footer userProvider={userProvider} />
            </div>
        ) : (
            <Redirect to = "/" />
        )
    )} />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
    userProvider: state.auth.provider,
})

export default connect(mapStateToProps)(PrivateRoute)