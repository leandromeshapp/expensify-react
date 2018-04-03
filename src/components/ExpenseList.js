import React from "react"
import { connect } from "react-redux"
import { Pagination } from 'react-bootstrap'

//Components
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"


import ReactPaginate from "react-paginate"

let newArray = []
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

        this.novoArray = []
        //this.forceUpdate()
    }

    constructor(props){
        super(props)
        this.state = {
            indexOfFirstExpense: 0,
            indexOfLastExpense: 5,
            resetList: []
        }
    }

    render(){
        const {dictionary, expenses} = this.props
        let novoArray = [...expenses]
        console.log(novoArray)

        return(
            <div className="content-container">
                <div className="list-header">
                    <div className="show-for-mobile"> {dictionary.tableExpenses} </div>
                    <div className="show-for-desktop"> {dictionary.tableExpense} </div>
                    <div className="show-for-desktop"> {dictionary.tableAmount} </div>
                </div>
                <div className="list-body">
                {
                    expenses.length === 0 ? (
                        <div className="list-item--message">
                            <span> {dictionary.noExpenseMessage} </span> 
                        </div>
                        
                    ) : (
                        // "clear" .map in order to remove previous .map search ex: slice 0,5 changes to 5,10.
                        novoArray.slice(this.state.indexOfFirstExpensse, this.state.indexOfLastExpense).map((expense, index) => {
                        //expenses.slice(this.state.indexOfFirstExpensse, this.state.indexOfLastExpense).map((expense, index) => {
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