import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"


///////////////////////////////// SET DEFAULT STATE

test("Set Default State", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" })
    
    expect(state).toEqual([])
})



///////////////////////////////// Remove Expense By ID

test("Should remove expense by ID", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([ expenses[0], expenses[2] ])
})




///////////////////////////////// No remove if ID not found

test("Should not remove expense if no ID found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual( expenses )
})



///////////////////////////////// Add Expense

test("Should add an expense", () => {
    const expense = {
        type: "ADD_EXPENSE",
        id: "10",
        description: "Fidget Spinner",
        note: "",
        createdAt: 20000,
        amount: 400
    }

    const action = {
        type: "ADD_EXPENSE",
        expense
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual( [...expenses, expense] )
})




///////////////////////////////// Edit Expense

test("Should edit an expense", () => {
    const amount = 122000
    
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state[1].amount).toBe(amount)
})




///////////////////////////////// should not edit expense if expense dpesnt exist

test("Should not edit an expense if ID is invalid", () => {
    const amount = 122000
    
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})