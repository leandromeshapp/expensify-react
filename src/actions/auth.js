import { firebase, googleAuthProvider, emailProvider , facebookAuthProvider, githubAuthProvider, twitterAuthProvider } from "../firebase/firebase"


export const login = ( uid, providerId, displayName, email, photoURL ) => ({
    type: "LOGIN",
    uid,
    providerId,
    displayName,
    email,
    photoURL,
    //currentUser,
})


// export const login = user => ({
//     type: "LOGIN",
//     user,
// })


export const logout = () => ({
    type: "LOGOUT",
})


export const startLoginGoogle = () => {
    return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider).catch((e) => {
        return console.log(`Error: ${e}`);
      });
    };
  };


export const startLoginGithub = () => {
    return firebase.auth().signInWithPopup(githubAuthProvider);
}


export const startLoginFacebook = () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
}


export const startLoginTwitter = () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider);
}


export const startLogin = (provider) => {
    return (dispatch) => {
        switch (provider) {
            case 'google':    
                return firebase.auth().signInWithPopup(googleAuthProvider)
            case 'email':
                return firebase.auth().signInWithEmailAndPassword(emailProvider)
            case 'facebook':
                return firebase.auth().signInWithPopup(facebookAuthProvider);
            case 'github':
                return firebase.auth().signInWithPopup(githubAuthProvider);
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
        return console.log("sucess")
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch((e) => {
            return console.log(e);
        });
    };
};


  
export const startLoginEmail = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password).catch((e) => {
            return console.log(e);
        });
    };
}