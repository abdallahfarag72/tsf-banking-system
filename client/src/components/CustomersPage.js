import React from "react";
import CustomersList from "./CustomersList";

const CustomersPage = () => (
    <div className="page-container">
        <div className="content-container">
            <h1 className="customers-title">Select a Customer</h1>
        </div>
        <CustomersList />
    </div>
)

export default CustomersPage