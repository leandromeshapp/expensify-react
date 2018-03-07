import selectExpensesTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"

test("Should return $0 if no expenses", () => {
    const response = selectExpensesTotal([])
    expect(response).toBe(0)
})



test("Should add one single expense", () => {
    const response = selectExpensesTotal([expenses[0]])
    expect(response).toBe(100)
})



test("Should Add Multiple Expense", () => {
    const response = selectExpensesTotal(expenses)
    expect(response).toBe(600)
})