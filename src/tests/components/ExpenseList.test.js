import React from "react"
import { shallow } from "enzyme"
import { ExpenseList } from "../../components/ExpenseList"
import expenses from "../fixtures/expenses"



// Render expenses from ExpenseList Component
test("Should render ExpenseList with expenses correctly", () => {
    const wrapper = shallow(<ExpenseList expenses = { expenses }/>)

    expect(wrapper).toMatchSnapshot()
})



// Render ExpenseList with empty message
test("Should render ExpenseList with empty message", () => {
    const wrapper = shallow(<ExpenseList expenses = { [] }/>)

    expect(wrapper).toMatchSnapshot()
})

