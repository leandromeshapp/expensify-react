import React from "react"
import { shallow } from "enzyme"
import { AddExpensePage } from "../../components/AddExpensePage"
import expenses from "../fixtures/expenses"


let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history =  { push: jest.fn() }

    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})



//render add expense page
test("render add expense page", () => {
    expect(wrapper).toMatchSnapshot()
})



//should handle onSubmit
test("render add expense page", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})
