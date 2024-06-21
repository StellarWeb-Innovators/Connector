/* eslint-disable react/prop-types */
import { RiGroupLine, RiSearchLine } from "react-icons/ri";

const CommonHeader = ({ title, icon, search, placeholder }) => {
    return (
        <div className="lg:pt-6 lg:px-6 pt-3 px-3">
            <div className="flex justify-between">
                <h3 className="lg:text-[22px] text-xl font-semibold">{title}</h3>
                {icon && <RiGroupLine />}
            </div>
            {/* search component */}
            {
                search &&
                <div className="flex items-center gap-2 bg-[#E6EBF5] rounded-md pl-3 lg:mt-5 mt-4">
                    <span>
                        <RiSearchLine className="text-lg text-gray-400" />
                    </span>
                    <input type="text" className="w-full bg-[#E6EBF5] outline-none rounded-r-xl pl-2 lg:py-3 py-2"
                        placeholder={placeholder} />
                </div>
            }
        </div>
    );
};

export default CommonHeader;