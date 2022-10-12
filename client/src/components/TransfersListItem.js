import React from "react";
import numeral from "numeral";
import moment from "moment";

const TransfersListItem = ({ sender, receiver, amount, createdAt }) => {
    return (
        <div className="list-item__transfer">
            <div>
                <h3 className="list-item__title">{<span>Sender: </span>}{sender}</h3>
                <h3 className="list-item__title">{<span>Receiver: </span>}{receiver}</h3>
                <h3 className="list-item__title">{<span>Amount: </span>}{numeral(amount).format('$0,0')}</h3>
            </div> 
            <h3 className="list-item__data">{moment(createdAt).fromNow()}</h3>
        </div>
    )
}

export default TransfersListItem