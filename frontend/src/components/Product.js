import React from "react";
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
 return (
  <Card className='shadow p-3 mb-5 bg-body rounded my-3'>
   <Link to={`/product/${product._id}`}>
    <Card.Img src={product.image} variant='top' className='h-75' />
   </Link>
   <Card.Body>
    <Link to={`/product/${product._id}`}>
     <Card.Title as='div'>
      <strong>{product.name}</strong>
     </Card.Title>
    </Link>

    <Card.Text as='div'>
     <Rating value={product.rating} text={`${product.numReviews} reviews`} />
    </Card.Text>

    <Card.Text as='h3'>${product.price}</Card.Text>
   </Card.Body>
  </Card>
 );
};

export default Product;
