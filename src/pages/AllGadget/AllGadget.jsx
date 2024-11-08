
import { useLoaderData } from 'react-router-dom';
import SingleGadgetCard from '../../components/SingleGadgetCard/SingleGadgetCard';
import { Helmet } from 'react-helmet-async';

const AllGadget = () => {
    const dataAll = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>All Gadget</title>
            </Helmet>
            <div className="max-w-6xl  mx-auto mt-6 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {dataAll.map(gadget => (
                    <SingleGadgetCard key={gadget.product_id} gadget={gadget}></SingleGadgetCard>
                ))}
            </div>
        </div>
    );
};

export default AllGadget;