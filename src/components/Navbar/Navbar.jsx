import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();

    const navbarClass = location.pathname === '/'
        ? 'bg-uniqueColor text-white  '
        : 'bg-white ';

    const links = <>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-white font-bold' : '')}
        >
            Home
        </NavLink>
        <NavLink
            to="/gadget"
            className={({ isActive }) => (isActive ? 'text-uniqueColor font-bold' : '')}
        >
            Gradgets
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'text-uniqueColor font-bold' : '')}
        >
            Dashboard
        </NavLink>
        <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? 'text-uniqueColor font-bold' : '')}
        >
            Statistics
        </NavLink>
    </>


    return (
        <section className={`${navbarClass}`}>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h2 className="text-xl font-bold text-white">Gadget Heaven</h2>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <FontAwesomeIcon className='rounded-full p-2 bg-white text-black'
                        icon={faCartShopping} />
                    <FontAwesomeIcon className='rounded-full p-2 bg-white text-black' icon={faHeart} />
                </div>
            </div>
        </section >
    );
}


export default Navbar;