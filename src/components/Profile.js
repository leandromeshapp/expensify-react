import React from "react"
import { connect } from "react-redux" 



const displayName = ''
const email = ''
const password = ''
const photoURL = ''

// ondisplayNameChange = (e) => {
//     const displayName = e.target.value;
//     this.setState(() => ({ displayName }));
// }

export const Profile = ({ currentUser }) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"> Edit Profile </h1>
            </div>
        </div>

        <div className="content-container">

        <input
            className="text-input"
            type = "text"
            placeholder = "Name"
            autoFocus
            value={ currentUser.displayName}
            //onChange={this.ondisplayNameChange}
        />


        <input
            className="text-input"
            type = "text"
            placeholder = "Name"
            autoFocus
            value={ currentUser.providerId}
            //onChange={this.ondisplayNameChange}
        />


        <input
            className="text-input"
            type = "text"
            placeholder = "Name"
            autoFocus
            value={ currentUser.photoURL}
            //onChange={this.ondisplayNameChange}
        />


        <input
            className="text-input"
            type = "text"
            placeholder = "Name"
            autoFocus
            value={ currentUser.email}
            //onChange={this.ondisplayNameChange}
        />
            {/* <p> { currentUser.displayName }  </p>
            <p> { currentUser.providerId }  </p>
            <p> { currentUser.photoURL }  </p>
            <p> { currentUser.email }  </p> */}
        </div>

            <button> yo. este botão ainda não faz nada</button>
            <button 
                className="button button--secondary"> 
                Edit Profile 
            </button>
    </div>
)


const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    //startAddProfileInfo: (info) => dispatch(startAddProfileInfo(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)