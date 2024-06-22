import { useContext } from "react";
import { ConversationContext } from "../../../../provider/ConversationProvider";
import { RiUser2Line, RiMessage3Line, RiGroupLine, RiContactsLine, RiSettings2Line, RiMoonClearLine, RiSunLine, RiUser3Line } from "react-icons/ri";


const Sidebar = () => {
    const { activeBarContent, setActiveBarContent, darkMode, setDarkMode } = useContext(ConversationContext);
    const links = [
        {
            section: "chats",
            icon: <RiMessage3Line className="lg:text-2xl text-xl" />
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
        <div className="lg:w-[75px] shadow text-gray-600 lg:h-screen lg:flex lg:flex-col justify-between items-center lg:py-5 py-2 lg:border-r px-3 lg:px-0">
            {/* logo */}
            <p className="hidden lg:block">logo</p>
            {/* sidebar links */}
            <ul className="flex lg:flex-col justify-between lg:justify-normal lg:gap-y-[14px]">
                {
                    links?.map((link, index) => <li
                        key={index}
                        onClick={() => setActiveBarContent(link?.section)}
                        className={`cursor-pointer rounded-lg lg:p-4 p-3 transition-colors duration-300 hover:bg-[#7269ef1a] hover:text-[#7269EF] ${activeBarContent === link?.section &&
                            "bg-[#7269ef1a] text-[#7269EF]"}`}
                    >
                        {link?.icon}
                    </li>)
                }
            </ul>
            {/* dark mode and profile btn */}
            <ul className="lg:flex flex-col items-center gap-3 hidden">
                {
                    darkMode ?
                        <button onClick={() => setDarkMode(!darkMode)}>
                            <RiMoonClearLine className="text-2xl" />
                        </button>
                        :
                        <button onClick={() => setDarkMode(!darkMode)}>
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