import React from "react";
import Modal from "react-modal";
import numeral from "numeral"
import { useNavigate } from "react-router-dom";


const TransferModal = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <Modal
                isOpen={props.modalOpen}
                onRequestClose={props.handleRemoveModal}
                ariaHideApp={false} // removing the app element error
                contentLabel={'Transfer Confirmation'} // for accessability purpose only
                closeTimeoutMS={200}
                className={'modal'}
            >
                <h3 className="modal__title" >A Transfer Has Been Made!</h3>
                <p className="modal__body">{props.sender} Sent {numeral(props.amount).format('$0,0')} To {props.receiver}</p>
                <div className="modal__buttons">
                    <button className="button" onClick={() => navigate('/all-transfers')} >View Transfers History</button>
                    <button className="button button--secondary" onClick={props.handleRemoveModal} >Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default TransferModal