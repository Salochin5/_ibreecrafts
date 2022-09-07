import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
 return (
  <Card className='shadow p-3 mb-5 bg-body rounded my-3'>
   <a href={`/product/${product._id}`}>
    <Card.Img src={product.image} variant='top' className='h-75' />
   </a>
   <Card.Body>
    <a href={`/product/${product._id}`}>
     <Card.Title as='div'>
      <strong>{product.name}</strong>
     </Card.Title>
    </a>

    <Card.Text as='div'>
     <div className='my-3'>
      {product.rating} from {product.numReviews} reviews
     </div>
    </Card.Text>

    <Card.Text as='h3'>${product.price}</Card.Text>
   </Card.Body>
  </Card>
 );
};

export default Product;
