import { useLoaderData, useParams } from "react-router-dom";
import SingleGadgetCard from "../SingleGadgetCard/SingleGadgetCard";
import { useEffect, useState } from "react";

const GadgetCards = () => {
    const gadgetData = useLoaderData() || [];;
    console.log(gadgetData);
    const { categoryName } = useParams();
    console.log(categoryName);
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if (categoryName) {
            const categorizedDevice = gadgetData.filter(
                gadget => gadget.category === categoryName
            );
            setGadgets(categorizedDevice);
        }
        else {
            setGadgets(gadgetData.slice(0, 6));
        }
    }, [categoryName, gadgetData]);

    return (
        <>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {gadgets.map(gadget => (
                    <SingleGadgetCard key={gadget.product_id} gadget={gadget}></SingleGadgetCard>
                ))}
            </div>
        </>
    );
};

export default GadgetCards;