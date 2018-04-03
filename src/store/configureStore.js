import { createStore, combineReducers, applyMiddleware, compose} from "redux"

import thunk from "redux-thunk"

import authReducer from "../reducers/auth"
import expensesReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filters"
import langReducer from '../reducers/lang'
import userReducer from "../reducers/user"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


// STORE CREATION
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer,
            user: userReducer,
            lang: langReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}