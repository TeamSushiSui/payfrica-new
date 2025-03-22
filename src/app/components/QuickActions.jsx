'use client'
import { BsSendCheck } from 'react-icons/bs';
import { RiFolderReceivedFill } from 'react-icons/ri';
import { MdDoneOutline } from 'react-icons/md';
import { SiConvertio } from 'react-icons/si';
import { GrView } from 'react-icons/gr';
import { useRef, useEffect, useState } from 'react';
import { useGlobalState } from "../../GlobalStateProvider";


const QuickActions = () => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const { overlayState, setOverlayState } = useGlobalState();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="quick-actions-section">
            <h1 className="quick-action-heading">Quick Actions</h1>
            <div className={`quick-actions ${isMobile ? 'scrollable' : ''}`} ref={containerRef}>
                <div className="quick-action" onClick={() => setOverlayState(!overlayState)}>
                    <BsSendCheck className="action-icon" />
                    <p>Send Money</p>
                </div>
                <div className="quick-action">
                    <RiFolderReceivedFill className="action-icon" />
                    <p>Receive</p>
                </div>
                <div className="quick-action">
                    <MdDoneOutline className="action-icon" />
                    <p>Withdraw</p>
                </div>
                <div className="quick-action">
                    <SiConvertio className="action-icon" />
                    <p>Convert</p>
                </div>
                <div className="quick-action">
                    <BsSendCheck className="action-icon" />
                    <p>Send Money</p>
                </div>
                <div className="quick-action">
                    <GrView className="action-icon" />
                    <p>View</p>
                </div>
            </div>
        </section >
    );
};

export default QuickActions;