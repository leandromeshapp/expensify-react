import React from "react"

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: "",
            email: "",
            photoURL: "",
            error: ""
        }
    }
    

    componentWillMount() {
        this.setState({
            ...this.state,
            displayName: this.props.displayName,
            email: this.props.email,
            photoURL: this.props.photoURL
        })
    }


    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.displayName || !this.state.email) {
            this.setState(() => ({ error: "Please provide Display Name and E-mail." }))
        } else {
            this.setState(() => ({ error: "" }))
            this.props.onSubmit({
                displayName: this.state.displayName,
                email: this.state.email,
                photoURL: this.state.photoURL
            })
        }
    }


    onDisplayNameChange = (e) => {
        const displayName = e.target.value
        this.setState(() => ({ displayName }))
        console.log(displayName)
    }

    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
        console.log(email)
    }


    onPhotoURLChange = (e) => {
        const photoURL = e.target.value
        this.setState(() => ({ photoURL }))
        console.log(photoURL)
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
                    onChange={this.onDisplayNameChange}
                />

                <input 
                    className="text-input"
                    type = "text"
                    placeholder = "Email"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                    disabled
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