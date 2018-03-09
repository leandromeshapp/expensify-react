import React from "react"
import { shallow } from "enzyme"
import { Header } from "../../components/Header"


// Header Component
test("Should render Header correctly", () => {
    const wrapper = shallow(<Header startLogout={() => {} }/>)

    expect(wrapper).toMatchSnapshot()
})


// Button Click call startLogout
test("Should call startLogout on button click", () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)

    wrapper.find("button").simulate("click")
    expect(startLogout).toHaveBeenCalled()
})