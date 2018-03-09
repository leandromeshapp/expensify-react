import React from "react"
import { shallow } from "enzyme"
import { LoginPage } from "../../components/LoginPage"


// Login Component
test("Should render Login Page correctly", () => {
    const wrapper = shallow(<LoginPage />)

    expect(wrapper).toMatchSnapshot()
})


// Button Click call startLogin
test("Should call startLogin on button click", () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    
    wrapper.find("button").simulate("click")
    expect(startLogin).toHaveBeenCalled()
})