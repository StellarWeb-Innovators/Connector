import BarContents from "../common/barContents/BarContents";
import ChatBox from "../common/chatBox/ChatBox";
import Sidebar from "../common/sidebar/Sidebar";

const Desktop = () => {
    return (
        <div className="w-full h-screen flex">
            {/* sidebar */}
            <div>
                <Sidebar />
            </div>
            {/* details */}
            <div>
                <BarContents/>
            </div>
            {/* chat box */}
            <div className="w-full">
                <ChatBox/>
            </div>
        </div>
    );
};

export default Desktop;