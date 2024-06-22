import { FaPlus } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { LuSend } from "react-icons/lu";
import { MdOutlineKeyboardVoice } from "react-icons/md";

const SendMessage = () => {
    return (
        <div className="w-full lg:px-10 px-3 py-3 lg:py-6 bg-[#E6EBF5] flex lg:gap-5 gap-2">
            {/* emoji btn */}
            <button className="p-2 rounded-full bg-[#7269ef1a] text-[#7269EF] hover:bg-[#7269EF] hover:text-white transition-all duration-200">
                <HiOutlineEmojiHappy className="lg:text-[22px] text-[20px]" />
            </button>
            {/* plus btn */}
            <button className="p-[10px] rounded-full bg-[#7269ef1a] text-[#7269EF] hover:bg-[#7269EF] hover:text-white transition-all duration-200">
                <FaPlus className="lg:text-lg" />
            </button>
            {/* message input*/}
            <input type="text" name="" id=""
                placeholder="Write your message"
                className="outline-none bg-[#E6EBF5] lg:text-lg w-full ml-4"
            />
            {/* voice btn */}
            <button className="p-2 rounded-full bg-[#7269ef1a] text-[#7269EF] hover:bg-[#7269EF] hover:text-white transition-all duration-200">
                <MdOutlineKeyboardVoice className="lg:text-[22px] text-[20px]" />
            </button>
            {/* send btn */}
            <button className="p-[10px] rounded-full bg-[#7269ef1a] text-[#7269EF] hover:bg-[#7269EF] hover:text-white transition-all duration-200">
                <LuSend className="lg:text-lg" />
            </button>
        </div>
    );
};

export default SendMessage;