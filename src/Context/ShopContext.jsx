import { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);


const grtDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0; 
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(grtDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        
    }

    
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
   

    // cart ke component me total amount aa rha h esse
    const getTotalCartAmount = () => {
        let amount = 0;
        for (const index in cartItem) {
            if (cartItem[index] > 0) {
                let findItem = all_product.find((item) => item.id === Number(index))
                amount += cartItem[index] * findItem.new_price
            }
        }
        return amount;
    }


    // cart icon pe count 1,2,3 ho rha h esse
    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            totalItem += cartItem[item] 
        }
        return totalItem;
    };
       // Quantity Incriment ka function
    const increaseItemQuantity = (id) => {
        setCartItem((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1, // Ensure it doesn't start from NaN
        }));
    };
    
        // Quantity decriment ka function   
    const decreaseItemQuantity = (id) => {
        setCartItem((prevCart) => {
            if (prevCart[id] > 1) {
                return { ...prevCart, [id]: prevCart[id] - 1 };
            } else {
                const updatedCart = { ...prevCart };
                delete updatedCart[id];
                return updatedCart;
            }
        });
    };


 const contextValue = {getTotalCartItem, getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

