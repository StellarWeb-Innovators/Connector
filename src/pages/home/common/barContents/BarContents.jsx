import { useContext } from "react";
import { ConversationContext } from "../../../../provider/ConversationProvider";
import MyChats from "./MyChats";


const BarContents = () => {
    const {activeBarContent} = useContext(ConversationContext);

    return (
        <div className="w-[380px] h-screen bg-[#F5F7FB]">
            {
                activeBarContent === "chats" &&
                <MyChats/>
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