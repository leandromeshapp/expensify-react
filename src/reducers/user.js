// PROFILE INFO REDUCERS
const profileInfoReducerDefaultState = [] 

export default (state = profileInfoReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_PROFILE_INFO":
            return [
                ...state,
                action.info
            ]
        case "EDIT_PROFILE_INFO":
            return state.map((info) => {
                if (info.id === info.id) {
                    return {
                        ...info,
                        ...action.updates
                    }
                } else {
                    return info
                }
            })
        case "SET_PROFILE_INFO":
            return action.info
        case "CHANGE":
            return {
                displayName: action.displayName
            }
        default:
            return state
    }
}