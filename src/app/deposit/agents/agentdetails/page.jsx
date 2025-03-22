const DepositConfirmation = ({ onClose }) => {
    return (
        <div className="deposit-confirmation-container">
            <div className="deposit-confirmation-content">
                <h2 className="confirmation-title">Please Deposit</h2>
                <p className="amount">NGN 30,000</p>
                <p className="account-message">To this account number</p>

                <div className="account-details-box">
                    <div className="account-detail-row">
                        <span className="detail-label">Bank name</span>
                        <span className="detail-value">Money Bank</span>
                    </div>
                    <div className="account-detail-row">
                        <span className="detail-label">Account number</span>
                        <span className="detail-value">3934944030</span>
                    </div>
                    <div className="account-detail-row">
                        <span className="detail-label">Account name</span>
                        <span className="detail-value">Team Sushi</span>
                    </div>
                </div>

                <button className="transfer-button">I have made this transfer</button>
            </div>
        </div>
    );
};

export default DepositConfirmation;