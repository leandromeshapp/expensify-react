// import React from "react"
// import { connect } from "react-redux" 

// import { startEditProfile, editProfileInfo } from "../actions/user"


// export const Profile = ({ currentUser }) => {

//     // const displayName = ''
//     // const email = ''
//     // const password = ''
//     // const photoURL = ''

//     const ondisplayNameChange = (e) => {
//         const displayName = e.target.value;
//         this.setState(() => ({ displayName }));
//     }


//     const onSubmit = (info) => {
//         this.props.startEditProfile(this.props.info.id, info)
//     }

//     return (
//     <div>
//         <div className="page-header">
//             <div className="content-container">
//                 <h1 className="page-header__title"> Edit Profile </h1>
//             </div>
//         </div>

//         <div className="content-container">

//         <input
//             className="text-input"
//             type = "text"
//             placeholder = "Name"
//             autoFocus
//             value={ currentUser.displayName}
//             onChange={ondisplayNameChange}
//         />


//         <input
//             className="text-input"
//             type = "text"
//             placeholder = "Name"
//             autoFocus
//             value={ currentUser.providerId}
//             //onChange={this.ondisplayNameChange}
//         />


//         <input
//             className="text-input"
//             type = "text"
//             placeholder = "Name"
//             autoFocus
//             value={ currentUser.photoURL}
//             //onChange={this.ondisplayNameChange}
//         />


//         <input
//             className="text-input"
//             type = "text"
//             placeholder = "Name"
//             autoFocus
//             value={ currentUser.email}
//             //onChange={this.ondisplayNameChange}
//         />
//             {/* <p> { currentUser.displayName }  </p>
//             <p> { currentUser.providerId }  </p>
//             <p> { currentUser.photoURL }  </p>
//             <p> { currentUser.email }  </p> */}
//         </div>

//             <button> yo. este botão ainda não faz nada</button>
//             <button 
//                 className="button button--secondary"
//                 onClick={onSubmit}
//             > 
//                 Edit Profile 
//             </button>
//     </div>
//     )
// }


// const mapStateToProps = (state) => ({
//     currentUser: state.auth.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//     startEditProfile: (id, info) => dispatch(startEditProfile(id, info)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Profile)







import React from "react"
import { connect } from "react-redux" 
import ProfileForm from "./ProfileForm"

import { startEditProfile } from "../actions/user"
export class EditProfile extends React.Component {

    onSubmit = (info) => {
        this.props.startEditProfile(this.props.info.id, info)
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
                    <ExpenseForm 
                        info = {this.props.info}
                        onSubmit = {this.onSubmit}
                    />

            </div>
                <button 
                    className="button button--secondary" 
                    onClick={this.openModal}> 
                    Remove Expense 
                </button>
        </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    info: state.infos.find((info) => info.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditProfile: (id, info) => dispatch(startEditProfile(id, info)),
})


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)