import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <h1 className="logo">crowdfund</h1>
                        <IconButton color="inherit">
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}

export default Header;