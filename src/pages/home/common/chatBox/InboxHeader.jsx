import { RiRecordCircleFill, RiSearchLine, RiPhoneLine, RiVidiconLine, RiGroupLine, RiMoreFill } from "react-icons/ri";
import image from "../../../../assets/IMG_20230714_001437.png";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const InboxHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="flex lg:p-6 p-3 border-b shadow-sm border-gray-200 items-center justify-between">
            {/* info */}
            <div className="flex items-center gap-3 ">
                <button onClick={() => navigate(-1)} className="lg:hidden">
                    <IoArrowBack className="text-lg md:text-xl" />
                </button>
                <img src={image} className="w-10 h-10 object-cover rounded-full" alt="" />
                <div className="flex">
                    <p className="text-gray-800 font-bold">Alamin</p>
                    <RiRecordCircleFill className="text-[11px] text-green-500 ml-[6px] mt-[9px]" />
                </div>
            </div>
            {/* icons */}
            <div className="flex gap-4 text-gray-500">
                <button className="p-3 rounded-full transition-all duration-200 hover:bg-[#F5F7FB]">
                    <RiSearchLine className="text-xl hidden md:block" />
                </button>
                <button className="p-3 rounded-full transition-all duration-200 hover:bg-[#F5F7FB]">
                    <RiPhoneLine className="text-xl hidden md:block" />
                </button>
                <button className="p-3 rounded-full transition-all duration-200 hover:bg-[#F5F7FB]">
                    <RiVidiconLine className="text-xl hidden md:block" />
                </button>
                <button className="p-3 rounded-full transition-all duration-200 hover:bg-[#F5F7FB]">
                    <RiGroupLine className="text-xl hidden md:block" />
                </button>
                <button className="md:p-3 p-2 rounded-full transition-all duration-200 hover:bg-[#F5F7FB]">
                    <RiMoreFill className="md:text-xl text-lg" />
                </button>
            </div>
        </div>
    );
};

export default InboxHeader;