import React from "react"
import { connect } from "react-redux"

import numeral from "numeral"
import locale from 'numeral/locales';

import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"

import { Link } from "react-router-dom"
import { showAll } from "../actions/filters"

import replaceAll from '../utils/replaceAll';

export const ExpensesSummary = ({ expenses, expensesTotal, filters, visibleExpenseCount, visibleExpensesTotal, dictionary }) => {
    const expenseCount = expenses.length
    const filteredExpensesCount = expenseCount - visibleExpenseCount
    const visibleExpenseWord = visibleExpenseCount === 1 ? 'expense' : 'expenses'
    //const formattedVisibleExpensesTotal = numeral(visibleExpensesTotal / 100).format('$0,0.00')
    numeral.locale('pt-pt');
    const formattedVisibleExpensesTotal = numeral(visibleExpensesTotal / 100).format('0,0.00 $')
    // const formattedFilteredExpensesTotal = numeral((expensesTotal - visibleExpensesTotal) / 100).format('$0,0.00')
    const formattedFilteredExpensesTotal = numeral((expensesTotal - visibleExpensesTotal) / 100).format('0,0.00 $')
    
    const existingExpensesButFiltered = () => {
        if (expenseCount >= 1 && visibleExpenseCount < 1) {
          return true
        }
        return false
    };

    return (
        <div className="page-header">
            <div className="content-container">
            { expenseCount < 1 && 
                <h1 className="page-header__title"> No expenses found in database. Go out and spend some money! </h1>
            }

            { existingExpensesButFiltered() && 
                <h1 className="page-header__title"> No expenses match the current filter criteria </h1>
            }

            { visibleExpenseCount >= 1 && 
                <h1 className="page-header__title"
                >
                {dictionary.summaryMessageTitle}
                    {/* dangerouslySetInnerHTML={{
                        __html: replaceAll(dictionary.summaryMessageTitle, {
                            "{p1}": `<span>${expenseCount}</span>`,
                            "{p2}": expenseCount != 1 ? 's' : '',
                            "{p3}": `<span>${numeral(expensesTotal / 100).format('$0,0.00')}</span>`
                        })
                    }} */}

                {/* Viewing
                <span> { visibleExpenseCount } </span> 
                { visibleExpenseWord } totalling 
                <span> { formattedVisibleExpensesTotal } </span> */}
                </h1>
            }
                
            <div className="page-header__action">
                <Link className="button button" to="/create"> {dictionary.pageAddExpense}</Link>
            </div>
            <br/>

            { expenseCount !== visibleExpenseCount &&
                <div className="header-filter-message">
                    {dictionary.summaryMessageSubitle}
                    {/* <span>
                    <span>
                        {filteredExpensesCount}
                    </span> 
                    {
                        filteredExpensesCount === 1 ? ' expense is not' : ' expenses are not '
                    } being filtered (
                    <span>
                        {
                            formattedFilteredExpensesTotal
                        }
                    </span> total)
                    </span> */}
                </div>}
            </div>
        </div>
    )
} 


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenses: state.expenses,
        expensesTotal: selectExpensesTotal(state.expenses),
        filters: state.filters,
        visibleExpenseCount: visibleExpenses.length,
        visibleExpensesTotal: selectExpensesTotal(visibleExpenses),

        dictionary: state.lang.dictionary
    }
}

export default connect(mapStateToProps, {showAll})(ExpensesSummary)