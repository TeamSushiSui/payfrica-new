'use client';
import receiverDP from '../assets/images/Profile-DP.jpg';
import { useState, useEffect } from 'react';
import { IoQrCode } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa'; // Import success icon

const DepositPage = () => {
    const [amount, setAmount] = useState(0);
    const [receiver, setReceiver] = useState('');
    const [currency, setCurrency] = useState('SUI');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const currencies = ['SUI', 'USDC', 'NGNC', 'KESC', 'ZARC', 'GHSC'];

    const handleSendMoney = () => {
        setIsLoading(true);

        // Simulate payment processing (replace with actual logic)
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 3000); // 3 seconds loading time
    };

    const handleViewReceipt = () => {
        // Implement view receipt logic here
        console.log('View Receipt clicked');
    };

    const handleHome = () => {
        setIsSuccess(false); // Close success popup
        setAmount(0); // Reset amount
    };

    return (
        <div className="send-money-container">
            <div className="send-money-content">
                <div className="header">
                    <button className="back-button">←</button>
                    <button className="fullscreen-button">
                        <IoQrCode />
                    </button>
                </div>
                <div className="user-info">
                    <img src={receiverDP.src} className="avatar dp-img" alt="" />
                    <div className="user-details">
                        <h2 className="username">Team Sushi</h2>
                        <p className="tag">@teamsushi</p>
                    </div>
                </div>
                <div className="amount-input">
                    <label className="amount-label">Enter Amount</label>
                    <div className="amount-input-with-currency">
                        <input
                            type="number"
                            className="amount-field"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            placeholder="00.00"
                        />
                        <select
                            className="currency-select"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            {currencies.map((curr) => (
                                <option key={curr} value={curr}>
                                    {curr}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="quick-amounts">
                        <button className="quick-amount" onClick={() => setAmount(100)}>
                            100
                        </button>
                        <button className="quick-amount" onClick={() => setAmount(200)}>
                            200
                        </button>
                        <button className="quick-amount" onClick={() => setAmount(500)}>
                            500
                        </button>
                        <button className="quick-amount" onClick={() => setAmount(1000)}>
                            1000
                        </button>
                    </div>
                </div>
                <a href="deposit/withdrawalinfo">
                    <button className="send-button" >Next</button>
                </a>
            </div>
        </div>
    );
};

export default DepositPage;