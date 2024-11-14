import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";

function ItemCard(props) {
  const { handleAdd, handleRemove } = useValue();
  const {  name, price } = props

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(props)}>
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => handleRemove(props)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
