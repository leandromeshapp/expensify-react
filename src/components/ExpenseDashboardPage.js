import React from "react"
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"
import ExpensesSummary from "./ExpensesSummary"
import Footer from "./Footer"

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
        <Footer />
    </div>
)

export default ExpenseDashboardPage