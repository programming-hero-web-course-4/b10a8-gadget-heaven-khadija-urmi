import { useLoaderData, useParams } from "react-router-dom";
import starImg from "../../assets/star.png"

const GadgetDeatils = () => {
    const gadgetData = useLoaderData();
    const { gadgetId } = useParams();
    const gadget = gadgetData.find(item => item.product_id === gadgetId);

    if (!gadget) {
        return <p>Gadget not found.</p>;
    }

    return (
        <div className="card lg:card-side flex items-start p-8 bg-white rounded-lg shadow-lg border-solid border-gray-100  w-full max-w-5xl mx-auto">
            <figure>
                <img className="w-[450px] h-[550px] rounded-md"
                    src={gadget.product_image}
                    alt={gadget.product_title} />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold mb-2">{gadget.product_title}</h2>
                <p className="text-xl font-semibold text-gray-700 mb-2">Price:${gadget.price}</p>
                <span className="w-2/6 inline-block px-3 py-2 text-sm font-medium text-green-700 text-center 
                 border-2 border-solid border-green-400 bg-green-100
                rounded-full mb-4">In Stock</span>
                <p className="text-gray-600 text-lg">{gadget.description}</p>
                <div>
                    <h3 className="font-bold text-lg mb-2">Specification:</h3>
                    <ol className="list-decimal list-inside text-gray-500 space-y-2">
                        {gadget.specification.map((spec, index) => (
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
                    <button className="px-10 py-3  bg-uniqueColor text-white rounded-full flex items-center space-x-2 mt-6">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default GadgetDeatils;