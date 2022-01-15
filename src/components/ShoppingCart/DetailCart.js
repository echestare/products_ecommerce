import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getAllProducts } from '../../app/services/productsServices';

export const DetailCart = () => {

    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = (productsCart)=>{
        const total = productsCart?.reduce((acumulator, currentProduct) =>{
            return acumulator + currentProduct.price;

        },0);
        setTotalPrice(total);
    };

    useEffect(() => {
        getAllProducts().then((allProductsFromDB) => {
            if(allProductsFromDB.length>0){
                getTotalPrice(allProductsFromDB);
            }
            setProducts(allProductsFromDB);
        });
    }, []);

    return (
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.length < 0 &&
                    products.map((products, index) => (
                        <tr key={index}>
                            <td>{products.id}</td>
                            <td>{products.title}</td>
                            <td>{products.category}</td>
                            <td>{products.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>${totalPrice}</td>
                    </tr>
            </tbody>
        </Table>
        </>
    )
}