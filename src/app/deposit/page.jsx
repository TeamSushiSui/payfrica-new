const DepositPage = ({ onClose }) => {
    return (
        <div className="deposit-container">
            <div className="deposit-content">
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                <h2 className="deposit-title">How would you like to make deposit?</h2>
                <div className="deposit-option">
                    <div className="option-header">
                        <span className="option-icon lightning-icon">⚡</span>
                        <h3 className="option-title">Quick Transfer</h3>
                    </div>
                    <p className="option-description">Fund your Payfrica Wallet instantly with your bank</p>
                    <div className="option-details">
                        <button className="detail-button zero-fees">Zero fees</button>
                        <button className="detail-button few-minutes">Few minutes</button>
                    </div>
                </div>
                <div className="deposit-option">
                    <div className="option-header">
                        <span className="option-icon card-icon">💳</span>
                        <h3 className="option-title">Card Deposits</h3>
                    </div>
                    <p className="option-description">Fund your Payfrica Wallet with your bank card</p>
                </div>
            </div>
        </div>
    );
};

export default DepositPage;