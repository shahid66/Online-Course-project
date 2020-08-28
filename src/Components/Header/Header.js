import React from 'react';
import Banner from '../../images/banner.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

const Header = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">              
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link" href="/Home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/course">Course</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="banner">
                    <img src={Banner} alt=""/>
                </div>
            </div>
        </div>

    

    );
};

export default Header;