import React from "react"

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: props.info ? props.info.displayName : "",
            email: props.info ? props.info.email : "",
            photoURL: props.info ? props.info.photoURL : "",
            error: ""
        }
    }
    

    ondisplayNameChange = (e) => {
        const displayName = e.target.value
        this.setState(() => ({ displayName}))
    }

    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }


    onPhotoURLChange = (e) => {
        const photoURL = e.target.value
        this.setState(() => ({ photoURL }))
    }


    onSubmit = (e) => {
        this.setState(() => ({ error: "" }))

        this.setState({
            displayName: this.state.displayName,
            email: this.state.email,
            photoURL: this.state.photoURL,
        })
    }


    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error"> {this.state.error} </p>}
                <input
                    className="text-input"
                    type = "text"
                    placeholder = "Display Name"
                    autoFocus
                    value={this.state.displayName}
                    onChange={this.ondisplayNameChange}
                />

                <input 
                    className="text-input"
                    type = "text"
                    placeholder = "Email"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                />

                <input 
                    className="text-input"
                    type = "text"
                    placeholder = "Photo URL"
                    value={this.state.photoURL}
                    onChange={this.onPhotoURLChange}
                />

                <div>
                    <button className="button"> Save Profile </button>
                </div>
            </form>
        )
    }
}