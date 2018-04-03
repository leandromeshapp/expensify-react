import { addExpense, startAddExpense, 
         editExpense, startEditExpense,
         removeExpense, startRemoveExpense,
         setExpenses, startSetExpenses
} from "../../actions/expenses"

import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import database from "../../firebase/firebase"


const uid = "testuid123"
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])


beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData)
    .then(() => done())
})


test("Should remove expense action object", () => {
    const action = removeExpense({ id: "123abc" })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})


test("Should remove expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({ id }))
    .then(() => {
        const actions = store.getActions()
        
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once("value")})
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy()
            done()
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

test("Should edit expense firebase", (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const updates = { amount: 100 }

    store.dispatch(startEditExpense( id, updates ))
    .then(() => {
        const actions = store.getActions()
        
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once("value")
        }).then((snapshot) => {
            expect(snapshot.val().amount).toBe(updates.amount)
            done()
        })
    })



///////////////////////////////////////////////////

test("Should add expense action object with PROVIDED values", () => {
    const action = addExpense(expenses[2])

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})


///////////////////////////////////////////////////

test("Should add expense to database and store", (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
      description: 'DeathAdder Elite',
      amount: 60,
      note: 'This mouse is better than DA Chroma',
      createdAt: 1000
    }
  
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })
  
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
  })





///////////////////////////////////////////////////

test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDefaults = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults)
            done()
        })
})



test("Should setup set expense action objection with data", () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    })
})



test("Should fecth expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses())
    .then(() => {
        const actions = store.getActions()
        
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        })
        done()
    })
})