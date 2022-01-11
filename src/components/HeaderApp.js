import React from 'react';
// import { Row, Col} from 'react-bootstrap';
// import { Navbar, Container, NavDropdown, Nav} from "react-bootstrap";
import { Navbar, Container} from "react-bootstrap";

import logo from '../logo.svg'
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
// import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

export const HeaderApp = () => (

    // <Navbar bg='dark' variant='dark' style={style}>
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand href='#home'>
                <img
                    alt=''
                    src={logo}
                    width='30'
                    height='30'
                    className='d-inline-block align-top'
                />{' '}
            Mini Ecommerce
            </Navbar.Brand>
            <ShoppingCart />
            
        </Container>
    </Navbar>
    


    // <>
    // <Row>
    //     <Col xs = {4}>
    //         <div><h3 align="left">mini Ecommerce</h3></div>
    //     </Col>
    //     <Col xs = {1}>
    //     </Col>
    //     <Col xs = {7}>
    //         <div><h2 align="left">StareStore</h2></div>
    //     </Col>
    // </Row>
    // <Row>
    //     <Col xs = {8}>
    //         <div>Mini Ecommerce - MY FIRST</div>
    //     </Col>
    //     <Col xs = {4}>
    //         <div> APROACH</div>
    //     </Col>
    // </Row>
    // </>
    
);