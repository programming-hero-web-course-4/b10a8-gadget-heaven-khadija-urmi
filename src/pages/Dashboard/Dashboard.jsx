import { useState } from 'react';
import WishList from '../../components/WishList/WishList';
import Cart from '../../components/Cart/Cart';

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState("WishList");
    return (
        <div>
            <div className='tabs flex justify-center space-x-4'>
                <button onClick={() => { setActiveTab("Cart") }}
                    className={` w-[200px]  px-4 py-2 rounded border-2 ${activeTab === "Cart" ? 'bg-white text-uniqueColor border-uniqueColor' : 'bg-uniqueColor  text-white border-white'}`} >
                    Cart</button>

                <button onClick={() => { setActiveTab("WishList") }}
                    className={` w-[200px] px-4 py-2 rounded-lg border-2 ${activeTab === "WishList" ? 'bg-white text-uniqueColor border-uniqueColor' : 'bg-uniqueColor   text-white '}`} >Wish List</button>
            </div>
            {activeTab === "WishList" && <WishList />}
            {activeTab === "Cart" && <Cart />}
        </div>
    );
};

export default Dashboard;