import React from "react"
import { shallow } from "enzyme"
//import expenses from "../fixtures/expenses"
import { ExpenseListFilters } from "../../components/ExpenseListFilters"
import { filters, altFilters } from "../fixtures/filters"
import moment from "moment"


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
})



//It Should Render Expense List Filter Page
test("It Should Render Expense List Filter Page", () => {
    expect(wrapper).toMatchSnapshot()
})



//It Should Render Expense List Filter With Alt Data
test("It Should Render Expense List Filter With Alt Data", () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})




//It Should Handle Text Change
test("It Should Handle Text Change", () => {
    const value = "January Rent"
    wrapper.find("input").simulate("change", {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})



//It Should Handle Sort By Date
test("It Should Handle Sort By Date", () => {
    const value = "date"
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find("select").simulate("change", {
        target: { value }
    })
    expect(sortByDate).toHaveBeenLastCalled()
})



//It Should Handle Sort By Amount
test("It Should Handle Sort By Amount", () => {
    const value = "amount"
    wrapper.find("select").simulate("change", {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenLastCalled()
})



//It Should Handle Data Changes
test("It Should Handle Data Changes", () => {
    const startDate = moment(0).add(4, "years")
    const endDate = moment(0).add(8, "years")

    wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate })

    expect(setStartDate).toHaveBeenLastCalled(startDate)
    expect(setEndDate).toHaveBeenLastCalled(endDate)
})



//It Should Handle onFocus
test("It Should Handle onFocus", () => {
    const calendarFocused = "endDate"
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused)

    expect(wrapper.state("calendarFocused")).toBe(calendarFocused)
})



