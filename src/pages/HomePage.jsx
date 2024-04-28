import React, { useContext } from 'react';
import Nav from '../components/Nav';
import { dataProducts } from '../appData';
import { CartContext } from '../middleware/CartContext';
// console.log(dataProducts)

const HomePage = () => {
    const {addToCart,cart} = useContext(CartContext);
    
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
                        <h1 className="font-poppins font-normal text-[30px]">My Shop</h1>
                    </div>

                    <div className="sm:py-16 py-8">
                        <div className="flex flex-wrap flex-row justify-between items-center">

                            {dataProducts.map((product) => {
                                return (
                                    <div key={product.id} className="bg-gray-500 shadow shadow-slate-400 h-[300px] w-[200px] rounded-2xl overflow-hidden">
                                        <img src={product.img} className="object-cover h-[60%] w-full" alt="" />
                                        <div className="py-2 px-2">
                                            <p className="text-white">{product.title}</p>
                                            <p>{product.price}</p>
                                            
                                                <button onClick={() => addToCart(product)} className="bg-black text-white p-1 rounded-xl mt-3">Add to cart</button>
                                            
                                            
                                        </div>
                                    </div>
                                )
                            })}



                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default HomePage;
