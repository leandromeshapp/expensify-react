import React from "react"
import { shallow } from "enzyme"
import expenses from "../fixtures/expenses"
import ExpenseListItem from "../../components/ExpenseListItem"



// Render ExpenseListItem Component with fixture data 
test("Should render ExpenseListItem with fixture data", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})