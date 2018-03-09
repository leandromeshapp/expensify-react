import authReducer from "../../reducers/auth"


test("Should set UID for Login", () => {
    const action = {
        type: "LOGIN",
        uid: "ABC69"
    }
    const state = authReducer({}, action)
    
    expect(state.uid).toEqual(action.uid)
})


test("Should clear UID for Logout", () => {
    const action = {
        type: "LOGOUT"
    }
    const state = authReducer({ uid: "fdp" }, action)

    expect(state).toEqual({})
})