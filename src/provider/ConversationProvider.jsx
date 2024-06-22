/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { createContext } from "react";


export const ConversationContext = createContext(null);

const ConversationProvider = ({ children }) => {
    const [activeBarContent, setActiveBarContent] = useState("chats");
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);


    const conversationInfo = {
        activeBarContent,
        setActiveBarContent,
        darkMode,
        setDarkMode
    }

    return <ConversationContext.Provider value={conversationInfo}>
        {children}
    </ConversationContext.Provider>
};

export default ConversationProvider;