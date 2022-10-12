import React from "react";
import { useSelector } from "react-redux";
import { getTransfers } from "../actions/transfers";
import TransfersList from "./TransfersList";

const AllTransfersPage = () => {
    return (
    <div className="page-container">
        <div className="content-container">
                <h1 className="customers-title">Transfers List</h1>
        </div>
        <TransfersList />
    </div>
    )
}

export default AllTransfersPage