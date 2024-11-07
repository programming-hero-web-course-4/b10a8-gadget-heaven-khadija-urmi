import { NavLink } from "react-router-dom";

const GadgetSidebar = ({ categories }) => {

    return (
        <aside
            role="tablist"
            className="md:col-span-1 bg-white rounded-lg shadow-lg p-6 w-full mb-4"
        >
            <h3 className="text-2xl font-bold text-center mb-4">Categories</h3>
            <div className="flex flex-col gap-4">
                {categories.map(category => (
                    <NavLink
                        key={category.category_id}
                        to={`/category/${category.name}`}
                        role="tab"
                        className={({ isActive }) =>
                            `tab text-xl font-medium p-3 m-2 rounded-lg transition-all duration-200 min-h-12  ${isActive ? 'bg-uniqueColor text-white ' :
                                ' text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </aside >
    );
};

export default GadgetSidebar;
