import { useState, createContext, useContext  } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {

    const [ cartList, setCartList ] = useState([])

    const addtoCart = (producto) => {
        const index = cartList.findIndex(e => e.id === producto.id)
        if (index === -1 ) {
            setCartList([
                ...cartList,
                producto
            ]);
        }else {
            const newCart = cartList;
            newCart[index].cantidad++;
            setCartList([
                ...newCart
            ]);
        }
    };

    const removeElement = (id) => {
        const newCart = cartList.filter (e => e.id !== id)
        setCartList(newCart)
    }

    const vaciarCarrito = () => setCartList([])

    const cantidadTotal = () => cartList.reduce((count, product) => count += product.cantidad , 0)



    return (
        <>
            <CartContext.Provider value={{
                cartList,
                addtoCart,
                removeElement,
                vaciarCarrito,
                cantidadTotal

            }}>
                
                {children}
            
            </CartContext.Provider>
        </>
    )

}