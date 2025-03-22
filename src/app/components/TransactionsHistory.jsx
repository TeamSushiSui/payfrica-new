'use client'
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

const TransactionsHistory = () => {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            name: 'Withdraw',
            type: 'Monthly Plan',
            date: 'April 12, 2023 03:05 pm',
            amount: '$50',
            fee: '$0.65',
            status: 'Completed',
        },
        {
            id: 2,
            name: 'YouTube Premium',
            type: 'Yearly Plan',
            date: 'June 09, 2023 01:43 pm',
            amount: '$250',
            fee: '$2.50',
            status: 'Failed',
        },
        {
            id: 3,
            name: 'Ella Ighosuakpor',
            type: 'Money transfer',
            date: 'July 13, 2023 11:10 am',
            amount: '$1,200',
            fee: '$15.50',
            status: 'Completed',
        },
        {
            id: 4,
            name: 'Debbie Osas',
            type: 'Money transfer',
            date: 'March 02, 2023 10:21 pm',
            amount: '$100',
            fee: '$1.85',
            status: 'Pending',
        },
        {
            id: 5,
            name: 'Netflix HD',
            type: 'Yearly Plan',
            date: 'March 02, 2023 10:21 pm',
            amount: '$350',
            fee: '$3.00',
            status: 'Completed',
        },
    ]);

    const [dateRange, setDateRange] = useState('01 Jan - 03 Mar');
    const [period, setPeriod] = useState('Monthly');

    return (
        <div className="transactions-history">
            <div className="transactions-header">
                <h1>Recent transactions</h1>
                <div className="controls">
                    <div className="search-bar">
                        <FaSearch />
                        <input type="text" placeholder="Search transactions" />
                    </div>
                    <div className="date-range">
                        <FaCalendarAlt />
                        <span>{dateRange}</span>
                    </div>
                    <select value={period} onChange={(e) => setPeriod(e.target.value)}>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
            </div>
            <div className="table-header">
                <span>Transaction <RiArrowDropDownLine style={{ cursor: 'pointer' }} /></span>
                <span>Type <RiArrowDropDownLine style={{ cursor: 'pointer' }} /></span>
                <span>Date <RiArrowDropDownLine style={{ cursor: 'pointer' }} /></span>
                <span>Amount <RiArrowDropDownLine style={{ cursor: 'pointer' }} /></span>
                <span>Fee <RiArrowDropDownLine style={{ cursor: 'pointer' }} /></span>
                <span>Status <RiArrowDropDownLine style={{ cursor: 'pointer' }} /></span>
                <span>Action <RiArrowDropDownLine style={{ cursor: 'pointer' }} /></span>
            </div>
            <div className="table-body">
                {transactions.length > 0 ? transactions.map((transaction) => (
                    <div className="transaction-row" key={transaction.id}>
                        <span>{transaction.name}</span>
                        <span>{transaction.type}</span>
                        <span>{transaction.date}</span>
                        <span>{transaction.amount}</span>
                        <span>{transaction.fee}</span>
                        <span className={`status ${transaction.status.toLowerCase()}`}>{transaction.status}</span>
                        <span><BsThreeDotsVertical /></span>
                    </div>
                ))
                    :
                    <div className='no-trx'>
                        <p>Ready for your first transaction? Your history wil appear hear one you begin to use Payfrica</p>
                        <button>Get Started</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default TransactionsHistory;



// @media (max-width: 768px) {
//   .transactions-history {
//     padding: 20px;
//     overflow-x: scroll; /* Ensure horizontal scrolling on smaller screens */
//   }

//   .table-header,
//   .table-body {
//     /* min-width: 600px; Adjust width for smaller screens */
//   }
// }