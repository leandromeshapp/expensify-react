import React from "react"
import { shallow } from "enzyme"
import expenses from "../fixtures/expenses"
import { EditExpensePage } from "../../components/EditExpensePage"


let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history =  { push: jest.fn() }

    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
         />)
})



//render edit expense page
test("render edit expense page", () => {
    expect(wrapper).toMatchSnapshot()
})



//should handle editExpense spies
test("should handle edit expense", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2])

    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})



//should handle startRemoveExpense spies
test("render startRemoveExpense page", () => {
    wrapper.find("button").simulate("click")

    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})