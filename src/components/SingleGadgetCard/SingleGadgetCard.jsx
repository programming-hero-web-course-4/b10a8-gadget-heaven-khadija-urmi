import { useNavigate } from "react-router-dom";

const SingleGadgetCard = ({ gadget }) => {
    const navigate = useNavigate();
    const { product_id, product_title,
        product_image, category, price, description } = gadget;
    console.log(product_id, product_title,
        product_image, category, price, description);

    const handleCardDetails = () => {
        navigate(`/gadget/${product_id}`);
    };

    return (

        <div className="p-4 bg-white rounded-lg shadow-xl">
            <img
                src={product_image}
                alt={product_title}
                className="h-44 w-72 rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{product_title}</h2>
            <p className="text-gray-800">Price: {price}</p>
            <button onClick={handleCardDetails} className="mt-3 px-3 py-4 border-solid border-2  border-uniqueColor rounded-3xl bg-white text-uniqueColor text-lg font-semibold">View Details</button>
        </div>

    );
};

export default SingleGadgetCard;