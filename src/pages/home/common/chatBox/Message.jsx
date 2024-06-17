/* eslint-disable react/prop-types */

import useAuth from "../../../../hooks/useAuth";

const Message = ({ message }) => {
    const { user } = useAuth();
    console.log(user?.email);
    return (
        <div>
            {
                message?.sender === user?.email ?
                    <div className="flex justify-end w-full">
                        <div className="w-3/5 relative rounded-md flex justify-end bg-gray-500">
                            <p>{message?.message}</p>
                            <div className="absolute bottom-[6px] -right-[14px] -rotate-[133deg] transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[9px] border-t-gray-500"></div>
                        </div>
                    </div>
                    :
                    <div className="relative">
                        <div className="bg-[#7269EF] p-4 w-3/5 rounded-md">
                            <p>{message?.message}</p>
                        </div>
                        <div className="absolute bottom-[6px] left-[3px] rotate-[135deg] transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[9px] border-t-[#7269EF]"></div>
                    </div>
            }
        </div>
    );
};

export default Message;