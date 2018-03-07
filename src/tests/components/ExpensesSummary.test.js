import React from "react"
import { shallow } from "enzyme"
import { ExpensesSummary } from "../../components/ExpensesSummary"


test("Should render ExpenseSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={109} />)

    expect(wrapper).toMatchSnapshot()
})



test("Should render ExpenseSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={4} expensesTotal={499239} />)
    
    expect(wrapper).toMatchSnapshot()
})