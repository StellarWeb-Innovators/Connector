import { useContext, useState } from "react";
import { ConversationContext } from "../../../../provider/ConversationProvider";
import { RiUser2Line, RiMessage3Line, RiGroupLine, RiContactsLine, RiSettings2Line, RiMoonClearLine, RiSunLine, RiUser3Line } from "react-icons/ri";


const Sidebar = () => {
    const { activeBarContent, setActiveBarContent } = useContext(ConversationContext);
    const [theme, setTheme] = useState("light");
    const links = [
        {
            section: "chats",
            icon: <RiMessage3Line className="text-2xl" />
        },
        {
            section: "profile",
            icon: <RiUser2Line className="text-2xl" />
        },
        {
            section: "groups",
            icon: <RiGroupLine className="text-2xl" />
        },
        {
            section: "contacts",
            icon: <RiContactsLine className="text-2xl" />
        },
        {
            section: "setting",
            icon: <RiSettings2Line className="text-2xl" />
        },
    ]
    return (
        <div className="w-[75px] shadow text-gray-600 h-screen flex flex-col justify-between items-center py-5 border-r">
            {/* logo */}
            <p>logo</p>
            {/* sidebar links */}
            <ul className="flex flex-col gap-y-[14px]">
                {
                    links?.map((link, index) => <li
                        key={index}
                        onClick={() => setActiveBarContent(link?.section)}
                        className={`cursor-pointer rounded-lg p-4 transition-colors duration-300 hover:bg-[#7269ef1a] hover:text-[#7269EF] ${activeBarContent === link?.section &&
                            "bg-[#7269ef1a] text-[#7269EF]"}`}
                    >
                        {link?.icon}
                    </li>)
                }
            </ul>
            {/* dark mode and profile btn */}
            <ul className="flex flex-col items-center gap-3">
                {
                    theme === "light" ?
                        <button onClick={() => setTheme("dark")}>
                            <RiMoonClearLine className="text-2xl" />
                        </button>
                        :
                        <button onClick={() => setTheme("light")}>
                            <RiSunLine className="text-2xl" />
                        </button>
                }
                <button className="bg-[#7269ef1a] rounded-full p-2">
                    <RiUser3Line className="text-2xl" />
                </button>
            </ul>
        </div>
    );
};

export default Sidebar;