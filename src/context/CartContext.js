import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartContextProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [cartPreview, setCartPreview] = useState(true)

  console.log(cart);

  const addItem = (item, quantity, id) => {
    if (isInCart(item.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.item.id === item.id) {
          element.quantity = element.quantity + quantity;
        }
      }
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          item: item,
          quantity: quantity,
        },
      ]);
    }
  };

  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = () => {
    let cantidad = 0;
    cart.forEach((element) => (cantidad = cantidad + element.quantity));
    console.log(cantidad);
    return cantidad;
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      total = total + element.quantity * element.item.price;
    });

    return total;
  };



  const displayCartContainer = () => {
    const CartContainer = document.querySelector('.CartContainer')
    CartContainer.classList.toggle('d-none') 

    }


    


    const deleteFromCart = (id) => {
        const newCart = [...cart].filter(element =>element.item.id !== id )
        setCart(newCart)
      }
      
    const [displayCart, useDisplayCart] = useState(true);

  return (
    <CartContext.Provider
      value={{ cart, addItem, clearCart, getQuantity, getTotal, displayCartContainer, deleteFromCart   }}
    >
      {children}
    </CartContext.Provider>
  );
};
