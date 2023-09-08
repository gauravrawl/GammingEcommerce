import  { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export const CartItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, productName, price, productImage } = props.item;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount,remove} = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: Rs{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} > - </button>
          <input value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id) }> + </button>
          <button className="remove" onClick={() => remove(id)}> Remove item </button>
        </div>
      </div>
    </div>
  );
};