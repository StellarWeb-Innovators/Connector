import CommonAccordion from "./CommonAccordion";
import CommonHeader from "./CommonHeader";

const Profile = () => {
    return (
        <div>
            <CommonHeader
            title={"Profile"}
            icon={true}
            />

            <div className="flex flex-col items-center py-6 border-b-2 border-gray-200">
                <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/03/cobie-smulders-as-maria-hill-in-secret-invasion-1.png" alt="" 
                className="w-20 h-20 border-5 border-orange-50 rounded-full object-cover overflow-hidden"
                />
                <p className="font-bold mt-6 mb-1 tracking-wider">Maria Hill</p>

                <div className="flex items-center justify-center gap-2 text-sm tracking-wider">
                    <div className="rounded-full w-2 h-2 bg-green-400 mt-1 "></div>
                    <p>Active</p>
                </div>
            </div>



            <div className="px-7 py-5 tracking-wider">
                <p className="mb-7 text-sm">
                If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
                </p>

                <div className="space-y-4">
                <CommonAccordion
                title={"About"}
                icon={true}
                />

                <CommonAccordion
                title={"Attached Files"}
                icon={true}
                />
                </div>
                
            </div>
        </div>
    );
};

export default Profile;