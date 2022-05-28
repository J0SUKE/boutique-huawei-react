import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const productId  = useParams();
  
  return (
    <h1>this is the Product page of id : {productId.id}</h1>
  )
}

export default Product