/* eslint-disable react/prop-types */
import { RiGroupLine, RiSearchLine } from "react-icons/ri";

const CommonHeader = ({ title, icon, search, placeholder }) => {
    return (
        <div className="pt-6 px-6">
            <div className="flex justify-between">
                <h3 className="text-[22px] font-semibold">{title}</h3>
                {icon && <RiGroupLine />}
            </div>
            {/* search component */}
            {
                search &&
                <div className="flex items-center gap-2 bg-[#E6EBF5] rounded-md pl-3 mt-5">
                    <span>
                        <RiSearchLine className="text-lg text-gray-400" />
                    </span>
                    <input type="text" className="w-full bg-[#E6EBF5] outline-none rounded-r-xl pl-2 py-3"
                        placeholder={placeholder} />
                </div>
            }
        </div>
    );
};

export default CommonHeader;