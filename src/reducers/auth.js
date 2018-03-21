export default (state = {}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                uid: action.uid,
                currentUser: action.currentUser,
            }
        case "LOGOUT":
            return {}
        case "CHANGE":
            return {
                displayName: action.displayName
            }
        default:
        // case "TESTE":
        //     return {
        //         uid: action.uid,
        //         providerId: action.providerId,
        //         displayName: action.displayName,
        //         email: action.email,
        //         photoURL: action.photoURL,
        //     }

            return state
    }
}