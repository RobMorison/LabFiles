import React from 'react'
import {useParams} from 'react-router-dom';

const state = {
  products: [
    { 'name': 'Raincoat', 'description': 'foul weather outerwear', image: '/images/raincoat.jpg' },
    { 'name': 'Socks', 'description': 'for keeping feet warm', image: '/images/socks.jpg' },
    { 'name': 'Gloves', 'description': 'to protect hands', image: '/images/gloves.jpg' },
    { 'name': 'Shoes', 'description': 'all purpose footwear', image: '/images/shoes.jpg' },
    { 'name': 'Hat', 'description': 'head wear', image: '/images/hat.jpg' }
  ]
};

const getProduct = function(index){
  return state.products[index];
}

const ProductDetails = () => {
  const params = useParams();
  let index = params.index;
  let selectedProduct = getProduct(index);
  return (
    <div className='page' >
      <h4>Details Page</h4>
      <div className='pageContent' >
        <table>
            <tbody>
            <tr>
                <td>Name</td>
                <td>{selectedProduct.name}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>{selectedProduct.description}</td>
            </tr>
            <tr>
                <td>Image</td>
                <td><img src={selectedProduct.image} 
                     width='100px' 
                     alt='na' /></td>
            </tr>   
            </tbody>         
        </table>
      </div>
    </div>
  )
}

export default ProductDetails;