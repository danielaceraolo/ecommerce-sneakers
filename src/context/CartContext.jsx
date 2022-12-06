import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [order, setOrder] = useState(false);
    const [orderId, setOrderId] = useState({});
    const isInCart = (id) => cartList.findIndex((producto) => producto.id === id);

    const addToCart = (newProductCart) => {
        setOrder(false);
        let index = isInCart(newProductCart.id);
        if (index === -1) {
            setCartList([...cartList, newProductCart]);
        } else {
            cartList[index].quantity += newProductCart.quantity;
            setCartList([...cartList]);
        }
    };

    const removeFromCart = (id) => {
        setCartList(cartList.filter((el) => el.id !== id));
    };

    const totalQuantity = () => {
        return cartList.reduce(
            (sumPrecio, product) => (sumPrecio += product.quantity * product.price),
            0
        );
    };

    const calcTotal = () => {
        return cartList.reduce((count, product) => (count += product.quantity), 0);
    };

    const deleteCart = () => {
        setCartList([]);
    };

    const showOrder = (id) => {
        setOrder(true);
        setOrderId(id);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                order,
                orderId,
                isInCart,
                totalQuantity,
                calcTotal,
                addToCart,
                removeFromCart,
                deleteCart,
                showOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;