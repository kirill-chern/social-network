import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://geomatrix-retail.com/wp-content/uploads/2017/07/logo-wildberries.png" />
        </header>
    );
};

export default Header;