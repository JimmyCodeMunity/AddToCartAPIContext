import React, { useEffect, useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    useEffect(() => {
        // Load cart from local storage when component mounts
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        // Save cart to local storage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        try {
            // Check if the product is already in the cart
            const existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                // If the product is already in the cart, update its quantity
                setCart(cart.map(item =>
                    item.id === product.id
                        ? { ...existingProduct, quantity: existingProduct.quantity + quantity }
                        : item
                ));
            } else {
                // If the product is not in the cart, add it with the specified quantity
                setCart([...cart, { ...product, quantity }]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };


    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const itemIndex = prevCart.findIndex(item => item.id === productId);
            if (itemIndex === -1) {
                return prevCart; // Item not found, return the cart as is
            }

            const item = prevCart[itemIndex];
            if (item.quantity > 1) {
                // If quantity is more than 1, decrease it by 1
                const updatedItem = { ...item, quantity: item.quantity - 1 };
                return [...prevCart.slice(0, itemIndex), updatedItem, ...prevCart.slice(itemIndex + 1)];
            } else {
                // If quantity is 1, remove the item from the cart
                return [...prevCart.slice(0, itemIndex), ...prevCart.slice(itemIndex + 1)];
            }
        });
    };


    const incrementProductQuantity = (productId, quantity = 1) => {
        setCart(prevCart => {
            const itemIndex = prevCart.findIndex(item => item.id === productId);
            if (itemIndex === -1) {
                // Optionally, alert the user that the product is not in the cart
                console.log('Product not found in cart');
                return prevCart; // Product not found, return the cart as is
            }

            const item = prevCart[itemIndex];
            // Increase the quantity of the item
            const updatedItem = { ...item, quantity: item.quantity + quantity };
            return [...prevCart.slice(0, itemIndex), updatedItem, ...prevCart.slice(itemIndex + 1)];
        });
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart,setCart, getCartTotal, getTotalQuantity, removeFromCart, incrementProductQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
