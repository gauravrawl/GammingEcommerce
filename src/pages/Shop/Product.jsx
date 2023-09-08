

import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";




const Product = (props) => {
    console.log(props);
    
    // eslint-disable-next-line react/prop-types
    const { id, productName, price, productImage } = props.item;
    // eslint-disable-next-line no-unused-vars
    const { addToCart, cartItems } = useContext(ShopContext);
  
    const cartItemCount = cartItems[id];
  
    return (
      <div className="product">
        <img src={productImage} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> Rs. {price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </div>
    );
  };
  
  export default Product;