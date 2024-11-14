import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal({ toggle, clear }) {
  const { cart, total } = useValue(); // Call the hook here

  // Calculate total price based on items in cart
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={clear}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item) => (
          <div className={styles.cartCard} key={item.id}>
            <h1>{item.name}</h1>
            <h3> X {item.qty} </h3>
            <h3> $ {item.qty * item.price} </h3>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
  );
}

export default CartModal;
