import {  createStore } from "redux"


const incrementCount = ({ incrementBy  = 1} = {}) => ({ 
    type: "INCREMENT",
    incrementBy: incrementBy
})


const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
})


const setCount = ({ count } ) => ({
    type: "SET",
    count: count
})

const resetCount = ({ resetCount = 1} = {}) => ({
    type: "RESET"
})



//Reducers
// 1. Reducers are pure functions
// 2. 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
        return {
            count: state.count + action.incrementBy
        }
        case "DECREMENT":
        return {
            count: state.count - action.decrementBy
        }
        case "SET":
            return {
                count: action.count
            }
        case "RESET":
        return {
            count: 0
        }
        default:
        return state
    }
}


const store = createStore(countReducer)


store.subscribe( () => {
    console.log(store.getState())    
})


// store.dispatch({
//    type: "INCREMENT",
//    incrementBy: 5
// })

// store.dispatch({
//     type: "INCREMENT"
//  })

store.dispatch(incrementCount( {incrementBy: 3} ))

store.dispatch(incrementCount())

// store.dispatch({
//     type: "RESET"
//  })

// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 10
//  })
store.dispatch(decrementCount())
store.dispatch(decrementCount( {decrementBy: 12}))


store.dispatch(setCount ( {count: 105 } ))


store.dispatch(resetCount())
