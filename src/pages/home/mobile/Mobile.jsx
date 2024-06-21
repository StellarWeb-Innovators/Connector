import { Outlet, useLocation } from "react-router-dom";
import BarContents from "../common/barContents/BarContents";
import Sidebar from "../common/sidebar/Sidebar";

const Mobile = () => {
    const isChatRoute = useLocation()?.pathname.includes("chat");
    return (
        <div className="h-screen w-full fixed">
            {
                !isChatRoute ?
                    <>
                        <div className="max-h-[88vh] overflow-y-scroll">
                            <BarContents />
                        </div>
                        <div className="absolute w-full bottom-0 left-0 z-20 border-t">
                            <Sidebar />
                        </div>
                    </>
                    :
                    <div>
                        <Outlet />
                    </div>
            }
        </div>
    );
};

export default Mobile;