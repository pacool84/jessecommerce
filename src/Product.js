import React from "react";
import { useStateValue } from "./StateProvider";
import "./styles/product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
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
      <div className="product__info">
        <h4> {title} </h4>
        <p className="product__price">$ {price} </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐️</span>
            ))}
        </div>
      </div>

      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Agregar al carrito</button>
    </div>
  );
}

export default Product;
