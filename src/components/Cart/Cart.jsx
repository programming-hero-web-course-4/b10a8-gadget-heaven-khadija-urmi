import { useEffect, useState } from "react";
import { removeItemsCart, getCartItem } from "../../utilites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import sucessImg from "../../assets/Group.png";

const Cart = () => {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);
    const [prices, setPrices] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

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


    const handleRemoveData = (id) => {
        removeItemsCart(id);
        const updatedCart = getCartItem();
        console.log("updated cart", updatedCart);
        setCart(updatedCart);
        const totalPrice = updatedCart.reduce((acc, item) => acc + item.price, 0);
        setPrices(totalPrice);
    };
    const handleSortItem = () => {
        const allItem = getCartItem();
        const sortedItem = allItem.sort((a, b) => b.price - a.price);
        setCart(sortedItem);
    }


    return (
        <section className="max-w-7xl mx-auto">
            <div className="flex justify-between m-3"><h2 className="text-2xl font-bold ml-6">Cart</h2>
                <div className="flex items-center space-x-4">
                    <h3 className="text-2xl font-bold">Total Price:{prices}</h3>

                    <button onClick={() => handleSortItem()} className="px-7 py-3 border-2 border-solid border-uniqueColor rounded-full text-uniqueColor font-semibold text-lg">Sort By Price</button>
                    {/* Purchase Modal */}
                    <div>
                        <button className="px-8 py-3 bg-uniqueColor rounded-full text-white font-semibold text-lg" onClick={() => setIsOpen(true)}>Purchase </button>
                        {isOpen && (
                            <div id="my_modal_1" className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" style={{ zIndex: 50 }}>
                                <div className="modal-box bg-white p-6 rounded-lg shadow-lg text-center">
                                    <img className="w-14 h-14  max-w-xs mx-auto mb-4 " src={sucessImg} />
                                    <h3 className="font-bold text-2xl">Payment Successful</h3>
                                    <p className="text-lg py-4">Thanks for purchasing.<br />
                                        Total: {prices}
                                    </p>
                                    <div className="modal-action ">
                                        <button
                                            className="btn max-w-2xl mx-auto bg-uniqueColor text-white px-7 py-3 "
                                            onClick={() => {
                                                localStorage.removeItem('cartItem');
                                                setIsOpen(false);
                                                setPrices(0);
                                                setCart([]);
                                                navigate('/');
                                            }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1  gap-6 my-12">
                {cart.map((item) => {
                    return (
                        <div key={item.product_id} className="relative max-w-5xl mx-auto w-[900px] p-4 bg-white shadow-md rounded-lg flex items-center border border-solid border-gray-300">
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
                            {/* Remove Item Button */}
                            <button onClick={() => { handleRemoveData(item.product_id) }} className="absolute p-2 m-2 rounded-full border-solid border-2 border-red-500 top-2 right-2 flex items-center justify-center w-8 h-8">
                                <FontAwesomeIcon className="text-red-500 text-xl" icon={faXmark} />
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Cart;