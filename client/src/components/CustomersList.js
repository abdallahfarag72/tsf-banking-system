import React, { useReducer, useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomersListItem from "./CustomersListItem";
import customersReducer from "../reducers/customers";
import { getCustomers } from "../actions/customers"
import { useSelector } from "react-redux";

const CustomersList = () => {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getCustomers())
    // }, [])

    const customers = useSelector(state => state.customers)
    console.log(customers);
    return (
        <div className="content-container">
            <div className="list-header" >
                <div className="show-for-mobile" >Customers</div>
                <div className="show-for-desktop" >Customer</div>
                <div className="show-for-desktop" >Balance</div>
            </div>
            <div className="list-body">
                {
                    customers.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>Loading...</span>
                        </div>
                    ) : (
                        customers.map(customer => <CustomersListItem key={customer._id} {...customer} />)
                    )
                }
            </div>
        </div>
    )
} 

export default CustomersList