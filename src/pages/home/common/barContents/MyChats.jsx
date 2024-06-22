import { RiUser3Line } from "react-icons/ri";
import CommonHeader from "./CommonHeader";
import { Link, useParams } from "react-router-dom";
import ActiveContact from "./ActiveContact";

const MyChats = () => {
    const chatId = useParams()?.chatId;
    const id = parseInt(chatId);
    // const activeColor = "#7269EF";

    const myChats = [
        {
            _id: 1,
            name: "abc",
        },
        {
            _id: 2,
            name: "abc",
        },
        {
            _id: 3,
            name: "abc",
        },
        {
            _id: 4,
            name: "abc",
        },
        {
            _id: 5,
            name: "abc",
        },
        {
            _id: 6,
            name: "abc",
        },
        {
            _id: 7,
            name: "abc",
        },
        {
            _id: 8,
            name: "abc",
        },
    ]
    const activeContacts = [1, 2, 3, 4, 5, 6,7,8,9]
    return (
        <div>
            <CommonHeader
                title={"Chats"}
                search={true}
                placeholder={"Search messages or users"}
            />
            {/* active */}
            <div className="mt-4 w-full lg:px-6 lg:py-5 p-3 flex lg:gap-4 gap-3 overflow-x-scroll no-scrollbar overflow-hidden">
                {
                    activeContacts?.map(contact => <ActiveContact
                        key={contact}
                        contact={contact}
                    ></ActiveContact>)
                }
            </div>

            {/* my chats */}
            <h3 className="px-6  mb-4 lg:mb-0 font-semibold text-lg hidden lg:block">Recent</h3>
            <div className=" flex flex-col gap-y-[2px] lg:max-h-[70vh] overflow-y-auto no-scrollbar pt-1 lg:pb-24 pb-5">
                {
                    myChats?.map((chat, index) => <Link
                        to={`/chat/${chat?._id}`}
                        key={index}>
                        <div
                            className={`${chat?._id === id ? `bg-[#7269ef1a]  border-[#7269EF]` : "border-[#F5F7FB]"} hover:bg-[#7269ef1a] border-l-4 transition-all duration-200 lg:px-5 px-3 lg:py-[14px] py-3 cursor-pointer`}
                        >
                            <div className="flex gap-2 items-center">
                                {/* image */}
                                <div className="bg-[#7269ef1a] rounded-full p-2 w-fit h-fit">
                                    <RiUser3Line className="lg:text-2xl text-xl" />
                                </div>
                                {/* name and last message */}
                                <div>
                                    <h4 className="text-sm lg:text-base">Patrick Hendricks</h4>
                                    <p className={`${chat?._id === id && "text-[#7269EF]"} text-sm lg:text-base`}>Hey! I am available</p>
                                </div>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default MyChats;