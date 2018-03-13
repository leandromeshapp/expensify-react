import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import numeral from "numeral"


const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title"> 
                { description } 
            </h3>

            <span className="list-item__sub-title"> { moment(createdAt).format("D MMMM YYYY") } </span>
        </div>
        <span className="list-item__note">{note}</span>
        <h3 className="list-item__data"> { numeral(amount / 100).format("$0,0.00") }  </h3>
    </Link>
)

export default ExpenseListItem