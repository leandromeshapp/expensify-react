import React from "react"
import { connect } from "react-redux" 

export class ExpenseForm extends React.Component {
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
        e.preventDefault()

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
        const {locale, dictionary} = this.props
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error"> {this.state.error} </p>}
                <input
                    className="text-input"
                    type = "text"
                    placeholder = {dictionary.displayNamePlaceHolder}
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
                    placeholder =  {dictionary.photoURLPlaceHolder}
                    value={this.state.photoURL}
                    onChange={this.onPhotoURLChange}
                />

                <img className='header__user-avatar' src={this.state.photoURL} />
                
                <div>
                    <button className="button"> {dictionary.saveProfileButton} </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
    locale: state.lang.locale,
    dictionary: state.lang.dictionary
})

export default connect(mapStateToProps)(ExpenseForm)