import { useContext } from "react";
import { ConversationContext } from "../../../../provider/ConversationProvider";


const BarContents = () => {
    const {activeBarContent} = useContext(ConversationContext);

    return (
        <div className="w-[380px] h-screen bg-green-500">
            {
                activeBarContent === "chats" &&
                <div>chats</div>
            }
            {
                activeBarContent === "profile" &&
                <div>profile</div>
            }
            {
                activeBarContent === "groups" &&
                <div>groups</div>
            }
            {
                activeBarContent === "contacts" &&
                <div>contacts</div>
            }
            {
                activeBarContent === "setting" &&
                <div>setting</div>
            }
        </div>
    );
};

export default BarContents;