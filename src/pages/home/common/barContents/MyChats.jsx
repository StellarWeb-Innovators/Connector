import { RiUser3Line } from "react-icons/ri";
import CommonHeader from "./CommonHeader";
import { Link, useParams } from "react-router-dom";

const MyChats = () => {
    const chatId = useParams()?.chatId;
    const id = parseInt(chatId);

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
    return (
        <div>
            <CommonHeader
                title={"Chats"}
                search={true}
                placeholder={"Search messages or users"}
            />
            {/* active */}
            <div className="bg-red-500 h-[68px] w-full p-6">
                active members
            </div>

            {/* my chats */}
            <h3 className="px-6 mb-4 font-semibold text-lg">Recent</h3>
            <div className="px-[10px] flex flex-col gap-y-[2px] max-h-[70vh] overflow-y-auto no-scrollbar pt-1 pb-8">
                {
                    myChats?.map((chat, index) => <Link
                        to={`/chat/${chat?._id}`}
                        key={index}>
                        <div
                            className={`${chat?._id === id && "bg-[#E6EBF5]"} transition-colors duration-200 px-5 py-4 rounded-sm cursor-pointer`}
                        >
                            <div className="flex gap-2 items-center">
                                {/* image */}
                                <div className="bg-[#7269ef1a] rounded-full p-2 w-fit h-fit">
                                    <RiUser3Line className="text-2xl" />
                                </div>
                                {/* name and last message */}
                                <div>
                                    <h4>Patrick Hendricks</h4>
                                    <p>Hey! I am available</p>
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