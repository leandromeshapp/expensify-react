import selectExpenses from "../../selectors/expenses"
import moment from "moment"
import expenses from "../fixtures/expenses"


//////////////////////////////////////////////////////////// SORT BY TEXT VALUE

test("Should filter by text value", () => {
    const filters = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    } 

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[1] ])
})



//////////////////////////////////////////////////////////// FILTER BY START DATE

test("Should filter by startDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    } 

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[0] ])
})





//////////////////////////////////////////////////////////// FILTER BY END DATE

test("Should filter by endDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0).add(2, "days")
    } 

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[0], expenses[1] ])
})




//////////////////////////////////////////////////////////// SORT BY DATE

test("Should sort by date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    } 

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})



//////////////////////////////////////////////////////////// SORT BY AMOUNT

test("Should sort by amount", () => {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    } 

    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([ expenses[2], expenses[1], expenses[0] ])
})