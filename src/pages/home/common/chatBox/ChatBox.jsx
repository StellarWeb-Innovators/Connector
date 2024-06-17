import { useParams } from "react-router-dom";
import InboxHeader from "./InboxHeader";

const ChatBox = () => {
    const chatId = useParams()?.chatId;
    return (
        <div className="w-full h-screen ">
            <InboxHeader/>
        </div>
    );
};

export default ChatBox;