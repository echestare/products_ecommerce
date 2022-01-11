import React, {useState, useEffect } from 'react';
// import { Alert, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';


export const AlertProduct = () =>{
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState('');

    useEffect (()=>{
        const lastProduct = sessionStorage.getItem('lastProduct')
        if(lastProduct){
            setProduct(lastProduct);
            setShow(true);
        }
        return ()=> {
            sessionStorage.removeItem('lastProduct')
        }

    },[]);
        
    if (show){
        return(
            <Alert variant='danger' onClose={() => setShow(true)} dismissible>
                <Alert.Heading> ¡Continúa comprando!</Alert.Heading>
                <p>
                    ¡¡¡Aprovecha para comprar el producto {product} antes de que se agote!!!
                </p>
            </Alert>

        );
    }
    else{
        return<></>
    }
    // return <Button onClick={()=>setShow(true)}>Show alert</Button>

}