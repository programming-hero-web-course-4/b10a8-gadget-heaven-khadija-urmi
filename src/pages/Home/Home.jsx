import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import GadgetSidebar from "../../components/GadgetSidebar/GadgetSidebar";
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
                <h2 className="text-4xl text-center font-bold mb-6">Explore Cutting-Edge Gadgets</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4  h-full max-w-7xl mx-auto">
                    <GadgetSidebar categories={categoryName.categories} />
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default Home;

