export default (state = {}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                uid: action.uid,
                displayName: action.displayName,
                email: action.email,
                photoURL: action.photoURL,
                providerId: action.providerId
            }
        case "LOGOUT":
            return {}
        default:
            return state
    }
}