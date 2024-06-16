/* eslint-disable react/prop-types */
import image from "../../../../assets/IMG_20230714_001437.png";

const ActiveContact = ({ contact }) => {
    return (
        <div className="bg-[#E6EBF5] px-[37px] py-[27px] rounded relative">
            <div className="absolute -top-4 left-4 flex flex-col items-center justify-center">
                <div className="relative">
                    <img src={image} alt="" className="w-[38px] h-[38px] rounded-full object-cover" />
                    <p className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white"></p>
                </div>
                <span className="text-sm font-semibold mt-[2px]">Doris</span>
            </div>
        </div>
    );
};

export default ActiveContact;