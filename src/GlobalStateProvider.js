'use client';
import { createContext, useState, useEffect, useContext } from "react"; // Correct import here

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [overlayState, setOverlayState] = useState(false);

    useEffect(() => {
        // Initialize state or perform other setup here
    }, []);

    return (
        <GlobalStateContext.Provider value={{ overlayState, setOverlayState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);