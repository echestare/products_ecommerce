import React from 'react';
import { Row, Col, Button, Badge } from 'react-bootstrap';
import { saveLastInterestProduct } from '../../app/services/storageServices';
import db from '../../app/db/db.js';
import '../../assets/css/styles.css';

const styles = {
    fontSize: '18px',
    color: 'red'
}

export const Product = ({item}) => {
    const{title,image, price, category, description} = item;

    const addProductToCart = (product) => {
        db.cart.add({
            title: title,
            price: price,
            category: category
        })
    }

    
    return(
        <Col xs={4}>
            <Row>
                <Col xs={6}>
                    <img className='img-product' alt='' src={image}></img>
                </Col>
                <Col xs={6}>
                    <Badge bg='primary'>{category}</Badge>
                </Col>
                
            </Row>
            
            <Row>
                <Col xs={12}>
                    <div style={styles}>{title}</div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div>{description}</div>
                </Col>
            </Row>
            <Row>
                <Col xs={7}>
                    <Button onClick={()=> addProductToCart(item)} variant='primary'>
                        Agregar al Carrito<Badge bg='secondary'></Badge>
                        <span className='visually-hidden'>$</span>
                    </Button>
                </Col>
                <Col xs={5}>
                    <Button onClick={() => saveLastInterestProduct(title)} variant='primary'>
                        PRICE $<Badge bg='secondary'>{price}</Badge>
                        <span className='visually-hidden'>$</span>
                    </Button>
                </Col>

            </Row>

            
        </Col>
    )
}