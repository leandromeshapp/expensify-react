import React from "react"
import { shallow } from "enzyme"
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expenses"
import moment from "moment"

//// Render ExpenseForm
test("Should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />)

    expect(wrapper).toMatchSnapshot()
})



// Render ExpenseForm with fixture data
test("Should render ExpenseForm with expense fixture data", () => {
    const wrapper = shallow(<ExpenseForm expense = { expenses[1] }/>)

    expect(wrapper).toMatchSnapshot()
})



// Render Error invalid form submission
test("Should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()

    wrapper.find("form").simulate("submit", {  
        preventDefault: () => {
        }
    })

    expect(wrapper.state("error").length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})




// Set description on input change
test("Should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "Description Test"

    wrapper.find("input").at(0).simulate("change", {  
        target: { value }
    })

    expect(wrapper.state("description")).toBe(value)
    //expect(wrapper).toMatchSnapshot()
})




// Set note on text area change
test("Should set note on text area change", () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "Note Test"

    wrapper.find("textarea").simulate("change", {  
        target: { value }
    })

    expect(wrapper.state("note")).toBe(value)
    //expect(wrapper).toMatchSnapshot()
})




// Set valid amount input on change
test("Should set valid amount input", () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "2.50"

    wrapper.find("input").at(1).simulate("change", {  
        target: { value }
    })

    expect(wrapper.state("amount")).toBe(value)
    //expect(wrapper).toMatchSnapshot()
})



// Set invalid amount input on change
test("Should set invalid amount input", () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "22.500"

    wrapper.find("input").at(1).simulate("change", {  
        target: { value }
    })

    expect(wrapper.state("amount")).toBe("")
    //expect(wrapper).toMatchSnapshot()
})



// should call onSubmit prop for valid form submission
test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn()

    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)

    wrapper.find("form").simulate("submit", {  
        preventDefault: () => { }
    })

    expect(wrapper.state("error")).toBe("")
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    })

    // onSubmitSpy("Leandro", "Portugal")
    // expect(onSubmitSpy).toHaveBeenCalledWith("Leandro", "Portugal")
    //expect(wrapper).toMatchSnapshot()
})


// Should set new date
test("should set new date", () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)

    wrapper.find("SingleDatePicker").prop("onDateChange")(now)

    expect(wrapper.state("createdAt")).toEqual(now)
})



// Should set calendar focus
test("should set calendar focus", () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)

    wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused })

    expect(wrapper.state("calendarFocused")).toBe(true)
})