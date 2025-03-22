'use client'
import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaPaperPlane, FaGlobeAmericas, FaTint } from 'react-icons/fa';
import { useGlobalState } from "../../GlobalStateProvider";

const SendMoneyOverlay = () => {
    const { overlayState, setOverlayState } = useGlobalState();
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) {
        return null; // Don't render if closed
    }

    return (
        overlayState ?
            <div className="send-money-overlay">
                <div className="overlay-content">
                    <div className="overlay-header">
                        <h2>Send Money</h2>
                        <button className="close-button" onClick={handleClose}>
                            <IoCloseOutline />
                        </button>
                    </div>
                    <div className="overlay-body">
                        <a href="/send/payfricapadi" className="send-option">
                            <div className="option-icon">
                                <FaPaperPlane />
                            </div>
                            <div className="option-text">
                                <h3>To Payfrica Padi</h3>
                                <p>Send money to anyone using Payfrica fast and cheap</p>
                            </div>
                        </a>
                        <a href="/african-countries" className="send-option">
                            <div className="option-icon">
                                <FaGlobeAmericas />
                            </div>
                            <div className="option-text">
                                <h3>To Other African Countries</h3>
                                <p>Distance is not a barrier, send money across borders</p>
                                <p className="coming-soon">Coming Soon</p>
                            </div>
                        </a>
                        <a href="/sui-token" className="send-option">
                            <div className="option-icon">
                                <FaTint />
                            </div>
                            <div className="option-text">
                                <h3>Send Sui Token</h3>
                                <p>Send Sui tokens to anyone: Wallet, Payfrica, Exchange</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            : null

    );
};

export default SendMoneyOverlay;