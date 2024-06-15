/* eslint-disable react/prop-types */

import { useState } from "react";
import { createContext } from "react";


export const ConversationContext = createContext(null);

const ConversationProvider = ({ children }) => {
    const [activeBarContent, setActiveBarContent] = useState("chats");


    const conversationInfo = {
        activeBarContent,
        setActiveBarContent
    }

    return <ConversationContext.Provider value={conversationInfo}>
        {children}
    </ConversationContext.Provider>
};

export default ConversationProvider;