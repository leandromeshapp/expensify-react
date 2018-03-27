import { firebase, googleAuthProvider, emailProvider , facebookAuthProvider, githubAuthProvider, twitterAuthProvider } from "../firebase/firebase"


export const login = ( uid, providerId, currentUser, displayName, email, photoURL ) => ({
    type: "LOGIN",
    uid,
    providerId,
    currentUser,
    displayName,
    email,
    photoURL
})


export const name = ( displayName ) => ({
    type: "CHANGE",
    displayName,
})



export const logout = () => ({
    type: "LOGOUT",
})



export const startLoginGoogle = () => {
    return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider)
      .catch((e) => {
        return console.log(`Error: ${e}`)
      })
    }
  }


export const startLoginGithub = () => {
    return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider)
    .catch((e) => {
        return console.log(`Error: ${e}`)
      })
    }
}


export const startLoginFacebook = () => {
    return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider)
    .catch((e) => {
        return console.log(`Error: ${e}`)
      })
    }
}


export const startLoginTwitter = () => {
    return () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider)
    .catch((e) => {
        return console.log(`Error: ${e}`)
      })
    }
}


export const startLogin = (provider) => {
    return (dispatch) => {
        switch (provider) {
            case 'google':    
                return firebase.auth().signInWithPopup(googleAuthProvider)
            case 'facebook':
                return firebase.auth().signInWithPopup(facebookAuthProvider)
            case 'github':
                return firebase.auth().signInWithPopup(githubAuthProvider)
            case 'twitter':
                return firebase.auth().signInWithPopup(twitterAuthProvider)            
            case 'email':
                return firebase.auth().signInWithEmailAndPassword(emailProvider)
        }
    }
}


export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}


export const createLoginEmail = (email, password) => {
    return () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            console.log(error)
        })
    }
}


export const createDisplayName = ( displayName ) => {
    //var user = firebase.auth().currentUser;
    return () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                console.log("signed in. updating")
                user.updateProfile({
                    displayName,
                    photoURL: "http://www.murketing.com/journal/wp-content/uploads/2009/04/nopic_192-150x150.gif"
                }).then(function() {
                        console.log("sucess")
                }).catch(function(error) {
                        console.log("error: ", error)
                });
            } else {
                console.log("not signed in")
            }
        })
    }
}
    // user.updateProfile({
    //     displayName,
    //     photoURL: "https://example.com/jane-q-user/profile.jpg"
    // }).then(function() {
    //     console.log("sucess")
    //     }).catch(function(error) {
    //         console.log("error: ", error)
    //     });


export const startLoginEmail = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((e) => {
            return console.log(e)
        })
    }
}