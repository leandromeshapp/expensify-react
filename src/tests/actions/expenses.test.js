import { addExpense, editExpense, removeExpense } from "../../actions/expenses"

test("Should remove expense action object", () => {
    const action = removeExpense({ id: "123abc" })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

///////////////////////////////////////////////////

test("Should edit expense action object", () => {
    const action = editExpense( "123ABC", { note: "New note" })
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123ABC",
        updates: {
            note: "New note"
        }
    })
})

///////////////////////////////////////////////////

test("Should add expense action object with PROVIDED values", () => {
    const expenseData = { 
        description:  "Rent", 
        note: "Last month rent", 
        amount: 20000, 
        createdAt: 1000 
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


///////////////////////////////////////////////////

test("Should add expense action object with DEFAULT values", () => {
    const action = addExpense()

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })
})