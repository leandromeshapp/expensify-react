import React from "react"
import { connect } from "react-redux"
import { Pagination } from 'react-bootstrap'

//Components
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"


import ReactPaginate from "react-paginate"


const handlePageClick = (data) => {
    let selected = data.selected
    let offset = Math.ceil(selected * 5)
}

// const indexOfLastExpense = currentPage * expensesPerPage
// const indexOfFirstExpense = indexOfLastExpenses - expensesPerPage
// const currentExpenses = expenses.slice(indexOfFirstExpense, indexOfLastExpenses)


const paginationPressed = (page) => {
    let pageToGo = (page.selected + 1)
    console.log("Page: ",page)
    console.log("Page to go: ",pageToGo)
}

//export class ExpenseForm extends React.Component {
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
                    expenses.slice(0, 5).map((expense, index) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }

            <ReactPaginate
                previousLabel={<i className="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>}
                nextLabel={<i className="glyphicon glyphicon-chevron-right" aria-hidden="true"></i>}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageCount={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                initialPage={0}
                disableInitialCallback={true}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    </div>
)


// paginationPressed = (page) => {
//     let pageToGo = (page.selected + 1)
// }

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),

        dictionary: state.lang.dictionary
    }
}

export default connect(mapStateToProps)(ExpenseList)