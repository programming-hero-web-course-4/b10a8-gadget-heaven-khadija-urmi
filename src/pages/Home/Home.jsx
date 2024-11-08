import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import GadgetSidebar from "../../components/GadgetSidebar/GadgetSidebar";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const categoryName = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <NavLink />
                <Banner />
                <Header title='Explore Cutting-Edge Gadgets'
                    subtitle='Discover the latest in innovative technology and stay ahead with cutting-edge gadgets designed to enhance your lifestyle.' />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4  h-full max-w-7xl mx-auto">
                    <GadgetSidebar categories={categoryName.categories} />
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default Home;

