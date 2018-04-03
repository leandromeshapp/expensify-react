// HOC -> Higher Order Component
// A component that renders another component
// Reuse Code
// Render Hijacking
// Props manipulation
// Abstract State


import React from "react"
import ReactDOM from "react-dom"

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p> The Info is: {props.info} </p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAdmin && <p> Private Info. Don't share!</p>
            }
            
            <WrappedComponent {...props} />
        </div>
    )
}


//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                    <WrappedComponent {...props} />
                ) : (
                   <p> Log In to view the info </p> 
                )
            }
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)


const AdminInfo = withAdminWarning(Info)


ReactDOM.render(<AuthInfo isAuthenticated = {true} info="details. this is info props" />, document.getElementById("app"))
//ReactDOM.render(<AdminInfo isAdmin = {true} info="details. this is info props" />, document.getElementById("app"))