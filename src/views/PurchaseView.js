import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { DetailCart } from '../components/ShoppingCart/DetailCart';
import { Container } from 'react-bootstrap';

export const PurchaseView = ({ history }) => {

    const handleCancelButton = () => {
        history.push('/');

    };

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>
                            Página del carrito de compra.
                        </h2>
                        <DetailCart />

                    </Col>
                </Row>
                <Container>

                    <Row>
                        <Col xs={6}>
                            <Button onClick={handleCancelButton} variant='danger'>Cancelar</Button>
                        </Col>
                        <Col xs={6}>
                            <Button variant='success'>Comprar</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    );
};
