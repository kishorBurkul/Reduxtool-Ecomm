import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button ,Alert} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import { getProducts } from '../Store/productSlice';
import StatusCode from '../utils/StatusCode';

function Product() {

    const dispatch = useDispatch()

    const {data:products , status} = useSelector(state=>state.products)

    // const [product , getProduct] =useState([])

    useEffect(()=>{

//fetch data using dispatch 

dispatch(getProducts())

        // fetch("https://fakestoreapi.com/products").
        // then(data=>data.json())
        // .then(reslut=>getProduct(reslut))
    },[])

if(status === StatusCode.LOADING){
    return <p>Loading.....</p>
}

if(status === StatusCode.ERROR){
    return <Alert key='danger' variant='danger'>Something Went Wrong Try again later</Alert>

}




   const  addToCart= (product) =>{

    //dispatch the action 
    dispatch(add(product))

   }

    const card = products.map(products=>(
        <div className='col-md-3' style={{marginTop:"10px"}}>
        <Card  key={products.id} className='h-100 '>
            <div className='text-center'>
      <Card.Img variant="top" src={products.image} style={{width:"100px" , height:"130px"}} />
      </div>
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
          INR.{products.price}
        </Card.Text>
        <Card.Footer style={{background:'white'}}>

        <Button variant="primary" onClick={()=>addToCart(products)}>Add TO Cart</Button>
        </Card.Footer>
      </Card.Body>
    </Card>

        </div>
    ))
  return (
    <>
    {/* <h1>Product Dashborad</h1> */}
    <div className='row'>
    {card}
    </div>
    
    </>
    
  )
}

export default Product