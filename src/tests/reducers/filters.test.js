import filtersReducer from "../../reducers/filters"
import moment from "moment"


////////////////////////////////////////////////////////  DEFAULT FILTER VALUES

test("Set Default Filter Values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" })

    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})



////////////////////////////////////////////////////////  SET SORTBY TO AMOUNT

test("Set sortBy to amount ", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" })
    
    expect(state.sortBy).toBe("amount")
})




////////////////////////////////////////////////////////  SET SORTBY TO DATE

test("Set sortBy to date ", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    }

    const action = { type: "SORT_BY_DATE" }

    const state = filtersReducer(currentState, action)
    

    expect(state.sortBy).toBe("date")
})





////////////////////////////////////////////////////////  SET TEXT FILTER 

test("Set Text Filter ", () => {
    const text = "My Text Filter"

    const action = {
        type: "SET_TEXT_FILTER",
        text
    }
    
    const state = filtersReducer(undefined, action)

    expect(state.text).toBe(text)
})





////////////////////////////////////////////////////////  SET START DATE 

test("Set Start Date Filter ", () => {
    const startDate = moment()

    const action = {
        type: "SET_START_DATE",
        startDate
    }

    const state = filtersReducer(undefined, action)
    
    expect(state.startDate).toEqual(startDate)
})




////////////////////////////////////////////////////////  SET END DATE 

test("Set End Date Filter", () => {
    const endDate = moment()
    
        const action = {
            type: "SET_END_DATE",
            endDate
        }
    
        const state = filtersReducer(undefined, action)
        
        expect(state.endDate).toEqual(endDate)
    })