import { login, logout } from "../../actions/auth"


test("Should generate Login action object", (done) => {
    const uid = "gfpy79"
    const action = login(uid)
    expect(action).toEqual({
        type: "LOGIN",
        uid
    })
})


test("Should generate Logout action object", (done) => {
    const action = logout()
    expect(action).toEqual({
        type: "LOGOUT"
    })
})