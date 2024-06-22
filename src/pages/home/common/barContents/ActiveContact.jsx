/* eslint-disable react/prop-types */
import image from "../../../../assets/IMG_20230714_001437.png";

const ActiveContact = () => {
    return (
        <div className="bg-[#E6EBF5] lg:px-[37px] px-8 py-6 lg:py-[27px] rounded relative mt-1 lg:mt-0">
            <div className="absolute -top-4 left-4 flex flex-col items-center justify-center">
                <div className="relative">
                    <img src={image} alt="" className="lg:w-[38px] lg:h-[38px] w-8 h-8 rounded-full object-cover" />
                    <p className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white"></p>
                </div>
                <span className="text-sm font-semibold mt-[2px]">Doris</span>
            </div>
        </div>
    );
};

export default ActiveContact;