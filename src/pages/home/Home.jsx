import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";


const Home = () => {
    return (
        <>
            <div className="hidden lg:block">
                <Desktop />
            </div>
            <div className="lg:hidden">
                <Mobile />
            </div>
        </>
    );
};

export default Home;