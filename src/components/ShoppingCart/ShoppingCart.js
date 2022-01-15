import React, {useEffect, useState } from 'react'
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { ShoppingCartItem } from './ShoppingCartItem';
import { useLiveQuery } from 'dexie-react-hooks';
import db from '../../app/db/db';
import { Link } from 'react-router-dom';


export const ShoppingCart = () => {

    // const productsCart = useLiveQuery(() =>{ esto nos funca, porque se trata de una función asíncrona
    //     db.cart.toArray()
    // })
    const [productsCart, setProductsCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);

    // const getTotalPrice = () => {
    //     const total = productsCart?.reduce((totalPrice, currentProduct) => {
    //         return totalPrice + currentProduct.price;
    //     },0)
    //     setTotalPrice(total)
    // }

    useLiveQuery(async () =>{
        const productsDB = await db.cart.toArray()
        setProductsCart(productsDB)
    },[])

    // useEffect(()=>{
    //     if(productsCart.length >0){
    //         getTotalPrice()
    //     }
    // },[productsCart])

    useEffect(()=>{
        if(productsCart.length >0){
            const getTotalPrice = () => {
                const total = productsCart?.reduce((totalPrice, currentProduct) => {
                    return totalPrice + currentProduct.price;
                },0)
                setTotalPrice(total)
            }
            getTotalPrice()
            
        }
    },[productsCart])

    return (
        <>
            <Navbar.Toggle aria-controls='navbar-dark-example' />
            <Navbar.Collapse id='navbar-dark-example'>
                <Nav>
                    <NavDropdown
                        id='nav-dropdown-dark-example'
                        title='Carrito'
                        menuvariante='dark'
                    >
                        {/* <ShoppingCartItem /> */}
                        {productsCart?.map((product) => {
                            return <ShoppingCartItem key={product.id} item={product}/>;
                        })}
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to={'/purchase'}>
                                Total: ${totalPrice}
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </>

    )
}