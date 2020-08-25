import React from "react";
/* import Items from "./Categories/Items"; */
/* import { Link } from "react-router-dom/cjs/react-router-dom.min"; */
import "../style/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ title, image, price, rating, id }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
