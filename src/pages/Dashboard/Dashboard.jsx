import { useState } from 'react';
import WishList from '../../components/WishList/WishList';
import Cart from '../../components/Cart/Cart';
import { Helmet } from "react-helmet-async";
import Header from '../../components/Header/Header';


const Dashboard = () => {

    const [activeTab, setActiveTab] = useState("Cart");

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Header title="Dashboard" subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!">

            </Header>
            <div className='tabs flex justify-center space-x-4 -mt-12'>
                <button onClick={() => { setActiveTab("Cart") }}
                    className={` w-[200px]  px-4 py-2 rounded border-2 rounded-full ${activeTab === "Cart" ? 'bg-white text-uniqueColor border-uniqueColor' : 'bg-uniqueColor  text-white border-white'}`} >
                    Cart</button>

                <button onClick={() => { setActiveTab("WishList") }}
                    className={` w-[200px] px-4 py-2 rounded-full border-2 ${activeTab === "WishList" ? 'bg-white text-uniqueColor border-uniqueColor' : 'bg-uniqueColor   text-white '}`} >Wish List</button>
            </div>
            {activeTab === "WishList" && <WishList />}
            {activeTab === "Cart" && <Cart />}
        </div>


    );
};

export default Dashboard;