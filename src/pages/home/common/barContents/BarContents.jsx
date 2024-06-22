import { useContext } from "react";
import { ConversationContext } from "../../../../provider/ConversationProvider";
import MyChats from "./MyChats";
import Profile from "./Profile";
import Contact from "./Contact";


const BarContents = () => {
    const {activeBarContent} = useContext(ConversationContext);

    return (
        <div className="lg:w-[380px] lg:h-screen overflow-scroll hide-scrollbar lg:bg-[#F5F7FB]">
            {
                activeBarContent === "chats" &&
                <MyChats/>
            }
            {
                activeBarContent === "profile" &&
                <Profile/>
            }
            {
                activeBarContent === "groups" &&
                <div>groups</div>
            }
            {
                activeBarContent === "contacts" &&
                <Contact/>
            }
            {
                activeBarContent === "setting" &&
                <div>setting</div>
            }
        </div>
    );
};

export default BarContents;