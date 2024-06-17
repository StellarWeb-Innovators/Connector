import { useParams } from "react-router-dom";
import InboxHeader from "./InboxHeader";
import Messages from "./Messages";

const ChatBox = () => {
    const chatId = useParams()?.chatId;
    return (
        <div className="w-full h-screen ">
            <InboxHeader />
            <div className="h-[70vh]">
                <Messages />
            </div>
        </div>
    );
};

export default ChatBox;