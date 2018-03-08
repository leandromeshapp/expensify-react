import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import database from "../../firebase/firebase"


const createMockStore = configureMockStore([thunk])


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
    const action = addExpense(expenses[2])

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})


///////////////////////////////////////////////////

// test("Should add expense action object with DEFAULT values", () => {
//     const action = addExpense()

//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })




///////////////////////////////////////////////////

test("Should add expense to database and store", (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'DeathAdder Elite',
      amount: 60,
      note: 'This mouse is better than DA Chroma',
      createdAt: 1000
    };
  
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });





///////////////////////////////////////////////////

test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore({})
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

        return database.ref(`expenses/${actions[0].expense.id}`).once("value")
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults)
            done()
        })
})