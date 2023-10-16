import React, { useContext } from "react";
import { ThemeContext } from "../context-api/theme/ThemeContext";
import "../styles/style.css";

const ProductDetails = () => {

    const theme = useContext(ThemeContext);

    const darkMode = theme.state.darkMode;

    return (
        <div className="product-container">
            <div>
                <h2> {darkMode ? "Dark Theme" : "Light Theme" }</h2>
            </div>
            <div className="product-image">
                <img src="https://dummyimage.com/300/000/fff&text=Product+Image" alt="" />
            </div>
            <div className={`product-description ${darkMode ? "product-dark" : "product-light"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto omnis magnam corrupti fuga exercitationem, dicta quaerat perspiciatis odio! Excepturi qui dicta sapiente, aliquid deleniti sunt aspernatur ratione architecto ipsa eius?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto omnis magnam corrupti fuga exercitationem, dicta quaerat perspiciatis odio! Excepturi qui dicta sapiente, aliquid deleniti sunt aspernatur ratione architecto ipsa eius?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto omnis magnam corrupti fuga exercitationem, dicta quaerat perspiciatis odio! Excepturi qui dicta sapiente, aliquid deleniti sunt aspernatur ratione architecto ipsa eius?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto omnis magnam corrupti fuga exercitationem, dicta quaerat perspiciatis odio! Excepturi qui dicta sapiente, aliquid deleniti sunt aspernatur ratione architecto ipsa eius?
            </div>
        </div>
    );
}

export default ProductDetails;