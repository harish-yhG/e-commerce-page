import React from "react";
import './Header.css';


class Header extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="logocontainer">
                     <img src="https://www.zeptonow.com/images/logo.svg"></img>
                </div>
            <nav>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Special Offers</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
                
            </nav>

            </div>
        );
    }

}

export default Header;