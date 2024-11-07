import { useEffect, useState } from "react";
import { getCartItem } from "../../utilites";


const Cart = () => {
    const [cart, setCart] = useState([]);
    const [prices, setPrices] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const favorites = await getCartItem();
                setCart(favorites);
                const totalPrice = favorites.reduce((acc, item) => acc + item.price, 0);
                setPrices(totalPrice);
            } catch (error) {
                console.error("Failed to load wish list items:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="max-w-7xl mx-auto">
            <div className="flex justify-between m-3"><h2 className="text-2xl font-bold ml-6">Cart</h2>
                <div className="flex items-center space-x-4">
                    <h3 className="text-2xl font-bold">Total Price:{prices}</h3>
                    <button className="px-7 py-3 border-2 border-solid border-uniqueColor rounded-full text-uniqueColor font-semibold text-lg">Sort By Price</button>
                    <button className="px-7 py-3  bg-uniqueColor rounded-full text-white font-semibold text-lg">Purchase</button>
                </div>
            </div>
            <div className="grid grid-cols-1  gap-6 my-12">
                {cart.map((item) => {
                    return (
                        <div key={item.product_id} className="max-w-5xl mx-auto w-[900px] p-4 bg-white shadow-md rounded-lg flex items-center border border-solid border-gray-300">
                            <div className="w-52 h-full bg-gray-300 rounded-lg overflow-hidden">
                                <img
                                    src={item.product_image} alt={item.product_title}
                                    className="w-full h-full object-cover" />
                            </div>
                            <div className="card-body flex-1 ml-4">
                                <h2 className="card-title text-2xl font-semibold">{item.product_title}</h2>
                                <p className="text-black text-lg font-semibold">
                                    Description: <span className="text-gray-600 font-normal">{item.description}</span></p>
                                <p className="text-gray-700 text-xl font-semibold 
                            mt-2">Price: ${item.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Cart;