import React, { useContext, useEffect } from 'react';
import Nav from './Nav';
import { dataProducts } from '../appData';
import { CartContext } from '../middleware/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart,setCart, getCartTotal, getTotalQuantity, removeFromCart, addToCart, incrementProductQuantity } = useContext(CartContext)
    const totalPrice = getCartTotal();
    const id = "bjsbdjhcgsdjhfbsdnfsd";

    useEffect(() => {
        // Fetch cart data from local storage when component mounts
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            // You might want to update the cart context here if needed
            // For example, you could have a function in the context to set the cart
            setCart(JSON.parse(storedCart));
        }
    }, []);
    return (
        <div className="flex-1">
            <div className="flex-1 w-full bg-primary">
                <div className="w-full">
                    <Nav />
                </div>
            </div>
            <div className="flex-1 w-full sm:py-16 py-6 sm:px-16 px-6">
                <div className="w-full">
                    <div className="flex w-full justify-center items-cente">
                        <h1 className="font-poppins font-normal text-[30px]">My Cart</h1>

                    </div>

                    <div>
                        <h4 className="font-poppins text-yellow-600 font-normal text-[20px]">Cart Total: {totalPrice}</h4>
                    </div>

                    <div className="sm:py-16 py-8">
                        <div className="w-full justify-between items-center">

                            {cart.map((prod) => {
                                return (
                                    <div className="flex sm:my-10 px flex-1 justify-between items-center bg-slate-200 rounded-2xl w-full">
                                        <div>
                                            <img src={prod.img} className="object-cover h-32 w-32 rounded-2xl" alt="" />
                                        </div>
                                        <div className='justify-center items-center flex flex-col'>
                                            <h4 className="text-2xl">{prod.title}</h4>
                                            <p className="text-normal text-blue-400 font-poppins">{prod.price}</p>
                                        </div>
                                        <div className="px-16 justify-between gap-5 items-center flex">
                                            <div className="bg-slate-400 rounded-full h-12 w-12 text-white justify-center items-center text-center flex">
                                                <h2 className="text-white font-semibold text-[20px]">{prod.quantity}</h2>
                                            </div>
                                            <div className="bg-yellow-400 rounded-full h-12 w-12 text-white justify-center items-center text-center flex">
                                                <button onClick={() => removeFromCart(prod.id)} className="text-white font-semibold text-[20px]">-</button>
                                            </div>
                                            <div className="bg-black rounded-full h-12 w-12 text-white justify-center items-center text-center flex">
                                                <button onClick={() => incrementProductQuantity(prod.id)} className="text-white font-semibold text-[20px]">+</button>
                                            </div>

                                        </div>




                                    </div>
                                )
                            })}



                        </div>
                        <div>
                            <Link className="bg-yellow-500 h-12 w-60 p-3 rounded-xl text-white font-semibold" to={`/payment/checkout?productId=${id}&price=${totalPrice}`}>Continue to checkout({totalPrice})</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CartPage;
