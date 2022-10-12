import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import numeral from "numeral";
import TransferForm from "./TransferForm";


const TransferPage = () => {
    const { id } = useParams()
    const customers = useSelector(state => state.customers)
    const customer = customers.length === 0 ? '' : customers.find(customer => customer._id === id) 
    console.log(id);
    
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="content-container">
                     <h1 className="page-header__title">{customer.name}</h1>
                </div>
            </div>
            <div className="content-container">
                <div className="info">
                    <p>Email: <span>{customer.email}</span></p>
                    <p>Current Balance: <span>{numeral(customer.balance).format('$0,0')}</span></p>
                </div>
                <TransferForm customers={customers} customer={customer}/>
            </div>
        </div>
    )
}

export default TransferPage