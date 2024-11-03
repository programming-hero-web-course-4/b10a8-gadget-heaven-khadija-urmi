import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center max-w-6xl mx-auto p-10">
            <aside>
                <h3 className="text-3xl font-bold mb-3">Gadget Heaven</h3>
                <p className="font-medium text-gray-500">
                    Leading the way in cutting-edge technology and innovation.
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mt-10">
                <nav className="flex flex-col space-y-2">
                    <h6 className="footer-title text-lg">Product Support</h6>
                    <Link className="link link-hover">Order Tracking</Link>
                    <Link className="link link-hover">Shipping & Delivery</Link>
                    <Link className="link link-hover">Returns</Link>
                </nav>
                <nav className="flex flex-col space-y-2">
                    <Link className="footer-title text-lg">Company</Link>
                    <Link className="link link-hover">About Us</Link>
                    <Link className="link link-hover">Careers</Link>
                    <Link className="link link-hover">Contact</Link>
                </nav>
                <nav className="flex flex-col space-y-2">
                    <h6 className="footer-title text-lg">Legal</h6>
                    <Link className="link link-hover">Terms of Service</Link>
                    <Link className="link link-hover">Privacy Policy</Link>
                    <Link className="link link-hover">Cookie Policy</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;