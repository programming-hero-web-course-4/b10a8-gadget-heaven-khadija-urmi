import { useEffect, useState } from "react";
import { getWishItem } from "../../utilites";

const WishList = () => {
    const [wishItems, setWishItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const favorites = await getWishItem();
                setWishItems(favorites);
            } catch (error) {
                console.error("Failed to load wish list items:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1  gap-6 my-12">
            {wishItems.map((item) => {
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
                            <div className="card-actions justify-start mt-2">
                                <button className="mt-3 px-6 py-4 border-solid border-2  rounded-3xl text-white bg-uniqueColor text-lg font-semibold">Add to cart</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default WishList;