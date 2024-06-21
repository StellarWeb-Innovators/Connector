/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { RiUser2Line } from "react-icons/ri";

const CommonAccordion = ({title, icon}) => {

    const [status, setStatus] = useState(false)
    const [open, setOpen] = useState("hidden")

    useEffect(() => {
        if (status) {
            setOpen("block")
        }else{
            setOpen("hidden")
        }
    },[status])




  return (
    <div className="shadow-md ">
      <div onClick={() => setStatus(!status)} className="flex items-center justify-between px-3 border-[1px] border-gray-200 py-4 rounded-md cursor-pointer">
        <div className="flex items-center gap-4">
          {
            icon && <RiUser2Line className="text-sm" />
          }
          <p className="text-sm">{title}</p>
        </div>
        <IoIosArrowUp />
      </div>

      <div className={`${open}`}>
        <div className="px-4 py-3">
          <p className="text-gray-400">Name</p>
          <p>Maria Hill</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-gray-400">Email</p>
          <p>maria_hill@marvel.com</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-gray-400">Time</p>
          <p>11:30 am</p>
        </div>
        <div className="px-4 py-3">
          <p className="text-gray-400">Location</p>
          <p>King Palace Wakanda</p>
        </div>
      </div>
    </div>
  );
};

export default CommonAccordion;
