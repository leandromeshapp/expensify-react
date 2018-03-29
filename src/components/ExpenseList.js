import React from "react"
import { connect } from "react-redux"
import { Pagination } from 'react-bootstrap';

//Components
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"

import { orderExpenses  } from '../actions/expenses';


import ReactPaginate from "react-paginate"


export const ExpenseList = ({ expenses, dictionary }) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile"> {dictionary.tableExpenses}</div>
            <div className="show-for-desktop"> {dictionary.tableExpense}</div>
            <div className="show-for-desktop"> {dictionary.tableAmount}</div>
        </div>
        <div className="list-body">

        {/* //<button className="buttonRegister" onClick={ orderExpenses(expenses) }> Register </button> */}
            {
                expenses.length === 0 ? (
                    <div className="list-item--message">
                        <span> No expenses </span> 
                    </div>
                    
                ) : (
                    expenses.map((expense, index) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }

          {/* <ReactPaginate
        previousLabel={<i className="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>}
        nextLabel={<i className="glyphicon glyphicon-chevron-right" aria-hidden="true"></i>}
        breakLabel={'...'}
        pageCount={expenses.last_page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        initialPage={0}
        forcePage={2 - 1}
        disableInitialCallback={true}
        //onPageChange={this.paginationPressed}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      /> */}
        </div>
    </div>
)


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),

        orderExpenses: (expenses) => dispatch(orderExpenses( expenses )),

        dictionary: state.lang.dictionary
    }
}

export default connect(mapStateToProps)(ExpenseList)