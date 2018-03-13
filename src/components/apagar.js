import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import { showAll } from "../actions/filters";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";


export const ExpenseSummary = props => {
  const { expenses } = props;
  const expenseWord = expenses.length > 1 ? "expenses" : "expense";
  const formattedExpensesTotal = numeral(
    selectExpensesTotal(expenses) / 100
  ).format("$0,0.00");
  const filteredExpenseLength = props.filtered.length - expenses.length;
  const filteredWord = filteredExpenseLength > 1 ? "expenses" : "expense";

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenses.length} </span> {expenseWord} totalling
          <span> {formattedExpensesTotal} </span>
        </h1>

        {filteredExpenseLength !== 0 ? (
          <div className="hidden-title">
            <div className="hiddenMessage">
              Not showing{" "}
              <span className="length"> {filteredExpenseLength} </span>
              hidden {filteredWord} because of filters
            </div>
            <div>
              <button
                onClick={() => {
                  props.showAll();
                }}
                className="button button--showall"
              >
                View All
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ expenses, filters }) => {

  return {
    expenses: selectExpenses(expenses, filters),
    filtered: expenses
  };
};
export default connect(mapStateToProps, { showAll })(ExpenseSummary);



// WEBPACK FOOTER //
// ./src/components/ExpenseSummary.js