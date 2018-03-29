import React from "react"
import ExpenseForm from "./ExpenseForm"
import { connect } from "react-redux"
import { startAddExpense } from "../actions/expenses"


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense))
        this.props.startAddExpense(expense)
        this.props.history.push("/")
    }

    render() {
        const {locale, dictionary} = this.props
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title"> {dictionary.pageAddExpense} </h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),

    locale: state.lang.locale,
    dictionary: state.lang.dictionary
})

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage)