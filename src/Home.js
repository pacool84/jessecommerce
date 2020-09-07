import React from "react";
import "./styles/home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.todotaladros.com/img/cms/Blog/Amazon%20fraudes/Banner-Amazon-fraudes-blog.jpg"
        alt="Banner"
      />
      <div className="home__row">
        <Product
          id="723658726"
          title="Nintendo Switch"
          price={33.33 + " MXN"}
          rating={5}
          image="https://m.media-amazon.com/images/I/41D2PVDN3-L._AC_SY240_.jpg"
        />
        <Product
          id="148474633"
          title="Amazon Alexa"
          price={33.33 + " MXN"}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/51IJ3hQ6N2L._AC_SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0934563"
          title="MR.Robot Series All seasons"
          price={33.33 + " MXN"}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/612hLDw1vjL._AC_SY445_.jpg"
        />
        <Product
          id="528982"
          title="Silla de programador"
          price={33.33 + " MXN"}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61HEqHMkRhL._AC_SX466_.jpg"
        />
        <Product
          id="121092"
          title="Focos huelight "
          price={33.33 + " MXN"}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71LGEtQcgbL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="02362352"
          title="Monitor ultrawide"
          price={33.33 + " MXN"}
          rating={4}
          image="https://m.media-amazon.com/images/I/81ByqUO3SxL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
