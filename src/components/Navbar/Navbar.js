import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (


    <div>
      <div className={styles.navbar}>
        <Link to="/">
          <h2 className={styles.navbar__logo}>หน้าหลัก</h2>
        </Link>  
        <h6 className={styles.navbar__my}>โดย ภูวรินทร์ มณีจันทร์สุข</h6>
        <Link to="/cart">
          <div className={styles.navbar__cart}>
            <h6 className={styles.cart__title}>ตะกร้า</h6>
            <div className={styles.cart__counter}>{cartCount}</div>
          </div>
        </Link>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
