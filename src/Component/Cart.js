import React from 'react'
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';

const Cart = () => {

    const Product = useSelector(state =>state.cart)
    const dispatch = useDispatch()

    const removeCart=(id)=>{
       
        dispatch(remove(id))

    }

    const cards= Product.map(product=>(
        <div className='col-md-3' style={{marginTop:"10px"}}>
        <Card  key={product.id} className='h-100 '>
            <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width:"100px" , height:"130px"}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR.{product.price}
        </Card.Text>
        <Card.Footer style={{background:'white'}}>

        <Button variant="danger" onClick={()=>removeCart(product.id)}>Remove TO Cart</Button>
        </Card.Footer>
      </Card.Body>
    </Card>

    </div>
    ))

  return (
    <>
    <div className='row'>

   {cards}
    </div>
   
    </>
        
  )
}

export default Cart