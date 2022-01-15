import React from 'react';
import { Row, Col, Button, Badge, Card } from 'react-bootstrap';
import { saveLastInterestProduct } from '../../app/services/storageServices';
import db from '../../app/db/db.js';
import '../../assets/css/styles.css';
import { getProductById } from "../../app/services/productsServices";

const styles = {
    fontSize: '18px',
    color: 'red'
}

export const Product = ({item}) => {
    const{title,image, price, category, description, id} = item;

    const addProductToCart = ({title, price, category}) => {
        db.cart.add({
            title: title,
            price: price,
            category: category
        });
    };

    // const handleClickPoductCard = (idProduct)=>{
    //     getProductById(idProduct)
    //         .then((data)=>console.log(data))
    // };


    
    // return(
        
    //     <>

    //     <Col xs={4}>
    //         <Row>
    //             <Col xs={6}>
    //                 <img className='img-product' alt='' src={image}></img>
    //             </Col>
    //             <Col xs={6}>
    //                 <Badge bg='primary'>{category}</Badge>
    //             </Col>
                
    //         </Row>
            
    //         <Row>
    //             <Col xs={12}>
    //                 <div style={styles}>{title}</div>
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col xs={12}>
    //                 <div>{description}</div>
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col xs={7}>
    //                 <Button onClick={()=> addProductToCart(item)} variant='primary'>
    //                     Agregar al Carrito<Badge bg='secondary'></Badge>
    //                     <span className='visually-hidden'>$</span>
    //                 </Button>
    //             </Col>
    //             <Col xs={5}>
    //                 <Button onClick={() => saveLastInterestProduct(title)} variant='primary'>
    //                     PRICE $<Badge bg='secondary'>{price}</Badge>
    //                     <span className='visually-hidden'>$</span>
    //                 </Button>
    //             </Col>

    //         </Row>

            
    //     </Col>
    //     </>


    
  const handleClickProductCard = (idProduct) => {
    getProductById(idProduct)
      .then((data) => console.log(data))
  }

  return (
    <div className="col-lg-4 d-flex align-items-stretch">
      <Card onClick={() => handleClickProductCard(id)} style={{ marginBottom: "15px", padding: 10 }}>
        <Row>
          <Col xs={8}>
            <Card.Img
              className="mx-auto"
              variant="top"
              src={image}
              style={{ height: 120, width: 120 }}
            />
          </Col>
          <Col xs={4}>
            <Badge pill bg="info">
              {category}
            </Badge>{" "}
          </Col>
        </Row>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Row>
          <Col>
            <Button onClick={() => addProductToCart(item) } variant="warning">Agregar al carrito</Button>
          </Col>
          <Col>
            <Button onClick={() => saveLastInterestProduct(title) } variant="primary">
              Precio <Badge bg="secondary">${price}</Badge>
            </Button>
          </Col>
        </Row>
      </Card>
    </div>




    );
};