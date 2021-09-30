import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
function Header(props) {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/Review">Order Review</a>
                <a href="/Inventory">Manage Inventory</a>
            </nav>
        </div>
    );
}

export default Header;
