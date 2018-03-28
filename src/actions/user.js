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


// // START EDIT PROFILE
// export const startEditProfile = (id, updates) => {
//     return (dispatch, getState) => {
//         const { uid } = getState().auth
//         return database.ref(`users/${uid}/info`)
//         .update(updates)
//         .then(() => {
//             dispatch(editProfileInfo(id, updates));
//         });
//     };


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
                        dispatch(editProfileInfo(displayName, email, photoURL));
                }).catch(function(error) {
                        console.log("error: ", error)
                });
            } else {
                console.log("Not Signed In. No Update")
            }
        })
    }


    // export const startEditExpense = (id, updates) => {
    //     return (dispatch, getState) => {
    //         const { uid } = getState().auth
    //         return database.ref(`users/${uid}/expenses/${id}`)
    //         .update(updates)
    //         .then(() => {
    //             dispatch(editExpense(id, updates));
    //         });
    //     };
    //   };
};



// SET_PROFILE
export const setProfileInfo = (info) => ({
    type: "SET_PROFILE_INFO",
    info
})


export const startSetProfile = () => {
    return (dispatch, getState) => {
        const { uid } = getState().auth
        return database.ref(`users/${uid}/info`).once("value")
        .then((snapshot) => {
            const info = []

            snapshot.forEach((childSnapshot) => {
                info.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setProfileInfo(info))
        })
    }
}