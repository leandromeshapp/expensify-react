import React from "react"
import { connect } from "react-redux" 
import ProfileForm from "./ProfileForm"

import { startEditProfile, editProfileInfo } from "../actions/user"


export class EditProfile extends React.Component {
//export const EditProfile = ({ currentUser }) => {
    constructor(props) {
        super(props)
        this.state = {
            // providerId: props.info ? props.info.providerId: "",
            providerId: "",
            displayName: "",
            email: "",
            photoURL: "",
            error: ""
        }
    }
    
    onSubmit = (info) => {
        this.props.startEditProfile(this.props.info, info)
        this.props.history.push("/")


        e.preventDefault();

        // if (!this.state.displayName || !this.state.email) {
        //     this.setState(() => ({ error: "Please provide a name and email." }))
        // } else {
        //     this.setState(() => ({ error: "" }))
        //     this.props.onSubmit({
        //         description: this.state.description,
        //         amount: parseFloat(this.state.amount, 10) * 100,
        //         createdAt: this.state.createdAt.valueOf(),
        //         note: this.state.note
        //     })
        // }
    }

    onTesteChange = (e) => {
        const providerId = e.target.value
        this.setState(() => ({ providerId }))
        console.log(providerId)
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
        const displayNameLET = this.props.displayName
        let emailLET = this.props.email
        let photoURLLET = this.props.photoURL
        let providerIdLET = this.props.providerId

        const teste = "teste"

        return (  
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title"> Edit Profile </h1>
                    </div>
                </div>
                <div className="content-container">
                    
                
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error"> {this.state.error} </p>}
                <input
                    className="text-input"
                    type = "text"
                    placeholder = "Display Name"
                    autoFocus
                    value={displayNameLET}
                    onChange={this.onDisplayNameChange}
                />

                
                <input 
                    className="text-input"
                    type = "text"
                    placeholder = "Email"
                    value={emailLET}
                    onChange={this.onEmailChange}
                />

                <input 
                    className="text-input"
                    type = "text"
                    placeholder = "Photo URL"
                    value={photoURLLET}
                    onChange={this.onPhotoURLChange}
                />

                <input 
                    className="text-input"
                    type = "text"
                    placeholder = "PROVIDER"
                    value={providerIdLET}
                    onChange={this.onTesteChange}
                />

                <div>
                    <button className="button"> Save Profile </button>
                </div>
            </form>
            </div>
        </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    providerId: state.auth.providerId,
    currentUser: state.auth.currentUser,
    displayName: state.auth.displayName,
    email: state.auth.email,
    photoURL: state.auth.photoURL,

    //info: state.infos.find((info) => info.id === props.match.params.id),
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditProfile: (id, info) => dispatch(startEditProfile(id, info)),
})


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)