import { createStore, combineReducers, applyMiddleware, compose} from "redux"
import expensesReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filters"
import thunk from "redux-thunk"

import authReducer from "../reducers/auth"

import userReducer from "../reducers/user"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


// STORE CREATION
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer,
            user: userReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}



// // STORE CREATION
// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer,
//         filters: filtersReducer
//     })
// )