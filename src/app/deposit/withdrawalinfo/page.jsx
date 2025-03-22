const WithdrawalConfirmation = ({ onClose }) => {
    return (
        <div className="withdrawal-confirmation-container">
            <div className="withdrawal-confirmation-content">
                {/* <button className="close-button" onClick={onClose}>
                    ×
                </button> */}
                <div className="withdrawal-details">
                    <h2 className="confirmation-title">You are withdrawing</h2>
                    <p className="amount">NGN 30,000</p>
                    <p className="receive-message">Your bank account will receive</p>
                </div>
                <div className="summary-box">
                    <div className="summary-item">
                        <span className="summary-label">You receive</span>
                        <span className="summary-value">NGN 30,000</span>
                    </div>
                    <div className="summary-item">
                        <span className="summary-label">Fee</span>
                        <span className="summary-value">NGN 0.00</span>
                    </div>
                    <div className="summary-item">
                        <span className="summary-label">Payment method</span>
                        <span className="summary-value">Quick transfer</span>
                    </div>
                </div>
                <button className="next-button">Next</button>
            </div>
        </div>
    );
};

export default WithdrawalConfirmation;