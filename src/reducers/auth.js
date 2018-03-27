export default (state = {}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                uid: action.uid,
                providerId: action.providerId,
                currentUser: action.currentUser,
                displayName: action.displayName,
                email: action.email,
                photoURL: action.photoURL
            }
        case "LOGOUT":
            return {}
        case "CHANGE":
            return {
                displayName: action.displayName
            }
        default:
            return state
    }
}