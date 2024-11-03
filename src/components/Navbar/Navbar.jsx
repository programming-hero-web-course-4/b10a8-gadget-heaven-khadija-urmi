import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "btn btn-secondary" : "btn"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/gadget"
            className={({ isActive }) =>
                isActive ? "btn btn-secondary" : "btn"
            }
        >
            Gradgets
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive }) =>
                isActive ? "btn btn-secondary" : "btn"
            }
        >
            Dashboard
        </NavLink>
    </>
    return (
        <div className="navbar bg-primary text-white max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <FontAwesomeIcon icon={faCartShopping} />
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
    );
}

export default Navbar;