import { useParams } from "react-router-dom";

const ChatBox = () => {
    const chatId = useParams()?.chatId;
    return (
        <div className="w-full h-screen bg-purple-500">
            {chatId ||
                <div>chat box</div>
            }
        </div>
    );
};

export default ChatBox;