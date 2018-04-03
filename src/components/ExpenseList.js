import React from "react"
import { connect } from "react-redux"
import { Pagination } from 'react-bootstrap'

//Components
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"


import ReactPaginate from "react-paginate"

// let indexOfLastExpense = 0
// let indexOfFirstExpense = 0
// let currentExpenses = ""



// const handlePageClick = (data) => {
//     let selected = data.selected + 1
//     let offset = Math.ceil(selected * 5)
//     console.log("selected: ",selected + 1)
//     console.log("Offsets: ",offset)

//     indexOfLastExpense = selected * 5
//     indexOfFirstExpense = indexOfLastExpense - 5

//     this.setState({ indexOfLastExpense: selected * 5 })

//     this.setState({ indexOfFirstExpense: indexOfLastExpense - 5 })

//     let pageToGo = (data.selected + 1)
//     console.log("Page: ",data)
//     console.log("Page to go: ",pageToGo)
// }


export class ExpenseList extends React.Component {
//export const ExpenseList = ({ expenses, dictionary }) => (

    handlePageClick = (data) => {
        const selected = data.selected + 1
        const offset = Math.ceil(selected * 5)

        console.log("Selected: ",selected)
        console.log("Offsets: ",offset)

        this.setState({ indexOfLastExpense: selected * 5})
        this.setState({ indexOfFirstExpense: this.state.indexOfLastExpense - 5 })

        console.log("Page: ",data)
    }

    constructor(props){
        super(props)
        this.state = {
            indexOfFirstExpense: 0,
            indexOfLastExpense: 5
        }
    }

    render(){
        const {dictionary, expenses} = this.props
        return(
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
                        expenses.slice(this.state.indexOfFirstExpensse, this.state.indexOfLastExpense).map((expense, index) => {
                            return <ExpenseListItem key={expense.id} {...expense} />
                            this.forceUpdate()
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
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    </div>
    )}
//)
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),

        dictionary: state.lang.dictionary
    }
}

export default connect(mapStateToProps)(ExpenseList)