import React from "react"
import { shallow } from "enzyme"
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage"


// Render Expense Dashboard Page Component
test("Should render Expense Dashboard Page correctly", () => {
    const wrapper = shallow(<ExpenseDashboardPage />)

    expect(wrapper).toMatchSnapshot()
})
