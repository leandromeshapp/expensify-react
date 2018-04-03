import { firebase , database } from "../firebase/firebase"

// ADD PROFILE INFO
export const addProfileInfo = (info) => ({
    type: "ADD_PROFILE_INFO",
    info,
})

// START ADD PROFILE INFO
export const startAddProfileInfo = (infoData = {}) => {
    return (dispatch, getState) => {
    const { uid } = getState().auth

    return () => {
        firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            console.log("Signed In. Adding User Info in users/uid/info")
            const {
                displayName,
                email,
                photoURL
            } = infoData

            const info = { displayName, email, photoURL }
            return database.ref(`users/${uid}/info`).push(info)
            .then((ref) => {
                dispatch(addProfileInfo({
                    id: ref.key,
                    ...info,
                }))
            })} else {
                console.log("Not signed in. not adding user info")
            }
        })
    }
    }
}



// EDIT PROFILE
export const editProfileInfo = (displayName, email, photoURL) => ({
    type: "EDIT_PROFILE_INFO",
    displayName,
    email,
    photoURL
})


export const startEditProfile = (displayName, email, photoURL) => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                console.log("signed in. updating...")
                user.updateProfile({
                    displayName: displayName.displayName,
                    email: displayName.email,
                    photoURL: displayName.photoURL
                }).then(function() {
                        console.log("UPDATED! See Display Name: ", displayName.displayName)
                        console.log("UPDATED! See Email: ", displayName.email)
                        console.log("UPDATED! See Photo URL: ", displayName.photoURL)
                        dispatch(editProfileInfo(displayName, email, photoURL))
                }).catch(function(error) {
                        console.log("error: ", error)
                })
            } else {
                console.log("Not Signed In. No Update")
            }
        })
    }
}



export const createDisplayName = ( displayName ) => {
    return () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                console.log("Signed In. Updating Display Name and Default Photo URL: ", displayName)
                user.updateProfile({
                    displayName,
                    photoURL: "https://i.imgur.com/rvMKzWG.png"
                }).then(function() {
                        console.log("Sucess Updating!")
                }).catch(function(error) {
                        console.log("Error updating: ", error)
                })
            } else {
                console.log("Not Signed In Dude. Why do you even try?")
            }
        })
    }
}