import React from "react"
import { shallow } from "enzyme"
import expenses from "../fixtures/expenses"
import { EditExpensePage } from "../../components/EditExpensePage"


let starEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    starEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history =  { push: jest.fn() }

    wrapper = shallow(
        <EditExpensePage 
            starEditExpense={starEditExpense} 
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
         />)
})



//render edit expense page
test("render edit expense page", () => {
    expect(wrapper).toMatchSnapshot()
})



//should handle starEditExpense spies
test("should handle starEditExpense", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2])

    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(starEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})



//should handle startRemoveExpense spies
test("render startRemoveExpense page", () => {
    wrapper.find("button").simulate("click")

    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})