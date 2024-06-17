/* eslint-disable react/prop-types */

import useAuth from "../../../../hooks/useAuth";
import image from "../../../../assets/IMG_20230714_001437.png";
import { RiMore2Fill, RiTimeLine } from "react-icons/ri";

const Message = ({ message }) => {
    const { user } = useAuth();
    console.log(user?.email);
    return (
        <div className="">
            {
                message?.sender === user?.email ?
                    <div className="flex justify-end w-full">
                        <div className="w-3/5 flex justify-end">
                            <div className="flex gap-2">
                                {/* icon for delete and other stuffs */}
                                <button className="w-fit h-fit mt-1">
                                    <RiMore2Fill className=" text-gray-500" />
                                </button>
                                <div className="relative p-4 rounded-md flex justify-end bg-[#F5F7FB]">
                                    <div className="">
                                        <p>{message?.message}</p>
                                        <div className="text-gray-500 flex items-center justify-end gap-1">
                                            <RiTimeLine className="text-xs" />
                                            <span className="text-xs font-semibold">10:05</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-[6px] -right-[14px] -rotate-[133deg] transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[9px] border-t-[#F5F7FB]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex gap-2 items-end">
                        {/* image */}
                        <img src={image} className="w-9 h-9 rounded-full object-cover" alt="" />
                        <div className="w-3/5">
                            {/* message */}
                            <div className="flex gap-2 ">
                                <div className="relative">
                                    <div className="bg-[#7269EF] text-white p-4 rounded-md">
                                        <p>{message?.message}</p>
                                        <div className="text-[#FFFFFF80] flex items-center justify-end gap-1">
                                            <RiTimeLine className="text-xs" />
                                            <span className="text-xs font-semibold">10:05</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-[6px] left-[3px] rotate-[135deg] transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[9px] border-t-[#7269EF]"></div>
                                </div>
                                {/* icon for delete and other stuffs */}
                                <button className="w-fit h-fit mt-1">
                                    <RiMore2Fill className=" text-gray-500" />
                                </button>
                            </div>
                            {/* name */}
                            <p className="mt-2 text-sm text-gray-700 font-medium">Doris khan</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Message;