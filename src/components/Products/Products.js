import React from "react";
import styles from "./Products.module.css";
import Banner from "../Banner/Banner";
import { connect } from "react-redux";
import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div>
      <Banner />
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
