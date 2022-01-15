import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProductDetail = ({ item }) => (
    <>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src={item.image} />
            <Card.Body>
                <Card.Title>
                    {item.description}
                </Card.Title>
            </Card.Body>
        </Card>
        <ListGroup className='list-group-flush'>
            <ListGroupItem>${item.price}</ListGroupItem>
            <ListGroupItem>{item.category}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Link to={'/'}>Volver</Link>
        </Card.Body>
    </>
)