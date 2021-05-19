import React, { Component } from 'react';
import { Jumbotron, Collapse } from 'reactstrap';
// import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <Jumbotron fluid className="banner" style={{ backgroundImage: "url(/images/image-hero-mobile.jpg)"}}>
                    <h1>crowdfund</h1>
                </Jumbotron>
            </header>
        )
    }
}

export default Header;