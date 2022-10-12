import React from "react";
import { Link } from "react-router-dom"
import numeral from "numeral";

const CustomersListItem = ({ name, email, balance, _id }) => {
    return (
        <Link className="list-item" to={`/customers/${_id}`}>
            <div>
                <h3 className="list-item__title">{name}</h3>
                <span className="list-item__sub-title">Email: {email}</span>
            </div>
            <h3 className="list-item__data"><span>Balance: </span>{numeral(balance).format('$0,0')}</h3>
        </Link>
    )
}

export default CustomersListItem