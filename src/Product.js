import React from "react";
import "./styles/product.css";

function Product({ id, title, image, price, rating }) {
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
      <button>Agregar al carrito</button>
    </div>
  );
}

export default Product;
