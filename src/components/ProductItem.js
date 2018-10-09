import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }} className = "Product">
    <div className = "ProductName">
      <Product
        title={product.name}
        price={product.price}
        className = "Product"/>
    </div>
    <div className = "ProductButton">
      <button
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to basket' : 'Sold Out'}
      </button>
    </div>
  </div>
)


export default ProductItem
