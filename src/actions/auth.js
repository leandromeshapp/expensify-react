import { firebase, googleAuthProvider, emailProvider , facebookAuthProvider, githubAuthProvider } from "../firebase/firebase"

export const login = ( uid, displayName, email, photoURL ) => ({
    type: "LOGIN",
    uid,
    //providerId,
    displayName,
    email,
    photoURL
})


export const logout = () => ({
    type: "LOGOUT"
})



export const startLoginGoogle = () => {
    return () => {
        const providerData = firebase.auth().providerData;
        console.log('onAuthStateChanged promise：', providerData[0].providerId)
        console.log('firebase.auth.FacebookAuthProvider.PROVIDER_ID：', firebase.auth.FacebookAuthProvider.PROVIDER_ID)


      return firebase.auth().signInWithPopup(googleAuthProvider).catch((e) => {
        return console.log(`Error: ${e}`);
      });
    };
  };


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
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch((e) => {
            return e;
        });
    };
};

  
export const startLoginEmail = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password).catch((e) => {
            return e;
        });
    };
}