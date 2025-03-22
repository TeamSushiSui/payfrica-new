"use client";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { dummyBalances } from "../../utils/constant";
import { useMediaQuery } from "@uidotdev/usehooks";

const Balances = () => {
  const [balances, setBalances] = useState(dummyBalances);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isMobile = useMediaQuery('max-width:767px');

  useEffect(() => {
    if (containerRef.current && isMobile) {
      containerRef.current.style.transform = `translateX(-${currentIndex * 100
        }%)`;
    }
  }, [currentIndex, isMobile]);

  const toggleDisplay = (id) => {
    setBalances((prevBalances) =>
      prevBalances.map((balance) =>
        balance.id === id ? { ...balance, display: !balance.display } : balance
      )
    );
  };

  const totalBalance = balances.reduce((acc, curr) => acc + curr.balance, 0);
  const totalDisplay = balances.every((balance) => balance.display);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="balances-section">
      <h1 className="balances-greeting">Welcome to Payfrica</h1>
      <p className="total-balance">
        Total Balance:{" "}
        {totalDisplay ? `N${totalBalance.toLocaleString()}` : "********"}
      </p>
      <div className="balances-container">
        <div
          className={`balances-scrollable ${isMobile ? "mobile" : ""}`}
          ref={containerRef}
        >
          {balances.map((balance, index) => (
            <div
              className="balance-container"
              key={balance.id}
              style={{ width: isMobile ? "100%" : "323px" }}
            >
              <div className="balance-container-header">
                <div className="header-text">
                  <p>{balance.type}</p>
                  {balance.display ? (
                    <IoEyeOutline
                      className="toggle-display"
                      onClick={() => toggleDisplay(balance.id)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="toggle-display"
                      onClick={() => toggleDisplay(balance.id)}
                    />
                  )}
                </div>
                <BsThreeDotsVertical className="balance-menu" />
              </div>
              <h1 className="funds-balance">
                {balance.display
                  ? `N${balance.balance.toLocaleString()}`
                  : "********"}
              </h1>
              <div className="balance-container-function">
                <AiOutlinePlus className="plus-sign" />
                <p>{balance.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMobile && (
        <div className="dot-container">
          {balances.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Balances;
