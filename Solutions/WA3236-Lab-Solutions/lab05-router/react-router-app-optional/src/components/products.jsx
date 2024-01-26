import React from 'react'
import { NavLink } from 'react-router-dom'

const state = {
  products: [
    { 'name': 'Raincoat', 'description': 'foul weather outerwear', image: '/images/raincoat.jpg' },
    { 'name': 'Socks', 'description': 'for keeping feet warm', image: '/images/socks.jpg' },
    { 'name': 'Gloves', 'description': 'to protect hands', image: '/images/gloves.jpg' },
    { 'name': 'Shoes', 'description': 'all purpose footwear', image: '/images/shoes.jpg' },
    { 'name': 'Hat', 'description': 'head wear', image: '/images/hat.jpg' }
  ]
};

const listItems = state.products.map((item, index) => {
  return <li key={index} ><NavLink to={'/details/' + index } >{item.name}</NavLink></li>
});

const Products = (list) => {
  return (
    <div className='page' >
      <h4>Products Page</h4>
      <div className='pageContent' >
        list of products...<br />
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  )
}

export default Products;