export default (state = {}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                uid: action.uid,
                providerId: action.providerId,
                displayName: action.displayName,
                email: action.email,
                photoURL: action.photoURL,
                currentUser: action.currentUser,
            }
        case "LOGOUT":
            return {}
        default:
            return state
    }
}