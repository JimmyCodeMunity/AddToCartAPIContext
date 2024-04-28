import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../middleware/CartContext';

const Nav = () => {
    const { cart } = useContext(CartContext);
    const cartCount = cart.length;
    return (
        <div className="nav bg-primary w-full sm:py-16 py-6 sm:px-16 px-6 flex flex-1 justify-between items-center">
            <div className="justify-center items-start">
                <Link to="/" className="text-white font-poppins font-semibold text-3xl">Test App</Link>
            </div>
            <ul className="flex sm:flex-row sm:px-16 px-6 gap-[20px]">
                <li className="justify-center items-center">
                    <Link to="/" className="text-white">Shop</Link>
                </li>
                <li className="justify-center items-center">
                    <Link to="/cart" className="text-white">Cart({cartCount})</Link>
                </li>
                <li className="justify-center items-center">
                    <Link to="" className="text-white">Login</Link>
                </li>
            </ul>

        </div>
    );
}

export default Nav;
