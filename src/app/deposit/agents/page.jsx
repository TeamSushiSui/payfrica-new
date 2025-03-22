'use client'
import React, { useState } from 'react';
// import './P2PAgents.css'; // Import the CSS file
import { FaCheckCircle } from 'react-icons/fa'; // Import success icon

const P2PAgents = ({ onClose }) => {
    const [transferMade, setTransferMade] = useState(false);

    const handleTransferMade = () => {
        setTransferMade(true);
    };

    return (
        <div className="p2p-agents-container">
            <div className="p2p-agents-content">
                {/* <button className="close-button" onClick={onClose}>
                    ×
                </button> */}
                <h2 className="agents-title">P2P Agents</h2>
                <p className="agents-subtitle">Pick an agent to initiate your withdrawal.</p>
                <div className="agent-option">
                    <div className="agent-header">
                        <span className="lightning-icon">⚡</span>
                        <h3 className="agent-name">Michael John</h3>
                    </div>
                    <p className="agent-range">NGN 10,000 - 100,000</p>
                    <div className="agent-details">
                        <button className="detail-button zero-fees">Zero fees</button>
                        <button className="detail-button few-minutes">Few minutes</button>
                    </div>
                </div>
                <div className="agent-option">
                    <div className="agent-header">
                        <span className="lightning-icon">⚡</span>
                        <h3 className="agent-name">Remora Cook</h3>
                    </div>
                    <p className="agent-range">100,000 - 1,000,000,000</p>
                    <div className="agent-details">
                        <button className="detail-button zero-fees">Zero fees</button>
                        <button className="detail-button few-minutes">Few minutes</button>
                    </div>
                </div>
                {!transferMade ? (
                    <button className="next-button" onClick={handleTransferMade}>
                        I have make this transfer
                    </button>
                ) : (
                    <div className="success-content">
                        <FaCheckCircle className="success-icon" />
                        <h2 className="success-title">Success</h2>
                        <button className="success-button" onClick={() => console.log('View receipt clicked')}>View receipt</button>
                        <button className="success-button" onClick={() => console.log('Home clicked')}>Home</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default P2PAgents;