import React from 'react';

const SendToOverlay = ({ onClose }) => {
    return (
        <div className="overlay-container">
            <div className="overlay-content">
                {/* <button className="close-button" onClick={onClose}>
                    ×
                </button> */}
                <h2 className="overlay-title">Who are you sending to?</h2>
                <p className="overlay-subtitle">Make sure the Payfrica tag is valid</p>
                <input className="overlay-input" placeholder="Payfrica Tag" />
                <a href="/send/sendmoney">
                    <button className="overlay-check-button">CHECK TAG</button>
                </a>
            </div>
        </div>
    );
};

export default SendToOverlay;