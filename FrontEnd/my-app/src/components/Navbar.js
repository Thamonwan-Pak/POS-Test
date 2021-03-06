import React, {Component} from 'react';
import {NavBar, Nav, NavItem} from 'react-bootstrap';


const Navbar = () =>{

    return(

        <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                <Nav.Link style={{color: "black", fontSize:18}} href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link style={{color: "black", fontSize:18}} href="/orders">Order</Nav.Link>
                </Nav.Item>
        </Nav>
        

    )
} 

export default Navbar;