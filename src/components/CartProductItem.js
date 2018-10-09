import React from 'react'
import PropTypes from 'prop-types'
import CartProduct from './CartProduct'
import './ProductItem.css'



const fillRange = (start, end) => {
  return Array(end - start + 1).fill().map((item, index) => start + index);
};

const CartProductItem = ({ product, updateCart, onRemoveFromCartClicked }) => {
  const handleChange = event => {
    selectedVal = event.target.value;
    updateCart(product.sku, selectedVal)
  }
  var selectedVal = 1
  const populateOptions = options => {

    return <select value={product.quantity} onChange={handleChange}>{options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}</select>;
  }
  return (
    // {console.log(key)}

    <div style={{ marginBottom: 20 }} className="Product">
      <div className="ProductName">
        <CartProduct
          title={product.name}
          price={product.price}
          quantity={product.quantity}
          className="Product" />
      </div>
      <div className="DropButton">
        {populateOptions(fillRange(1, 10))}
      </div>
      <div className="ProductButton">
        <button
          onClick={onRemoveFromCartClicked}>
          Remove
      </button>
      </div>
    </div>
  )
}

export default CartProductItem
