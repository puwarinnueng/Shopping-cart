import React from 'react';
import logo from './shippop.png';
import styles from "./Banner.module.css";

function Image() {
    return  <img className={styles.banner} src={logo} alt="Logo" />;    
}

export default Image;