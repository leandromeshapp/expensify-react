import React from "react"
import { connect } from "react-redux"


//Components
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"


export const ExpenseList = ({ expenses, dictionary }) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile"> {dictionary.tableExpenses}</div>
            <div className="show-for-desktop"> {dictionary.tableExpense}</div>
            <div className="show-for-desktop"> {dictionary.tableAmount}</div>
        </div>
        <div className="list-body">
            {
                expenses.length === 0 ? (
                    <div className="list-item--message">
                        <span> No expenses </span> 
                    </div>
                    
                ) : (
                    expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),

        dictionary: state.lang.dictionary
    }
}

export default connect(mapStateToProps)(ExpenseList)