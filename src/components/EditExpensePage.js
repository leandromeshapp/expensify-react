import React from "react"
import { connect } from "react-redux" 
import ExpenseForm from "./ExpenseForm"
import { startEditExpense, startRemoveExpense } from "../actions/expenses"
import { ModalDialog } from './ModalDialog';
import Modal from 'react-modal';
//import Prompt from './Prompt';

export class EditExpensePage extends React.Component {
    state = {
        modalOpen: false
      };
    
    openModal = () => {
        console.log('open modal');
        Modal.setAppElement(document.getElementById('app'));
        this.setState(() => ({ modalOpen: true }));
    };
    
    closeModal = () => {
        this.setState(() => ({ modalOpen: false }));
    };
    
    
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push("/")
    }

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push("/")
    }

    render() {
        return (  
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title"> Edit Expense </h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense = {this.props.expense}
                        onSubmit = {this.onSubmit}
                    />

            </div>
                <button 
                    className="button button--secondary" 
                    onClick={this.openModal}> 
                    Remove Expense 
                </button>
                

                <ModalDialog
                    modalOpen={this.state.modalOpen}
                    handleModalCancel={this.closeModal}
                    contentLabel="Confirm Remove Expense"
                >

                <h3>Do You Really Want To Remove This Expense?</h3>
                <p>This cannot be undone!</p>
                <button className="button" onClick={this.closeModal}>
                    Cancel
                </button>
                <button
                    className="button button--destructive"
                    onClick={this.onRemove}>
                    Remove
                </button>
                </ModalDialog>
        </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)