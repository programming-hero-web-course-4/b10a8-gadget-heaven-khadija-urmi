import { useLoaderData, useParams } from "react-router-dom";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { addToCartItem, addToWishItem } from "../../utilites";
import ErrorPage from "../ErrorPage/ErrorPage";



const GadgetDeatils = () => {
    const gadgetData = useLoaderData();
    const { gadgetId } = useParams();
    const [gadget, setGadget] = useState({});
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        const singleGadget = gadgetData.find(item => item.product_id == gadgetId)
        setGadget(singleGadget);
    }, [gadgetData, gadgetId])

    if (!gadget) {
        return <ErrorPage></ErrorPage>;
    }
    const { product_title, product_image, price, description, specification = [] } = gadget;

    const handleAddToWishlist = (gadget) => {
        addToWishItem(gadget);
        setIsInWishlist(true);
    }
    const handleAddToCart = (gadget) => {
        addToCartItem(gadget);
    }
    return (
        <div className="card lg:card-side flex items-start p-8 bg-white rounded-lg shadow-lg border-solid border-gray-100  w-full max-w-5xl mx-auto">
            <figure>
                <img className="w-[450px] h-[550px] object-contain rounded-md"
                    src={product_image}
                    alt={product_title} />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold mb-2">{product_title}</h2>
                <p className="text-xl font-semibold text-gray-700 mb-2">Price:${price}</p>
                <span className="w-2/6 inline-block px-3 py-2 text-sm font-medium text-green-700 text-center 
                 border-2 border-solid border-green-400 bg-green-100
                rounded-full mb-4">In Stock</span>
                <p className="text-gray-600 text-lg">{description}</p>
                <div>
                    <h3 className="font-bold text-lg mb-2">Specification:</h3>
                    <ol className="list-decimal list-inside text-gray-500 space-y-2">
                        {specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ol>
                </div>
                <div>
                    <h2 className="font-bold text-lg mb-4">Ratings:</h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2  bg-amber-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2  bg-amber-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2  bg-amber-400 " defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-400" />
                    </div>
                    <div className="flex items-center space-x-4 mt-6">
                        <button onClick={() => handleAddToCart(gadget)} className="px-6 py-3 bg-uniqueColor text-white rounded-full flex items-center space-x-2">
                            <span>Add to Cart</span>
                            <FontAwesomeIcon className="text-white" icon={faCartShopping} />
                        </button>
                        <button disabled={isInWishlist} onClick={() => handleAddToWishlist(gadget)} className={`cursor-pointer ${isInWishlist ? "cursor-not-allowed" : ""}`}
                        >
                            <FontAwesomeIcon className={`${isInWishlist ? "text-gray-400" : "text-black"} cursor-pointer`} icon={faHeart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDeatils;