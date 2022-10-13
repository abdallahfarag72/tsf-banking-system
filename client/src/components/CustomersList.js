import React from "react";
import CustomersListItem from "./CustomersListItem";
import { useSelector } from "react-redux";

const CustomersList = () => {
    const customers = useSelector(state => state.customers)
    
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