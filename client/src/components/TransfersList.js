import React from "react";
import TransfersListItem from "./TransfersListItem";
import { useSelector } from "react-redux";

const TransfersList = () => {
    const transfers = useSelector(state => state.transfers).sort((a, b) => {
        if (a.createdAt > b.createdAt) {
            return -1
        } else if (a.createdAt < b.createdAt) {
            return 1
        } else {
            return 0
        }
    })
    return (
        <div className="content-container">
            <div className="list-header" >
                <div className="show-for-desktop" >Transfer</div>
                <div className="show-for-mobile" >Transfers</div>
                <div className="show-for-desktop" >Time</div>
            </div>
            <div className="list-body">
                {
                    transfers.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Transfers</span>
                        </div>
                    ) : (
                        transfers.map(transfer => <TransfersListItem key={transfer._id} {...transfer} />)
                    )
                }
            </div>
        </div>
    )
}

export default TransfersList