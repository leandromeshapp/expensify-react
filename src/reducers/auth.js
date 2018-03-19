export default (state = {}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                uid: action.uid,
                // providerId: action.user.providerData[0],
                displayName: action.displayName,
                email: action.email,
                photoURL: action.photoURL
            }
        case "LOGOUT":
            return {}
        default:
            return state
    }
}