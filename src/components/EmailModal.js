import React from 'react'
import Modal from 'react-modal'


const EmailModal = (props) => (
    <Modal
        isOpen={props.isOpen}
        onRequestClose={props.modalToggle}
        closeTimeoutMS={200}
        className="modal"
        >
        <h1>IELTS WIN</h1>
        <p>You will receive a pdf file with your corrected essay, band score and feedback within 48 hours.</p>
        <p>Give a valid Email and proceed to checkout.</p>
        <form onSubmit={props.checkout}>
            <input value={props.email} placeholder="Email" onChange={props.changeEmail}/>
            <div className="button__checkout--container">
            <button className="button__checkout" disabled={!props.email}>Checkout</button>
            </div>
        </form>
        
    </Modal>
)

export default EmailModal