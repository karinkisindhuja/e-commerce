import {createContext, useEffect, useState} from 'react';

export const CartContext = createContext<any>(null);

export const CartProvider = ({children} : {children:React.ReactNode}) =>{
    const [cartItems,setCartItems] = useState<any[]>(() => {
    const SavedCartData = localStorage.getItem("cartItems");
    return SavedCartData ? JSON.parse(SavedCartData) : [];
    });

    useEffect(() =>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },[cartItems])

    const addToCart = (product:any) =>{
        setCartItems((prev) =>{
            const existingItem = prev.find((item)=> item.id === product.id);
            if(existingItem){
                return prev.map((item) =>
                item.id === product.id ? {...item,quantity:item.quantity + 1} : item);
            }
            return [...prev,{...product,quantity:1}]
        });
    }
    
    const removeCartItem = (productId:number) =>{
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    }

    const updateQuantity = (productId:number,quantity:number) =>{
        setCartItems((prev) =>{
            const existingItem = prev.find((item)=> item.id === productId);
            if(existingItem){
                return prev.map((item) =>
                    item.id === productId ? {...item,quantity:quantity} : item
                );
            }
            return prev;
        })
    }
    return(
        <CartContext.Provider value={{cartItems, addToCart, removeCartItem , updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

