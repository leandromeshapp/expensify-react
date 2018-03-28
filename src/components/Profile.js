import React from "react"
import { connect } from "react-redux" 
import ProfileForm from "./ProfileForm"

import { startEditProfile, editProfileInfo } from "../actions/user"


export class EditProfile extends React.Component {
    
    onSubmit = (displayName, email, photoURL) => {
        this.props.startEditProfile(displayName, email, photoURL)
        this.props.history.push("/")
    }

    render() {
        return (  
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title"> Edit Profile </h1>
                    </div>
                </div>
                <div className="content-container">
                     
                <ProfileForm 
                    displayName = { this.props.displayName }   
                    email = { this.props.email }
                    photoURL = { this.props.photoURL }      
                    onSubmit = {this.onSubmit}
                />

                <div>
                    <button className="button"> Save Profile </button>
                </div>
            </div>
        </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    displayName: state.auth.displayName,
    email: state.auth.email,
    photoURL: state.auth.photoURL
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditProfile: ( displayName, email, photoURL) => dispatch(startEditProfile( displayName, email, photoURL)),
})


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)