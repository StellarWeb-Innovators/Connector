/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import InboxHeader from "./InboxHeader";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

const ChatBox = () => {
    const chatId = useParams()?.chatId;
    return (
        <div className="w-full h-screen relative">
            <InboxHeader />
            <div className="">
                <Messages />
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <SendMessage />
            </div>
        </div>
    );
};

export default ChatBox;