import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState([])

  const handleAdd = (props) => {
    const index = cart.findIndex((item) => item.id === props.id);
    
    if (index === -1) {
      setCart([...cart, { ...props, qty: 1 }])
      setTotal(total + props.price)
    } else {
      cart[index].qty++;
      setCart(cart)
      setTotal(total + cart[index].price)
    }
    setItem(item+1)
    console.log(cart)
  };
  
  const handleRemove = (props) => {
    const index = cart.findIndex((item) => item.id === props.id);
    if (index !== -1) {
      cart[index].qty--;
      setItem(item - 1);
      setTotal(total - cart[index].price)
      if (cart[index].qty === 0) {
        cart.splice(index, 1)
      }
    }
    setCart(cart)
  };

  const clear = () => {
    setTotal(0);
    setItem(0);
    setCart([])
  };

  const toggle = () => {
    setShowCart(!showCart)
  }

  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, clear, toggle, setShowCart, showCart, cart }}
    >
      {showCart && <CartModal toggle={toggle} clear={clear} cart={cart} />}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
